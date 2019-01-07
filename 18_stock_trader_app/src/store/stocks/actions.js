import stocks from '../../data/stocks';

export const actions = {
    buyStock({ dispatch, commit, getters, rootGetters }, order) {
        this.dispatch('portfolio/buyStock', order);//, {root: true});
        //commit('buyStock', order);
    },
    initStocks({ commit }) {
        commit("setStocks", stocks);
    },
    randomiseStocks({ commit }) {
        commit('randomStocks')
    }
};