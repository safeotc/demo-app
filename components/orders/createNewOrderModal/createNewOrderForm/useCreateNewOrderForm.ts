import * as Yup from 'yup';
import { CURRENCIES } from '../../../../common/constants/currencies';
import Order, { OrderType } from '../../../../models/Order';
import { OnSubmit } from '../../../forms/Form';
import { OnProcessed } from './CreateNewOrderForm';
import { v4 as uuidV4 } from 'uuid';
import OrdersRepository from '../../../../repositories/OrdersRepository';
import { useContext } from 'react';
import { WalletContext } from '../../../wallet/WalletProvider';
import { getSecurityDeposit } from '../securityDepositField/useSecurityDepositField';

type InvalidNumber = undefined;
type EmptyNumber = null;
type NumberInput = number | InvalidNumber | EmptyNumber;

const NUMBER = {
    INVALID: undefined,
    EMPTY: null,
};

export const FIELD_COF_TOKEN = 'cof-token';
export const FIELD_COF_QUANTITY = 'cof-quantity';
export const FIELD_COF_PRICE = 'cof-price';

interface CreateOrderFormFields {
    [FIELD_COF_TOKEN]: string;
    [FIELD_COF_QUANTITY]: NumberInput;
    [FIELD_COF_PRICE]: NumberInput;
}

export type TokenValue = CreateOrderFormFields[typeof FIELD_COF_TOKEN];
export type QuantityValue = CreateOrderFormFields[typeof FIELD_COF_QUANTITY];
export type PriceValue = CreateOrderFormFields[typeof FIELD_COF_PRICE];

const initialValues: CreateOrderFormFields = {
    [FIELD_COF_TOKEN]: '',
    [FIELD_COF_QUANTITY]: null,
    [FIELD_COF_PRICE]: null,
};

const validationSchema = Yup.object().shape({
    [FIELD_COF_TOKEN]: Yup.string()
        .transform((_, val) => val || '')
        .required('Token is required.')
        .oneOf(
            CURRENCIES.map((c) => c.symbol),
            'Select a valid option.'
        ),
    [FIELD_COF_QUANTITY]: Yup.number()
        .transform((val, _) => (isNaN(val) ? undefined : val))
        .required('Token quantity is required.')
        .moreThan(0, 'Number should be greater than 0.'),
    [FIELD_COF_PRICE]: Yup.number()
        .transform((val, _) => (isNaN(val) ? undefined : val))
        .required('Token price is required.')
        .moreThan(0, 'Number should be greater than 0.'),
});

const numberInputTransformer = {
    toFormValue: (value: string): NumberInput => {
        const trimmedValue = value.trim();
        if (!trimmedValue.length) {
            return NUMBER.EMPTY;
        }
        const valueAsNumber = Number(trimmedValue);
        return isNaN(valueAsNumber) ? NUMBER.INVALID : valueAsNumber;
    },
    fromFormValue: (value: NumberInput): string => value?.toString() || '',
};

const options = CURRENCIES.map((c) => ({ value: c.symbol, label: c.name, icon: c.icon }));

const useCreateNewOrderForm = (type: OrderType, onProcessed: OnProcessed) => {
    const { address: makerWalletAddress } = useContext(WalletContext);

    const onSubmit: OnSubmit<CreateOrderFormFields> = async (values, { setSubmitting }) => {
        const price = values[FIELD_COF_PRICE] as number;
        const quantity = values[FIELD_COF_QUANTITY] as number;
        const securityDeposit = getSecurityDeposit(type, price, quantity);

        const order: Order = {
            asset: values[FIELD_COF_TOKEN],
            buyer: type === 'buy' ? makerWalletAddress : null,
            seller: type === 'sell' ? makerWalletAddress : null,
            type,
            currency: 'USDT',
            id: uuidV4(),
            price,
            quantity,
            securityDeposit,
            status: 'open',
        };

        await OrdersRepository.addOrder(order);
        setSubmitting(false);
        onProcessed(true);
    };

    return {
        initialValues,
        validationSchema,
        numberInputTransformer,
        options,
        onSubmit,
    };
};

export default useCreateNewOrderForm;
