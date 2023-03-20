import Input from '../../forms/Input';

const VestingField = () => {
    return (
        <Input
            value="100"
            readOnly={true}
            disabled={true}
            id="cof-vesting"
            label="Vesting (%)"
            placeholder="Vesting"
            info={
                <div style={{ maxWidth: '330px' }}>
                    100% of tokens will be released on TGE for the purposes of demo application.
                    <br />
                    Production version will enable you to define more complex vesting scenarios (partial vesting,
                    distribution cliffs, etc.).
                </div>
            }
        />
    );
};

export default VestingField;
