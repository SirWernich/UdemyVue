<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './stock.vue';

export default {
    components: {
        appStock: Stock
    },
    computed: {
        ...mapGetters('stocks', ['stocks'])
    }
}
</script>
