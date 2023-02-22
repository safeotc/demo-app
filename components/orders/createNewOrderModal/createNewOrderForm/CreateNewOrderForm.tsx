import Order, { OrderType } from '../../../../models/Order';
import Form from '../../../forms/Form';
import FormSelect from '../../../forms/formSelect/FormSelect';
import FormInput from '../../../forms/formInput/FormInput';
import useCreateNewOrderForm, { FIELD_COF_PRICE, FIELD_COF_QUANTITY, FIELD_COF_TOKEN } from './useCreateNewOrderForm';
import FormSubmitButton from '../../../forms/buttons/FormSubmitButton';
import FormResetButton from '../../../forms/buttons/FormResetButton';
import ValueDepositField from '../valueDepositField/ValueDepositField';

export type OnProcessed = (success: boolean, order: Order | null) => void;

interface CreateOrderFormProps {
    type: OrderType;
    onProcessed: OnProcessed;
    valueDepositInfo: string;
}

const CreateNewOrderForm = ({ type, valueDepositInfo, onProcessed }: CreateOrderFormProps) => {
    const { initialValues, validationRules, options, onSubmit } = useCreateNewOrderForm(type, onProcessed);

    return (
        <Form initialValues={initialValues} onSubmit={onSubmit} validationRules={validationRules}>
            <div className="u-margin-bottom">
                <FormSelect
                    name={FIELD_COF_TOKEN}
                    id={FIELD_COF_TOKEN}
                    label="Token"
                    placeholder="Select a token"
                    options={options}
                />
            </div>

            <div className="u-margin-bottom">
                <FormInput
                    id={FIELD_COF_QUANTITY}
                    name={FIELD_COF_QUANTITY}
                    label="Quantity"
                    min={0}
                    step="any"
                    placeholder="Quantity"
                    type="number"
                />
            </div>

            <div className="u-margin-bottom">
                <FormInput
                    id={FIELD_COF_PRICE}
                    name={FIELD_COF_PRICE}
                    label="Price (USDT)"
                    min={0}
                    step="any"
                    placeholder="Price"
                    type="number"
                />
            </div>

            <div className="u-margin-bottom">
                <ValueDepositField type={type} info={valueDepositInfo} />
            </div>

            <div className="u-margin-bottom-large"></div>

            <div className="u-text-center">
                <FormSubmitButton>Create {type} order</FormSubmitButton>
                <FormResetButton>Clear fields</FormResetButton>
            </div>
        </Form>
    );
};
export default CreateNewOrderForm;
