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
                <p className="c-order-contract-data__value">
                    <AddressLink address={order.buyer} noAddressText="No buyer yet." />
                </p>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Seller</span>
                <p className="c-order-contract-data__value">
                    <AddressLink address={order.seller} noAddressText="No seller yet." />
                </p>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Deposited buy amount</span>
                <p className="c-order-contract-data__value">{buyerDeposited}</p>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Deposited sell amount</span>
                <p className="c-order-contract-data__value">{sellerDeposited}</p>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Total deposited amount</span>
                <p className="c-order-contract-data__value">{totalDeposited}</p>
            </div>
        </>
    );
};

export default OrderContractData;
