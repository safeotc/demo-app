import { CURRENCIES } from '../../../../common/constants/currencies';
import { OrderType } from '../../../../models/Order';
import PrimaryButton from '../../../forms/buttons/PrimaryButton';
import SecondaryButton from '../../../forms/buttons/SecondaryButton';
import Form from '../../../forms/Form';
import Input from '../../../forms/Input';
import FormSelect from '../../../forms/formSelect/FormSelect';
import FormInput from '../../../forms/formInput/FormInput';

const FIELD_COF_TOKEN = 'cof-token';
const FIELD_COF_TOKEN_CONTRACT = 'cof-token-contract';
const FIELD_COF_QUANTITY = 'cof-quantity';
const FIELD_COF_PRICE = 'cof-price';
const FIELD_COF_UNLOCK = 'cof-unlock';
const FIELD_COF_SECURITY_DEPOSIT = 'cof-security-deposit';

interface CreateOrderFormFields {
    [FIELD_COF_TOKEN]: string;
    [FIELD_COF_TOKEN_CONTRACT]: string;
    [FIELD_COF_QUANTITY]: number | '';
    [FIELD_COF_PRICE]: number | '';
    [FIELD_COF_UNLOCK]: number | '';
    [FIELD_COF_SECURITY_DEPOSIT]: number | '';
}

type TokenValue = CreateOrderFormFields[typeof FIELD_COF_TOKEN];
type TokenContractValue = CreateOrderFormFields[typeof FIELD_COF_TOKEN_CONTRACT];
type QuantityValue = CreateOrderFormFields[typeof FIELD_COF_QUANTITY];
/*
type PriceValue = CreateOrderFormFields[typeof FIELD_COF_PRICE];
type UnlockValue = CreateOrderFormFields[typeof FIELD_COF_UNLOCK];
type SecurityDepositValue = CreateOrderFormFields[typeof FIELD_COF_SECURITY_DEPOSIT];
*/

interface CreateOrderFormProps {
    type: OrderType;
}

const convertToNumberOrEmptyString = (value: string) => {
    const valueAsNumber = Number(value);
    return !isNaN(valueAsNumber) ? valueAsNumber : '';
};

const CreateNewOrderForm = ({ type }: CreateOrderFormProps) => {
    const initialValues: CreateOrderFormFields = {
        [FIELD_COF_TOKEN]: '',
        [FIELD_COF_TOKEN_CONTRACT]: '',
        [FIELD_COF_QUANTITY]: '',
        [FIELD_COF_PRICE]: '',
        [FIELD_COF_UNLOCK]: '',
        [FIELD_COF_SECURITY_DEPOSIT]: '',
    };

    return (
        <Form initialValues={initialValues} onSubmit={(values) => console.log('submitting', values)}>
            <div className="u-margin-bottom">
                <FormSelect<TokenValue>
                    name={FIELD_COF_TOKEN}
                    id={FIELD_COF_TOKEN}
                    label="Token"
                    placeholder="Select a token"
                    options={CURRENCIES.map((c) => ({ value: c.symbol, label: c.name, icon: c.icon }))}
                    toFormValue={(value) => (!!value ? value.value : initialValues[FIELD_COF_TOKEN])}
                    fromFormValue={(value) => {
                        const c = CURRENCIES.find((c) => c.symbol === value);
                        return !!c ? { value: c.symbol, label: c.name, icon: c.icon } : null;
                    }}
                />
            </div>

            <div className="u-margin-bottom">
                <FormInput<TokenContractValue>
                    label="Token contract"
                    id={FIELD_COF_TOKEN_CONTRACT}
                    name={FIELD_COF_TOKEN_CONTRACT}
                    placeholder="0x..."
                    toFormValue={(value) => value}
                    fromFormValue={(value) => value}
                />
            </div>

            <div className="u-margin-bottom">
                <FormInput<QuantityValue>
                    id={FIELD_COF_QUANTITY}
                    name={FIELD_COF_QUANTITY}
                    label="Quantity"
                    min={0}
                    placeholder="Quantity"
                    type="number"
                    toFormValue={convertToNumberOrEmptyString}
                    fromFormValue={(value) => value.toString()}
                />
            </div>

            <div className="u-margin-bottom">
                <Input label="Price (USD)" min={0} placeholder="Price" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input label="Unlock (%)" min={0} max={100} placeholder="Unlock" type="number" />
            </div>

            <div className="u-margin-bottom-large">
                <Input label="Security deposit (USD)" min={0} placeholder="Security deposit" type="number" />
            </div>

            <div className="u-text-center">
                <PrimaryButton type="submit">Create buy order</PrimaryButton>
                <SecondaryButton type="reset">Clear fields</SecondaryButton>
            </div>
        </Form>
    );
};

export default CreateNewOrderForm;
