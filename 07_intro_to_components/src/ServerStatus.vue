<template>
    <div>
        <p>server status: {{ status }}
        <hr>
        <button @click="changeStatus">change status</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                status: 'critical'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'normal'
            }
        }
    }
</script>