import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    doubleCounter(state) {
        return state.counter * 2;
    },
    clickCounter(state) {
        return state.counter + ' clicks';
    }
};

const mutations = {
    increment(state, payload) {
        state.counter += payload;
    },
    decrement(state, payload) {
        state.counter -= payload;
    }
};

const actions = {
    increment({ commit }, payload) {
        commit('increment', payload);
    },
    decrement(context, payload) {
        context.commit('decrement', payload);
    },
    asyncIncrement({ commit }, payload) {
        setTimeout(() => commit('increment', payload.by), payload.delay);
    },
    asyncDecrement({ commit }, payload) {
        setTimeout(() => commit('decrement', payload.by), payload.delay);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};