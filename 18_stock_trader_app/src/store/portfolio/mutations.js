export const mutations = {
    buyStock(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(s => s.id === stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity
            });
        }

        state.funds -= stockPrice * quantity;
    },
    sellStocks(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(s => s.id === stockId);
        
        if (!record) {
            return;
        }

        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else if (record.quantity === quantity) {
            state.stocks.splice(state.stocks.indexOf(record));
        } else {
            return;
        }

        state.funds += stockPrice * quantity;
    }
};