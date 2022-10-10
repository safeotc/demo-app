import { FormErrors, ValidationRules } from '../../components/forms/Form';

export const validateHelper = <FormValues extends {}>(
    values: FormValues,
    validationRules: ValidationRules<FormValues>
) => {
    const errors: FormErrors<FormValues> = {};

    let field: keyof typeof validationRules;
    let fieldRules: ValidationRules<FormValues>[keyof FormValues];
    let fieldError: string | void;

    for (field in validationRules) {
        if (!(fieldRules = validationRules[field])) {
            continue;
        }

        for (let fieldRule of fieldRules) {
            fieldError = fieldRule(values[field]);

            if (!!fieldError) {
                errors[field] = fieldError;
                break;
            }
        }
    }

    return errors;
};

export const Rules = {
    required: (errorMessage?: string) => (value: string) => {
        const valueHasChars = value.trim().length > 0;
        if (!valueHasChars) {
            return errorMessage || 'Field is required.';
        }
    },
    oneOf: (validValues: string[], errorMessage?: string) => (value: string) => {
        const isValueValid = validValues.findIndex((v) => v === value) >= 0;
        if (!isValueValid) {
            return errorMessage || `Value is '${value}' is invalid.`;
        }
    },
    isNumber: (errorMessage?: string) => (value: string) => {
        const valueAsNumber = Number(value);
        const isNumber = !isNaN(valueAsNumber);
        if (!isNumber) {
            return errorMessage || 'Value is not a number.';
        }
    },
    isGtZero: (errorMessage?: string) => (value: string) => {
        const valueAsNumber = Number(value);
        const isGreaterThanZero = valueAsNumber > 0;
        if (!isGreaterThanZero) {
            return errorMessage || 'Value must be greater than 0.';
        }
    },
};
