new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result() {
            if (this.value < 37) {
                return 'not there yet';
            } else {
                return 'done';
            }
        }
    },
    watch: {
        result() {
            setTimeout(() => this.value = 0, 5000);
        }
    }
});