<template>
    <div class="container">
        <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length" />
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>  
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: click on a quote to delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewQuote from './components/NewQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import Header from './components/Header.vue';

    export default {
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        data() {
            return {
                maxQuotes: 10,
                quotes: [
                    'a quote example'
                ]
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes){
                    alert('too many quotes! you need to delete one first.');
                    return;
                }

                this.quotes.push(quote);
            },
            deleteQuote(idx) {
                this.quotes.splice(idx,1);
            }
        }
    }
</script>

<style>
</style>
