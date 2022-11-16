import cn from 'classnames';
import FlatIcon from '../icons/FlatIcon';

export type StepStatus = 'completed' | 'locked' | 'waiting';

interface StepProps {
    status: StepStatus;
    title: string;
    description: string;
    number: number;
}

const Step = ({ status, title, description, number }: StepProps) => {
    const isCompleted = status === 'completed';
    const isLocked = status === 'locked';
    const isWaiting = status === 'waiting';

    const stepClasses = cn('c-step', {
        'c-step--completed': isCompleted,
        'c-step--waiting': isWaiting,
        'c-step--locked': isLocked,
    });

    const stepIconClasses = cn('c-step__icon', {
        'c-step--completed': isCompleted,
        'c-step--waiting': isWaiting,
        'c-step--locked': isLocked,
    });

    return (
        <li className={stepClasses}>
            <div className={stepIconClasses}>{isCompleted ? <FlatIcon icon="check" /> : <span>{number}</span>}</div>
            <h6 className="c-step__title">{title}</h6>
            <p className="c-step__description">{description}</p>
        </li>
    );
};

export default Step;
