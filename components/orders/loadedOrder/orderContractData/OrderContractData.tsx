import Order from '../../../../models/Order';
import useOrderContractData from './useOrderContractData';

interface OrderContractDataProps {
    order: Order;
}

const OrderContractData = ({ order }: OrderContractDataProps) => {
    const { buyer, seller, buyerDeposited, sellerDeposited, totalDeposited } = useOrderContractData(order);

    return (
        <>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Buyer</span>
                <p className="c-order-contract-data__value">
                    {!!buyer ? (
                        <a href="#" className="c-link" onClick={(e) => e.preventDefault()}>
                            {buyer}
                        </a>
                    ) : (
                        'No buyer yet.'
                    )}
                </p>
            </div>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">Seller</span>
                <p className="c-order-contract-data__value">
                    {!!seller ? (
                        <a href="#" className="c-link" onClick={(e) => e.preventDefault()}>
                            {seller}
                        </a>
                    ) : (
                        'No seller yet.'
                    )}
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
