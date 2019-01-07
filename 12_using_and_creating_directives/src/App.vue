<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'some text'"></p>
                <p v-html="'<strong>this is bold text</strong>'"></p>
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background="'red'">Colour this</p>
                <p v-highlight:background.delayed="'red'">Colour this with a modifier</p>
                <p
                    v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
                >Colour this with a modifier, but locally</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        localHighlight: {
            bind(el, binding) {
                let delay = 0;

                console.log(binding);

                if (binding.modifiers.delayed) {
                    delay = 5000;
                }

                if (binding.modifiers.blink) {
                    const blinkDelay = binding.value.delay; 
                    const mainColor = binding.value.mainColor;
                    const secondColor = binding.value.secondColor;
                    let currentColor = mainColor;

                    setTimeout(() => {
                        setInterval(() => {
                            currentColor =
                                currentColor === secondColor
                                    ? mainColor
                                    : secondColor;

                            if (binding.arg === "background") {
                                el.style.backgroundColor = currentColor;
                            } else {
                                el.style.color = currentColor;
                            }
                        }, blinkDelay);
                    }, 3000);
                } else {
                    setTimeout(() => {
                        if (binding.arg === "background") {
                            el.style.backgroundColor = binding.value.mainColor;
                        } else {
                            el.style.color = binding.value.mainColor;
                        }
                    }, delay);
                }

                console.log(binding);
            }
        }
    }
};
</script>

<style>
</style>
