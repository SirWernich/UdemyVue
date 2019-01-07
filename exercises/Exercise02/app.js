new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            onKeyDown(e) {
                this.value = e.target.value;
            },
            showAlert() {
                window.alert("alert!");
            }
        }
    });