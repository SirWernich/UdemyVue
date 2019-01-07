<template>
    <div>
        <div class="form-group">
            <label>First Name:</label>
            <input
                class="form-control"
                type="text"
                :value="firstName"
                @input="inputChanged(true, $event.target.value)">
        </div>
        <div class="form-group">
            <label>Last Name:</label>
            <input
                class="form-control"
                type="text"
                :value="lastName"
                @input="inputChanged(false, $event.target.value)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        inputChanged(isFirstName, val) {
            const first = isFirstName 
                ? val
                : this.firstName;

            const last = !isFirstName
                ? val
                : this.lastName;

            this.$emit('input', `${first || ''} ${last || ''}`);
        }
    },
    computed: {
        firstName() {
            return this.value.split(' ')[0];
        },
        lastName() {
            return this.value.split(' ')[1];
        }
    }
};
</script>

<style>
</style>
