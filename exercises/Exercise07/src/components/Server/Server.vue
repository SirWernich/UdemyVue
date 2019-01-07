<template>
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="onServerSelect(id)">
        Server #{{ id }}
    </li>
</template>

<script>
export default {
    props: ['id'],
    methods: {
        onServerSelect(id) {
            this.$emit('onServerSelect', id);
        }
    }
}
</script>
