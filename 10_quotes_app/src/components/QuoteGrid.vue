<template>
    <div>
        <app-quote
            v-for="(quote,idx) in quotes" 
            :key="idx"
            @click.native="deleteQuote(idx)">
                {{ quote }}
        </app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    components: {
        appQuote: Quote
    },
    props: ['quotes'],
    methods: {
        deleteQuote(idx) {
            this.$emit('quoteDeleted', idx);
        }
    }
}
</script>

<style scoped>

</style>
