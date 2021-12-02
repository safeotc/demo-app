import React from 'react';
import SkeletonScreenLoader from '../../../components/loading/SkeletonScreenLoader';
import OpenOrdersSkeletonScreen from '../../../components/orders/open/OpenOrdersSkeletonScreen';
import useOpenOrdersList from './useOpenOrdersList';
import OpenOrdersTable from '../../../components/orders/open/OpenOrdersTable';
import Modal from '../../../components/modal/Modal';

const OpenOrdersList: React.FC = () => {
    const { isLoading, orders } = useOpenOrdersList();

    return (
        <>
            <div className="o-box">
                <div className="u-overflow-x-auto">
                    <SkeletonScreenLoader show={isLoading} skeleton={<OpenOrdersSkeletonScreen />}>
                        <OpenOrdersTable orders={orders} />
                    </SkeletonScreenLoader>
                </div>
            </div>

            <Modal />
        </>
    );
};

export default OpenOrdersList;
