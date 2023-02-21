const OrderInfo = () => {
    return (
        <div className="c-order-section">
            <div className="c-order-section__row">
                <span className="c-order-section__label">Status</span>
                <span className="c-order-section__value"></span>
            </div>

            <div className="c-order-section__row">
                <span className="c-order-section__label">Maker</span>
                <span className="c-order-section__value"></span>
            </div>

            <div className="c-order-section__row">
                <span className="c-order-section__label">Asset</span>
                <span className="c-order-section__value"></span>
            </div>

            <div className="c-order-section__row">
                <span className="c-order-section__label">Quantity</span>
                <span className="c-order-section__value"></span>
            </div>

            <div className="c-order-section__row">
                <span className="c-order-section__label">Price</span>
                <span className="c-order-section__value"></span>
            </div>

            <div className="c-order-section__row">
                <span className="c-order-section__label">Total (buyer deposit)</span>
                <span className="c-order-section__value"></span>
            </div>

            <div className="c-order-section__row">
                <span className="c-order-section__label">Security deposit (seller deposit)</span>
                <span className="c-order-section__value"></span>
            </div>
        </div>
    );
};

export default OrderInfo;
