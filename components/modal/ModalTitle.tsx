import React from 'react';

interface ModalTitleProps {
    children: React.ReactNode;
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const ModalTitle = ({ children, component }: ModalTitleProps) => {
    let childrenWrapped: React.ReactElement<HTMLElement>;

    switch (component) {
        case 'h1':
            childrenWrapped = <h1>{children}</h1>;
            break;
        case 'h2':
            childrenWrapped = <h2>{children}</h2>;
            break;
        case 'h3':
            childrenWrapped = <h3>{children}</h3>;
            break;
        case 'h4':
            childrenWrapped = <h4>{children}</h4>;
            break;
        case 'h5':
            childrenWrapped = <h5>{children}</h5>;
            break;
        case 'h6':
            childrenWrapped = <h6>{children}</h6>;
            break;
        default:
            childrenWrapped = <h4>{children}</h4>;
    }

    return <div className="c-modal-container__title">{childrenWrapped}</div>;
};

export default ModalTitle;
