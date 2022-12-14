import cn from 'classnames';
import { TextAlign } from '../../common/types/text';

export interface TdProps {
    textAlign?: TextAlign;
    boldText?: boolean;
    content: JSX.Element | string | number;
}

const Td = ({ textAlign, boldText, content }: TdProps) => {
    const tdClasses = cn({
        'u-text-left': textAlign === 'left',
        'u-text-center': textAlign === 'center',
        'u-text-right': textAlign === 'right',
        'u-text-bold': !!boldText,
    });

    return <td className={tdClasses}>{content}</td>;
};

export default Td;
