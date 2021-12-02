import React from 'react';
import { ALERTS_ELEMENT_ID, MODALS_ELEMENT_ID } from '../../common/constants/dom';

const Portals: React.FC = () => {
    return (
        <>
            <div id={MODALS_ELEMENT_ID} />
            <div id={ALERTS_ELEMENT_ID} />
        </>
    );
};

export default Portals;
