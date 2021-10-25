import React from 'react';

interface FlatIconProps {
    icon: string;
}

const FlatIcon: React.FC<FlatIconProps> = ({ icon }) => {
    return <i className={`fi fi-br-${icon}`} />;
};

export default FlatIcon;
