import { useFormikContext } from 'formik';
import { getDepositValues } from '../../../../common/helpers/orders';
import { OrderType } from '../../../../models/Order';
import {
    FIELD_COF_PRICE,
    FIELD_COF_QUANTITY,
    PriceValue,
    QuantityValue,
} from '../createNewOrderForm/useCreateNewOrderForm';

const useValueDepositField = (type: OrderType) => {
    const { getFieldMeta } = useFormikContext();
    const { value: priceValue, error: priceError } = getFieldMeta<PriceValue>(FIELD_COF_PRICE);
    const { value: quantityValue, error: quantityError } = getFieldMeta<QuantityValue>(FIELD_COF_QUANTITY);

    const label = type === 'buy' ? 'Total deposit' : 'Security deposit';

    const skipValueCalculation = !!priceError || !!quantityError || !priceValue || !quantityValue;
    const value = skipValueCalculation ? '' : getDepositValues(Number(priceValue), Number(quantityValue))[type];

    return { label, value };
};

export default useValueDepositField;
