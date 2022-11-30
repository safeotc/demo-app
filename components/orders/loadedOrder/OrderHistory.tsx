interface OrderHistoryProps {
    history: string[];
}

const OrderHistory = ({ history }: OrderHistoryProps) => {
    return (
        <div>
            {history.map((h, i) => (
                <div key={i}>{h}</div>
            ))}
        </div>
    );
};

export default OrderHistory;
