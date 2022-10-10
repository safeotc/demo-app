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
    id: string;
}

const Tooltip = ({ children, content, id }: TooltipProps) => {
    const { tooltip, showTooltip, hideTooltip } = useTooltip();

    return (
        <>
            {children({ showTooltip, hideTooltip, tooltipId: id })}
            {tooltip && (
                <ReactTooltip id={id} effect="solid">
                    {content}
                </ReactTooltip>
            )}
        </>
    );
};

export default Tooltip;
