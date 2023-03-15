import Tooltip from '../../../../forms/tooltip/Tooltip';
import { v4 as uuidV4 } from 'uuid';
import { useRef } from 'react';

interface DisabledButtonTooltipProps {
    tooltipText: string;
    children: React.ReactNode;
}

const DisabledButtonTooltip = ({ tooltipText, children }: DisabledButtonTooltipProps) => {
    const uuid = useRef(uuidV4());

    return (
        <Tooltip content={tooltipText} id={uuid.current}>
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
