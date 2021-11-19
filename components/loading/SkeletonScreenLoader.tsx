import React from 'react';

interface SkeletonScreenLoaderProps {
    skeleton: JSX.Element;
    show: boolean;
}

const SkeletonScreenLoader: React.FC<SkeletonScreenLoaderProps> = ({ skeleton, show, children }) => {
    return <>{show ? skeleton : children}</>;
};

export default SkeletonScreenLoader;
