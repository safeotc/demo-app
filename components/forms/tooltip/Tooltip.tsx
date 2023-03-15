import ReactTooltip from 'react-tooltip';
import useTooltip from './useTooltip';

interface TooltipRenderProps {
    showTooltip: () => void;
    hideTooltip: () => void;
    tooltipId: string;
}

interface TooltipProps {
    children: (renderProps: TooltipRenderProps) => JSX.Element;
    content: JSX.Element | string;
}

const Tooltip = ({ children, content }: TooltipProps) => {
    const { tooltip, tooltipId, showTooltip, hideTooltip } = useTooltip();

    return (
        <>
            {children({ showTooltip, hideTooltip, tooltipId })}
            {tooltip && (
                <ReactTooltip id={tooltipId} effect="solid">
                    {content}
                </ReactTooltip>
            )}
        </>
    );
};

export default Tooltip;
