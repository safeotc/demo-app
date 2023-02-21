import { useFormikContext } from 'formik';
import { OrderType } from '../../../../models/Order';
import {
    FIELD_COF_PRICE,
    FIELD_COF_QUANTITY,
    PriceValue,
    QuantityValue,
} from '../createNewOrderForm/useCreateNewOrderForm';

export const getValueDeposit = (type: OrderType, price: number, quantity: number) => {
    const multiplier = type === 'buy' ? 1 : 0.5;
    const valueDeposit = multiplier * price * quantity;
    return valueDeposit;
};

const useValueDepositField = (type: OrderType) => {
    const { getFieldMeta } = useFormikContext();
    const { value: priceValue, error: priceError } = getFieldMeta<PriceValue>(FIELD_COF_PRICE);
    const { value: quantityValue, error: quantityError } = getFieldMeta<QuantityValue>(FIELD_COF_QUANTITY);

    const label = type === 'buy' ? 'Total deposit' : 'Security deposit';

    const skipValueCalculation = !!priceError || !!quantityError || !priceValue || !quantityValue;
    const value = skipValueCalculation ? '' : getValueDeposit(type, Number(priceValue), Number(quantityValue));

    return { label, value };
};

export default useValueDepositField;
