import FlatIcon from '../../icons/FlatIcon';
import Tooltip from '../tooltip/Tooltip';
import useInputTooltip from './useInputTooltip';

interface InputTooltipProps {
    content: JSX.Element | string;
}

const InputTooltip = ({ content }: InputTooltipProps) => {
    const id = useInputTooltip();

    if (!id) {
        return null;
    }

    return (
        <Tooltip content={content} id={id}>
            {({ showTooltip, hideTooltip, tooltipId }) => (
                <FlatIcon
                    data-for={tooltipId}
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                    data-tip
                    className="c-input__info"
                    icon="comment-info"
                />
            )}
        </Tooltip>
    );
};

export default InputTooltip;
