import { CURRENCIES } from '../../../../common/constants/currencies';
import Order, { OrderHistory, OrderType } from '../../../../models/Order';
import { OnSubmit, ValidationRules } from '../../../forms/Form';
import { OnProcessed } from './CreateNewOrderForm';
import { v4 as uuidV4 } from 'uuid';
import OrdersRepository from '../../../../repositories/OrdersRepository';
import { useContext } from 'react';
import { WalletContext } from '../../../wallet/WalletProvider';
import { Rules } from '../../../../common/helpers/forms';
import { getDepositValues, getOrderCreatedText } from '../../../../common/helpers/orders';

export const FIELD_COF_TOKEN = 'cof-token';
export const FIELD_COF_QUANTITY = 'cof-quantity';
export const FIELD_COF_PRICE = 'cof-price';

interface CreateOrderFormFields {
    [FIELD_COF_TOKEN]: string;
    [FIELD_COF_QUANTITY]: string;
    [FIELD_COF_PRICE]: string;
}

export type PriceValue = CreateOrderFormFields[typeof FIELD_COF_PRICE];
export type QuantityValue = CreateOrderFormFields[typeof FIELD_COF_QUANTITY];

const initialValues: CreateOrderFormFields = {
    [FIELD_COF_TOKEN]: '',
    [FIELD_COF_QUANTITY]: '',
    [FIELD_COF_PRICE]: '',
};

const validationRules: ValidationRules<CreateOrderFormFields> = {
    [FIELD_COF_TOKEN]: [
        Rules.required('Token is required.'),
        Rules.oneOf(
            CURRENCIES.map((c) => c.symbol),
            'Select a valid option.'
        ),
    ],
    [FIELD_COF_PRICE]: [
        Rules.required('Price is required.'),
        Rules.isNumber('Enter a valid number.'),
        Rules.isGtZero('Number should be greater than 0.'),
    ],
    [FIELD_COF_QUANTITY]: [
        Rules.required('Token quantity is required.'),
        Rules.isNumber('Enter a valid number.'),
        Rules.isGtZero('Number should be greater than 0.'),
    ],
};

const options = CURRENCIES.map((c) => ({ value: c.symbol, label: c.name, icon: c.icon }));

const useCreateNewOrderForm = (type: OrderType, onProcessed: OnProcessed) => {
    const { address: makerWalletAddress } = useContext(WalletContext);

    const onSubmit: OnSubmit<CreateOrderFormFields> = async (values, { setSubmitting }) => {
        const asset =
            CURRENCIES.find((c) => c.symbol === values[FIELD_COF_TOKEN])?.name?.toUpperCase() ||
            values[FIELD_COF_TOKEN];
        const price = Number(values[FIELD_COF_PRICE]);
        const quantity = Number(values[FIELD_COF_QUANTITY]);
        const { buy: buyDepositValue, sell: sellDepositValue } = getDepositValues(price, quantity);
        const currency = 'USDT';
        const orderCreatedDateTime = Date.now();
        const orderCreatedText = getOrderCreatedText(type, price, quantity, currency);
        const orderHistory: OrderHistory = [orderCreatedDateTime, orderCreatedText];

        const order: Order = {
            asset,
            buyer: type === 'buy' ? makerWalletAddress : null,
            seller: type === 'sell' ? makerWalletAddress : null,
            type,
            currency,
            id: uuidV4(),
            price,
            quantity,
            totalDeposit: buyDepositValue,
            securityDeposit: sellDepositValue,
            status: 'open',
            tokensSent: false,
            history: [orderHistory],
        };

        await OrdersRepository.addOrder(order);
        setSubmitting(false);
        onProcessed(true, order);
    };

    return {
        initialValues,
        validationRules,
        options,
        onSubmit,
    };
};

export default useCreateNewOrderForm;
