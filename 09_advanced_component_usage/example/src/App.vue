<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <!--
                    <appQuote>
                        <h2 slot="title">{{ quoteTitle }}</h2>
                        <p slot="content">a wonderful quote</p>
                    </appQuote>
                    -->
                    <component :is="selectedComponent">
                        <p>default content</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        components: {
            appQuote: Quote, 
            appAuthor: Author, 
            appNew: New
        },
        data: function() {
            return {
                quoteTitle: "The Quote",
                selectedComponent: 'appQuote'
            }
        }
    }
</script>

<style scoped>

</style>
