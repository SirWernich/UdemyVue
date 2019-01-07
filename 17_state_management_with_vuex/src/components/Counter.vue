<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 100, delay: 1000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, delay: 1000})">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';
    
    export default {
        methods: {
            ...mapMutations('counter', [
                'increment',
                'decrement'
            ]),
            // don't ever mix sync and async mutations for the same data!
            ...mapActions('counter', [
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>