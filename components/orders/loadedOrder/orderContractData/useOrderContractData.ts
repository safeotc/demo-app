import { getDepositValues } from '../../../../common/helpers/orders';
import Order from '../../../../models/Order';

const useOrderContractData = (order: Order) => {
    const depositValues = getDepositValues(order.price, order.quantity);

    const buyerDepositedAmount = order.type === 'buy' || order.status !== 'open' ? depositValues.buy : 0;
    const sellerDepositedAmount = order.type === 'sell' || order.status !== 'open' ? depositValues.sell : 0;
    const totalDepositedAmount = buyerDepositedAmount + sellerDepositedAmount;

    const buyerDeposited =
        buyerDepositedAmount > 0 ? `${buyerDepositedAmount} ${order.currency}` : 'Nothing deposited yet.';
    const sellerDeposited =
        sellerDepositedAmount > 0 ? `${sellerDepositedAmount} ${order.currency}` : 'Nothing deposited yet.';
    const totalDeposited =
        totalDepositedAmount > 0 ? `${totalDepositedAmount} ${order.currency}` : 'Nothing deposited yet.';

    return { buyerDeposited, sellerDeposited, totalDeposited };
};

export default useOrderContractData;
