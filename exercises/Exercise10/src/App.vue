<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myOn.click.mouseover="backgroundColourChange">Click or Hover to play with background colour!</button>
                <button v-myOn.click="borderColourChange">Click to play with border colour!</button>
                <hr>
                <div
                    class="clickShow"
                    :class="{setBackground: backgroundToggle, setBorder: borderToggle}"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        myOn: {
            bind(el, binding) {
                    console.log(binding);
                for (const modifier in binding.modifiers){
                    console.log(modifier);
                    el.addEventListener(modifier, binding.value);
                }
            }
        }
    },
    methods: {
        backgroundColourChange() {
            this.backgroundToggle = !this.backgroundToggle;
        },
        borderColourChange() {
            this.borderToggle = !this.borderToggle;
        }
    },
    data() {
        return {
            backgroundToggle: false,
            borderToggle: false
        };
    }
};
</script>

<style scoped>
.clickShow {
    height: 200px;
    width: 200px;
    border: 1px solid black;
}

.setBackground {
    background-color: blueviolet;
}

.setBorder {
    border-color: red;
}
</style>
