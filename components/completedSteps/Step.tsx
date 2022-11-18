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
    const isCompleted = status === 'completed' || true;
    const isLocked = status === 'locked';
    const isWaiting = status === 'waiting';

    const stepIconClasses = cn('c-step__icon', {
        'c-step__icon--completed': isCompleted,
        'c-step__icon--waiting': isWaiting,
        'c-step__icon--locked': isLocked,
    });

    const stepContentExpanderClasses = cn('c-step__content-expander', {
        'c-step__content-expander--completed': isCompleted,
        'c-step__content-expander--waiting': isWaiting,
        'c-step__content-expander--locked': isLocked,
    });

    const stepTitleClasses = cn('c-step__title', {
        'c-step__title--completed': isCompleted,
        'c-step__title--waiting': isWaiting,
        'c-step__title--locked': isLocked,
    });

    const stepDescriptionClasses = cn('c-step__description', {
        'c-step__description--completed': isCompleted,
        'c-step__description--waiting': isWaiting,
        'c-step__description--locked': isLocked,
    });

    return (
        <li className="c-step">
            <div className={stepIconClasses}>{isCompleted ? <FlatIcon icon="check" /> : <span>{number}</span>}</div>
            <div className="c-step__content">
                <div className={stepContentExpanderClasses}>
                    <h6 className={stepTitleClasses}>{title}</h6>
                    <p className={stepDescriptionClasses}>{description}</p>
                </div>
            </div>
        </li>
    );
};

export default Step;
