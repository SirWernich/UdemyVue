<template>
    <div>
        <h3>new quote</h3>
        <button @click="counter++">increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        };
    },
    destroyed() {
        console.log('destoyed!');
    },
    deactivated(){
        console.log('deactivated');
    },
    activated(){
        console.log('activated');
    }
}
</script>

<style scoped>

</style>
