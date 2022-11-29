import Error404 from '../../errors/404';

interface OrderNotFoundProps {
    id: string;
}

const OrderNotFound = ({ id }: OrderNotFoundProps) => {
    return <Error404 text={`Order with id "${id}" does not exist.`} />;
};

export default OrderNotFound;
