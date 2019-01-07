<template>
    <div>
        <h3>Some User Details</h3>
        <p>User Loaded: {{ $route.params.id }}</p>
        <hr>
        <router-link tag="button" :to="link" class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: "userEdit",
                params: { id: this.$route.params.id },
                query: { locale: "en", q: 123 },
                hash: '#data'
            }
        };
    },
    beforeRouteEnter(to, from, next) {
        console.log("inside component setup");

        // component is not fully initialised yet, so you don't have access to
        // all the properties. give 'next()' a callback that will give you access
        // to the properties.
        next(vm => {
            console.log('inside the "next" callback', vm);
            vm.link
        });
    }
};
</script>
