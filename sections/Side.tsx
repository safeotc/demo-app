import React from 'react';
import Logo from '../components/side/Logo';
import Nav from '../components/side/Nav';

const Side: React.FC = () => {
    return (
        <div className="o-side o-box">
            <Logo />
            <Nav />
        </div>
    );
};

export default Side;
