<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server
                v-for="server in servers" 
                :id="server.index" 
                :key="server.index" 
                @onServerSelect="onServerSelect"></server>
        </ul>
    </div>
</template>

<script>
import Server from './server.vue';

export default {
    components: {
        server: Server
    },
    data: function() {
        return {
            servers: [
                {index: 1, status: 'status of server 1'},
                {index: 2, status: 'status of server 2'},
                {index: 3, status: 'status of server 3'},
                {index: 4, status: 'status of server 4'},
                {index: 5, status: 'status of server 5'}
            ],
            selectedServer: null
        };
    },
    methods:{
        onServerSelect(idx) {
            this.$emit('serverSelectionChanged', this.servers.find(s => s.index === idx));
        }
    } 
};
</script>

<style>

</style>
