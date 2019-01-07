<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpper | to-lower | toUpper }}</p>
                <p>{{ 'THIS IS NOT LOWERCASE' | to-lower }}</p>
                <hr>
                <button @click="fruits.push('berries')">add new</button>
                <input v-model='filterText'>
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
                <hr>
                <List />
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue';
import {fruitMixin} from './FruitMixin';

    export default {
        mixins: [fruitMixin],
        components: {
            List
        },
        data() {
            return {
                text: 'hello there',
            }
        },
        filters: {
            toUpper(value) {
                return value.toUpperCase();
            }
        }
    }
</script>

<style>

</style>
