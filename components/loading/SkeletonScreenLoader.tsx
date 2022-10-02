import React from 'react';

interface SkeletonScreenLoaderProps {
    skeleton: JSX.Element;
    show: boolean;
    children: React.ReactNode;
}

const SkeletonScreenLoader = ({ skeleton, show, children }: SkeletonScreenLoaderProps) => {
    return <>{show ? skeleton : children}</>;
};

export default SkeletonScreenLoader;
