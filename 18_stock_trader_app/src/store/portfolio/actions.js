export const actions = {
    sellStock({ commit }, order) {
        commit('sellStock', order);
    }, 
    buyStock({commit}, order){
        commit('buyStock', order);
    }
}