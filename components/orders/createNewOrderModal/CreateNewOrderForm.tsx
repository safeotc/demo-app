import { CURRENCIES } from '../../../common/constants/currencies';
import { OrderType } from '../../../models/Order';
import PrimaryButton from '../../forms/buttons/PrimaryButton';
import SecondaryButton from '../../forms/buttons/SecondaryButton';
import Form from '../../forms/Form';
import FormSelect from '../../forms/formSelect/FormSelect';
import FormInput from '../../forms/formInput/FormInput';
import * as Yup from 'yup';

const FIELD_COF_TOKEN = 'cof-token';
const FIELD_COF_TOKEN_CONTRACT = 'cof-token-contract';
const FIELD_COF_QUANTITY = 'cof-quantity';
const FIELD_COF_PRICE = 'cof-price';
const FIELD_COF_UNLOCK = 'cof-unlock';
const FIELD_COF_SECURITY_DEPOSIT = 'cof-security-deposit';

interface CreateOrderFormFields {
    [FIELD_COF_TOKEN]: string;
    [FIELD_COF_TOKEN_CONTRACT]: string;
    [FIELD_COF_QUANTITY]: string;
    [FIELD_COF_PRICE]: string;
    [FIELD_COF_UNLOCK]: string;
    [FIELD_COF_SECURITY_DEPOSIT]: string;
}

type TokenValue = CreateOrderFormFields[typeof FIELD_COF_TOKEN];
type TokenContractValue = CreateOrderFormFields[typeof FIELD_COF_TOKEN_CONTRACT];
type QuantityValue = CreateOrderFormFields[typeof FIELD_COF_QUANTITY];
type PriceValue = CreateOrderFormFields[typeof FIELD_COF_PRICE];
type UnlockValue = CreateOrderFormFields[typeof FIELD_COF_UNLOCK];
type SecurityDepositValue = CreateOrderFormFields[typeof FIELD_COF_SECURITY_DEPOSIT];

interface CreateOrderFormProps {
    type: OrderType;
}

const initialValues: CreateOrderFormFields = {
    [FIELD_COF_TOKEN]: '',
    [FIELD_COF_TOKEN_CONTRACT]: '',
    [FIELD_COF_QUANTITY]: '',
    [FIELD_COF_PRICE]: '',
    [FIELD_COF_UNLOCK]: '',
    [FIELD_COF_SECURITY_DEPOSIT]: '',
};

const validationSchema = Yup.object().shape({
    [FIELD_COF_TOKEN]: Yup.string().required('Token is required.'),
    [FIELD_COF_TOKEN_CONTRACT]: Yup.string().required('Token contract address is required.'),
    [FIELD_COF_QUANTITY]: Yup.string().required('Token quantity is required.'),
    [FIELD_COF_PRICE]: Yup.string().required('Token price is required.'),
    [FIELD_COF_UNLOCK]: Yup.string().required('Token unlock amount is required.'),
    [FIELD_COF_SECURITY_DEPOSIT]: Yup.number()
        .required('Security deposit amount is required.')
        .min(0, 'Number should be greater than 0.'),
});

const CreateNewOrderForm = ({ type }: CreateOrderFormProps) => {
    return (
        <Form
            initialValues={initialValues}
            onSubmit={(values) => console.log('submitting', values)}
            validationSchema={validationSchema}
        >
            <div className="u-margin-bottom">
                <FormSelect<TokenValue>
                    name={FIELD_COF_TOKEN}
                    id={FIELD_COF_TOKEN}
                    label="Token"
                    placeholder="Select a token"
                    options={CURRENCIES.map((c) => ({ value: c.symbol, label: c.name, icon: c.icon }))}
                    toFormValue={(value) => value || ''}
                    fromFormValue={(value) => (!!value ? value : '')}
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
                    step="any"
                    placeholder="Quantity"
                    type="number"
                    toFormValue={(value) => value}
                    fromFormValue={(value) => value}
                />
            </div>

            <div className="u-margin-bottom">
                <FormInput<PriceValue>
                    id={FIELD_COF_PRICE}
                    name={FIELD_COF_PRICE}
                    label="Price (USD)"
                    min={0}
                    step="any"
                    placeholder="Price"
                    type="number"
                    toFormValue={(value) => value}
                    fromFormValue={(value) => value}
                />
            </div>

            <div className="u-margin-bottom">
                <FormInput<UnlockValue>
                    id={FIELD_COF_UNLOCK}
                    name={FIELD_COF_UNLOCK}
                    label="Unlock (%)"
                    min={0}
                    max={100}
                    step="any"
                    placeholder="Unlock"
                    type="number"
                    toFormValue={(value) => value}
                    fromFormValue={(value) => value}
                />
            </div>

            <div className="u-margin-bottom-large">
                <FormInput<SecurityDepositValue>
                    id={FIELD_COF_SECURITY_DEPOSIT}
                    name={FIELD_COF_SECURITY_DEPOSIT}
                    label="Security deposit (USD)"
                    min={0}
                    step="any"
                    placeholder="Security deposit"
                    type="number"
                    toFormValue={(value) => value}
                    fromFormValue={(value) => value}
                />
            </div>

            <div className="u-text-center">
                <PrimaryButton type="submit">Create buy order</PrimaryButton>
                <SecondaryButton type="reset">Clear fields</SecondaryButton>
            </div>
        </Form>
    );
};

export default CreateNewOrderForm;
