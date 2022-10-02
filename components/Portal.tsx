import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    elementId: string;
    children: React.ReactNode;
}

const Portal = ({ elementId, children }: PortalProps) => {
    const portalContainer = !!document && !!document.body ? document.body.querySelector(`#${elementId}`) : null;
    return !!portalContainer ? ReactDOM.createPortal(children, portalContainer) : null;
};

export default Portal;
