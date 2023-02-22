import Order from '../../../../models/Order';
import AddressLink from '../AddressLink';
import useOrderContractData from './useOrderContractData';

interface OrderContractDataProps {
    order: Order;
}

const OrderContractData = ({ order }: OrderContractDataProps) => {
    const { buyerDeposited, sellerDeposited, totalDeposited } = useOrderContractData(order);

    return (
        <>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Buyer</span>
                <div className="c-order-contract-data__value">
                    <AddressLink address={order.buyer} noAddressText="No buyer yet." />
                </div>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Seller</span>
                <div className="c-order-contract-data__value">
                    <AddressLink address={order.seller} noAddressText="No seller yet." />
                </div>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Deposited buy amount</span>
                <div className="c-order-contract-data__value">{buyerDeposited}</div>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Deposited sell amount</span>
                <div className="c-order-contract-data__value">{sellerDeposited}</div>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Total deposited amount</span>
                <div className="c-order-contract-data__value">{totalDeposited}</div>
            </div>
        </>
    );
};

export default OrderContractData;
