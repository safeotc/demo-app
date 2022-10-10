import { useFormikContext } from 'formik';
import { OrderType } from '../../../../models/Order';
import {
    FIELD_COF_PRICE,
    FIELD_COF_QUANTITY,
    PriceValue,
    QuantityValue,
} from '../createNewOrderForm/useCreateNewOrderForm';

export const getSecurityDeposit = (type: OrderType, price: number, quantity: number) => {
    const multiplier = type === 'buy' ? 1 : 0.5;
    const securityDeposit = multiplier * price * quantity;
    return securityDeposit;
};

const useSecurityDepositField = (type: OrderType) => {
    const { getFieldMeta } = useFormikContext();
    const { value: priceValue, error: priceError } = getFieldMeta<PriceValue>(FIELD_COF_PRICE);
    const { value: quantityValue, error: quantityError } = getFieldMeta<QuantityValue>(FIELD_COF_QUANTITY);

    if (!!priceError || !!quantityError || !priceValue || !quantityValue) {
        return '';
    }

    return getSecurityDeposit(type, Number(priceValue), Number(quantityValue));
};

export default useSecurityDepositField;
