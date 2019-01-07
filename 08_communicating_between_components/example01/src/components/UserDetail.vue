<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>user name: {{ switchName() }}</p>
        <p>user age: {{ userAge }}</p>
        <button @click="resetName">reset the name</button>
        <button @click="resetFn">reset the name (callback)</button>
    </div>
</template>

<script>
    import {eventBus } from '../main';

    export default {
//        props: ['myName'],
        props: {
            //myName: [String, Array]   <-- validation
            myName: {
                type: String,
                required: true
                //default: "no name given"  <-- a default value (use without required)
                
                /* if default is an object:

                type: Object,
                default: function() {
                    return {
                        name: 'bob',
                        age: 23
                    }
                }*/
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                this.myName = "wernich";
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', data => this.userAge = data);
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
