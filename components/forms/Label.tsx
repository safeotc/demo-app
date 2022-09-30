import { InputHTMLAttributes } from 'react';
import cn from 'classnames';

export type LabelContent = string | JSX.Element;

export interface LabelProps extends InputHTMLAttributes<HTMLLabelElement> {
    content: LabelContent;
}

const Label: React.FC<LabelProps> = ({ content, ...props }) => {
    const { className, ...labelProps } = props;
    const labelClasses = cn(className, 'c-label');
    return (
        <label {...labelProps} className={labelClasses}>
            {content}
        </label>
    );
};

export default Label;
