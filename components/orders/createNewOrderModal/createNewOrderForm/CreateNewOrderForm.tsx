import { OrderType } from '../../../../models/Order';
import Form from '../../../forms/Form';
import FormSelect from '../../../forms/formSelect/FormSelect';
import FormInput from '../../../forms/formInput/FormInput';
import useCreateNewOrderForm, {
    FIELD_COF_PRICE,
    FIELD_COF_QUANTITY,
    FIELD_COF_SECURITY_DEPOSIT,
    FIELD_COF_TOKEN,
    FIELD_COF_TOKEN_CONTRACT,
    FIELD_COF_UNLOCK,
    PriceValue,
    QuantityValue,
    SecurityDepositValue,
    TokenContractValue,
    TokenValue,
    UnlockValue,
} from './useCreateNewOrderForm';
import FormSubmitButton from '../../../forms/buttons/FormSubmitButton';
import FormResetButton from '../../../forms/buttons/FormResetButton';

interface CreateOrderFormProps {
    type: OrderType;
}

const CreateNewOrderForm = ({ type }: CreateOrderFormProps) => {
    const { initialValues, validationSchema, numberInputTransformer, options, onSubmit } = useCreateNewOrderForm(type);

    return (
        <Form initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <div className="u-margin-bottom">
                <FormSelect<TokenValue>
                    name={FIELD_COF_TOKEN}
                    id={FIELD_COF_TOKEN}
                    label="Token"
                    placeholder="Select a token"
                    options={options}
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
                    {...numberInputTransformer}
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
                    {...numberInputTransformer}
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
                    {...numberInputTransformer}
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
                    {...numberInputTransformer}
                />
            </div>

            <div className="u-text-center">
                <FormSubmitButton>Create {type} order</FormSubmitButton>
                <FormResetButton>Clear fields</FormResetButton>
            </div>
        </Form>
    );
};

export default CreateNewOrderForm;
