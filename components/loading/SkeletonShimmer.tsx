import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

type SkeletonShimmerShape = 'rectangular' | 'circle';

interface SkeletonShimmerProps extends HTMLAttributes<HTMLDivElement> {
    shape?: SkeletonShimmerShape;
}

const SkeletonShimmer: React.FC<SkeletonShimmerProps> = ({ children, shape, ...props }) => {
    const propsClasses = props?.className || '';
    const shimmerClasses = cn(propsClasses, 'c-skeleton-shimmer', { 'c-skeleton-shimmer--circle': shape === 'circle' });

    return <div {...props} className={shimmerClasses} />;
};

export default SkeletonShimmer;
