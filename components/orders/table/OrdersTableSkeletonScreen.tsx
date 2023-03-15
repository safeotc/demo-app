import SkeletonShimmer from '../../loading/SkeletonShimmer';
import Table from '../../table/Table';
import { TdProps } from '../../table/Td';
import { ThProps } from '../../table/Th';

interface OrdersTableSkeletonScreenProps {
    withActions: boolean;
}

const OrdersTableSkeletonScreen = ({ withActions }: OrdersTableSkeletonScreenProps) => {
    const actionHeaderPropsArray: ThProps[] = withActions
        ? [{ textAlign: 'center', useMinPossibleWidth: true, content: 'Action' }]
        : [];
    const headerProps: ThProps[] = [
        { textAlign: 'center', useMinPossibleWidth: true, content: 'Type' },
        { textAlign: 'center', useMinPossibleWidth: true, content: 'Details' },
        ...actionHeaderPropsArray,
        { textAlign: 'left', content: 'Asset' },
        { textAlign: 'right', content: 'Price' },
        { textAlign: 'right', content: 'Quantity' },
        { textAlign: 'right', content: 'Total' },
        { textAlign: 'right', content: 'Security deposit' },
    ];

    const actionRowPropsArray: TdProps[] = withActions
        ? [
              {
                  textAlign: 'center',
                  content: <SkeletonShimmer shape="rectangular" style={{ width: '4em', height: '1.5em' }} />,
              },
          ]
        : [];
    const rowProps: TdProps[] = [
        {
            textAlign: 'center',
            content: <SkeletonShimmer shape="circle" style={{ width: '2.75em', height: '2.75em' }} />,
        },
        {
            textAlign: 'center',
            content: <SkeletonShimmer shape="rectangular" style={{ width: '5em', height: '1.5em' }} />,
        },
        ...actionRowPropsArray,
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
    ];

    return (
        <Table
            size="small"
            singleLineItems={true}
            headerProps={headerProps}
            data={Array.from(Array(10).keys())}
            rowMapper={(orderKey) => ({
                key: orderKey,
                rowProps: rowProps,
            })}
        />
    );
};

export default OrdersTableSkeletonScreen;
