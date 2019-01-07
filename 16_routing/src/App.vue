<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <router-view name="header-top"/>
                <transition name="slide" mode="out-in">
                    <router-view/>
                </transition>
                <router-view name="header-bottom"/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    components: {
        appHeader: Header
    }
};
</script>

<style>

.slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
}
.slide-leave {
    opacity: 1;
    transform: translateY(0);
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}
@keyframes slide-in {
    from {
        /* transform: translateY(30px); */
        transform: scale(.5)
    }
    to {
        /* transform: translateY(0); */
        transform: scale(1)
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(30px);
    }
}
</style>
