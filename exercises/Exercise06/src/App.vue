<template>
    <div class="container">
        <app-header />
        <hr>
        <div class="row">
            <app-servers />
            <app-server-details/>
        </div>
        <hr>
        <app-footer />
    </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
    components: {
        appFooter: Footer,
        'app-header': Header,
        'app-servers': Servers,
        'app-server-details': ServerDetails
    }
}

</script>

<style>

</style>
