import { useFormikContext } from 'formik';
import { OrderType } from '../../../../models/Order';
import { FIELD_COF_PRICE, FIELD_COF_QUANTITY } from '../createNewOrderForm/useCreateNewOrderForm';

export const getSecurityDeposit = (type: OrderType, price: number, quantity: number) => {
    const multiplier = type === 'buy' ? 1 : 0;
    const securityDeposit = multiplier * price * quantity;
    return securityDeposit;
};

const useSecurityDepositField = (type: OrderType) => {
    const { getFieldProps } = useFormikContext();
    const { value: priceValue } = getFieldProps(FIELD_COF_PRICE);
    const { value: quantityValue } = getFieldProps(FIELD_COF_QUANTITY);

    const value =
        typeof priceValue === 'number' && typeof quantityValue === 'number'
            ? getSecurityDeposit(type, priceValue, quantityValue)
            : '';
    return value;
};

export default useSecurityDepositField;
