<template>
    <div>
        <h1>Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from "./FruitMixin";

export default {
    mixins: [fruitMixin],
    created() {
        console.log("inside list created");
    }
};
</script>

<style>
</style>
