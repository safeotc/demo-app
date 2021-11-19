import React from 'react';

interface SkeletonScreenProps {
    skeleton: JSX.Element;
    show: boolean;
}

const SkeletonScreen: React.FC<SkeletonScreenProps> = ({ skeleton, show, children }) => {
    return <>{show ? skeleton : children}</>;
};

export default SkeletonScreen;
