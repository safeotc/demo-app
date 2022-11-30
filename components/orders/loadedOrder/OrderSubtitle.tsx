interface OrderSubtitleProps {
    text: string;
}

const OrderSubtitle = ({ text }: OrderSubtitleProps) => {
    return (
        <h3 className="o-order__subtitle">
            <span className="u-text-brand-gradient">{text}</span>
        </h3>
    );
};

export default OrderSubtitle;
