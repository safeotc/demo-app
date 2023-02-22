import { OrderStatus, OrderType } from '../../../models/Order';

interface OrderContractDataProps {
    status: OrderStatus;
    type: OrderType;
    buyer: string;
    seller: string;
    price: number;
    quantity: number;
}

const OrderContractData = ({ status, type, buyer, seller, price, quantity }: OrderContractDataProps) => {
    return (
        <>
            <div className="c-order-contract-data">
                <span className="c-order-contract-data__label">TODO</span>
                <p className="c-order-contract-data__value">TODO</p>
            </div>
        </>
    );
};

export default OrderContractData;
