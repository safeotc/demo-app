import cn from 'classnames';
import { TextAlign } from '../../common/types/text';

export interface ThProps {
    textAlign?: TextAlign;
    useMinPossibleWidth?: boolean;
    content: JSX.Element | string;
}

const Th = ({ textAlign, useMinPossibleWidth, content }: ThProps) => {
    const thClasses = cn({
        'u-text-left': textAlign === 'left',
        'u-text-center': textAlign === 'center',
        'u-text-right': textAlign === 'right',
        'u-width-min-possible': !!useMinPossibleWidth,
    });

    return <th className={thClasses}>{content}</th>;
};

export default Th;
