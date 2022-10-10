import { OrderType } from '../../../../models/Order';
import Input from '../../../forms/Input';
import useSecurityDepositField from './useSecurityDepositField';

interface SecurityDepositFieldProps {
    type: OrderType;
}

const SecurityDepositField = ({ type }: SecurityDepositFieldProps) => {
    const value = useSecurityDepositField(type);
    return (
        <Input
            value={value}
            readOnly={true}
            disabled={true}
            id="cof-security-deposit"
            label="Security deposit (USD)"
            placeholder="Security deposit"
        />
    );
};

export default SecurityDepositField;
