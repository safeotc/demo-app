import { OrderType } from '../../../../models/Order';
import Input from '../../../forms/Input';
import useValueDepositField from './useValueDepositField';

interface ValueDepositFieldProps {
    type: OrderType;
    info: string;
}

const ValueDepositField = ({ type, info }: ValueDepositFieldProps) => {
    const { label, value } = useValueDepositField(type);

    return (
        <Input
            value={value}
            readOnly={true}
            disabled={true}
            id="cof-value-deposit"
            label={`${label} (USDT)`}
            placeholder={label}
            info={
                <div style={{ maxWidth: '330px' }}>
                    {info}
                    <br />
                    This field will autocomplete once the valid values for quantity and price fields have been inputed.
                </div>
            }
        />
    );
};

export default ValueDepositField;
