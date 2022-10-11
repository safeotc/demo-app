import { OrderType } from '../../../../models/Order';
import Input from '../../../forms/Input';
import useSecurityDepositField from './useSecurityDepositField';

interface SecurityDepositFieldProps {
    type: OrderType;
    info: string;
}

const SecurityDepositField = ({ type, info }: SecurityDepositFieldProps) => {
    const value = useSecurityDepositField(type);

    return (
        <Input
            value={value}
            readOnly={true}
            disabled={true}
            id="cof-security-deposit"
            label="Security deposit (USD)"
            placeholder="Security deposit"
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

export default SecurityDepositField;
