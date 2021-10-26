import React from 'react';

interface FlatIconProps {
    icon: string;
    title: string;
}

const FlatIcon: React.FC<FlatIconProps> = ({ icon, title }) => {
    return <i className={`fi fi-br-${icon}`} title={title} />;
};

export default FlatIcon;
