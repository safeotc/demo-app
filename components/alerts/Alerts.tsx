import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Alert, { AlertProps } from './Alert';

interface AlertsProps {
    items: AlertProps[];
}

const Alerts: React.FC<AlertsProps> = ({ items }) => {
    return (
        <TransitionGroup className="c-alerts" component="ul">
            {items.map((alertProps) => (
                <CSSTransition
                    key={alertProps.id}
                    classNames={{
                        enter: 'c-alerts__item--enter',
                        enterActive: 'c-alert__item--enter-active',
                        exit: 'c-alert__item--exit',
                        exitActive: 'c-alert__item--exit-active',
                    }}
                    timeout={{ enter: 100, exit: 0 }}
                >
                    <li className="c-alerts__item">
                        <Alert {...alertProps} />
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Alerts;
