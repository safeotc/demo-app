import { LabelHTMLAttributes } from 'react';
import cn from 'classnames';

export type LabelContent = string | JSX.Element;

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    content: LabelContent;
}

const Label = ({ content, ...props }: LabelProps) => {
    const { className, ...labelProps } = props;
    const labelClasses = cn(className, 'c-label');
    return (
        <label {...labelProps} className={labelClasses}>
            {content}
        </label>
    );
};

export default Label;
