import React from 'react';
import Logo from '../../components/side/Logo';
import Nav from '../../components/side/nav/Nav';

const Side: React.FC = () => {
    return (
        <div className="o-side">
            <Logo />
            <Nav />
        </div>
    );
};

export default Side;
