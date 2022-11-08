import cn from 'classnames';

interface StepProps {
    isCompleted: boolean;
    title: string;
    description: string;
}

const Step = ({ isCompleted, title, description }: StepProps) => {
    const stepClasses = cn('c-step', { 'c-step--completed': isCompleted });

    return (
        <li className={stepClasses}>
            <h6 className="c-step__title">{title}</h6>
            <p className="c-step__description">{description}</p>
        </li>
    );
};

export default Step;
