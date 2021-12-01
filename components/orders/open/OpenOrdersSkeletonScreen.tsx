import React from 'react';
import SkeletonShimmer from '../../loading/SkeletonShimmer';
import Table from '../../table/Table';

const OpenOrdersSkeletonScreen: React.FC = () => {
    return (
        <Table
            size="small"
            singleLineItems={true}
            headerProps={[
                { textAlign: 'center', useMinPossibleWidth: true, content: 'Type' },
                { textAlign: 'left', content: 'Asset' },
                { textAlign: 'right', content: 'Price' },
                { textAlign: 'right', content: 'Quantity' },
                { textAlign: 'right', content: 'Total' },
                { textAlign: 'right', content: 'Security deposit' },
            ]}
            data={Array.from(Array(10).keys())}
            rowMapper={(orderKey) => ({
                key: orderKey,
                rowProps: [
                    {
                        textAlign: 'center',
                        content: <SkeletonShimmer shape="circle" style={{ width: '2.75em', height: '2.75em' }} />,
                    },
                    {
                        textAlign: 'left',
                        content: <SkeletonShimmer style={{ width: '10em', height: '1.5em' }} />,
                    },
                    {
                        textAlign: 'right',
                        content: <SkeletonShimmer style={{ width: '4em', height: '1.5em' }} />,
                    },
                    {
                        textAlign: 'right',
                        content: <SkeletonShimmer style={{ width: '5em', height: '1.5em' }} />,
                    },
                    {
                        textAlign: 'right',
                        content: <SkeletonShimmer style={{ width: '8em', height: '1.5em' }} />,
                    },
                    {
                        textAlign: 'right',
                        content: <SkeletonShimmer style={{ width: '7em', height: '1.5em' }} />,
                    },
                ],
            })}
        />
    );
};

export default OpenOrdersSkeletonScreen;
