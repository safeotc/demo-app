import FlatIcon from '../icons/FlatIcon';
import Tooltip from './tooltip/Tooltip';

interface InputTooltipProps {
    content: JSX.Element | string;
}

const InputTooltip = ({ content }: InputTooltipProps) => {
    return (
        <Tooltip content={content}>
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
