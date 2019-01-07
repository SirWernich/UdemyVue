<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="!selectedServer">
            <p>Server Details are currently not updated</p>
        </template>
        <template v-else>
            <p>{{ selectedServer.index }} -> {{ selectedServer.status }}</p>
            <button @click="clearServerDetails">clear details</button>
        </template>
    </div>

</template>

<script>
export default {
    props: ['selectedServer'],
    methods: {
        clearServerDetails() {
            this.$emit("clearSelectedServer");
        }
    }
}
</script>

<style>

</style>
