<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ detail }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return { 
                detail: 'Server Details are currently not updated'
            };
        }
    };
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
