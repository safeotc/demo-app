import Tooltip from '../../../../forms/tooltip/Tooltip';

interface DisabledButtonTooltipProps {
    tooltipText: string;
    children: React.ReactNode;
}

const DisabledButtonTooltip = ({ tooltipText, children }: DisabledButtonTooltipProps) => {
    return (
        <Tooltip content={tooltipText}>
            {({ tooltipId, showTooltip, hideTooltip }) => (
                <div className="c-disabled-button-tooltip">
                    <div
                        data-for={tooltipId}
                        onMouseEnter={showTooltip}
                        onMouseLeave={hideTooltip}
                        data-tip
                        className="c-disabled-button-tooltip__hoverer"
                    />
                    {children}
                </div>
            )}
        </Tooltip>
    );
};

export default DisabledButtonTooltip;
