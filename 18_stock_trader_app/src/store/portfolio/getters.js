export const getters = {
    stockPortfolio(state, getters, rootState) {
        return state.stocks.map(stock => {
            const record = rootState.stocks.stocks.find(s => s.id === stock.id);

            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
};