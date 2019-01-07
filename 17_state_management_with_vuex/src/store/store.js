import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

const valueStore = {
    namespaced: true,
    state: {
        value: 0
    },
    getters,
    mutations,
    actions
};

export const store = new Vuex.Store({
    modules: {
        counter,
        valueStore
    }
});