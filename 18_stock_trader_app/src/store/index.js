import Vue from 'vue';
import Vuex from 'vuex';

import { stocksStore } from './stocks/store';
import { portfolioStore } from './portfolio/store';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        stocks: stocksStore,
        portfolio: portfolioStore
    }
});