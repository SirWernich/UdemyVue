<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ clickCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: {
            ...mapGetters('counter', [
                'clickCounter',
                'doubleCounter'
            ])
        }
    }
</script>