import SecondaryButton from '../../../../../forms/buttons/SecondaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useGoBackButton from './useGoBackButton';

const GoBackButton = () => {
    const goBack = useGoBackButton();
    return (
        <SecondaryButton className="u-width-full" icon={<FlatIcon icon="angle-small-left" />} onClick={goBack}>
            Go back
        </SecondaryButton>
    );
};

export default GoBackButton;
