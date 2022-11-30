interface OrderSubtitleProps {
    text: string;
}

const OrderSubtitle = ({ text }: OrderSubtitleProps) => {
    return (
        <div className="o-order__subtitle">
            <h3 className="u-text-brand-gradient">{text}</h3>
        </div>
    );
};

export default OrderSubtitle;
