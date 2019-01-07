<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br>
                <br>
                <button class="btn btn-primary" @click="fetchData">Get data</button>
                <br>
                <br>
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="usr in users"
                        :key="usr.email"
                    >{{ usr.username }} - {{ usr.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: "",
                email: ""
            },
            users: [],
            resource: {},
            node: "userdata"
        };
    },
    methods: {
        submit() {
            // this.$http
            //     .post('userdata.json', this.user)
            //     .then(data => console.log(data), error => console.log(error));

            //this.resource.save({}, this.user);

            this.resource.saveAlt(this.user);
        },
        fetchData() {
            // this.$http
            //     .get('userdata.json')
            //     .then(response => response.json())
            //     .then(data => {
            //         this.users = Object.keys(data).map(key =>
            //             Object.assign({ id: key }, data[key])
            //         );
            //     });

            this.resource
                .getData({ node: this.node })
                .then(response => response.json())
                .then(data => {
                    this.users = Object.keys(data).map(key =>
                        Object.assign({ id: key }, data[key])
                    );
                });
        }
    },
    created() {
        const customActions = {
            saveAlt: { method: "POST", url: "alternative.json" },
            getData: { method: "GET" }
        };

        this.resource = this.$resource("{node}.json", {}, customActions);
    }
};
</script>

<style>
</style>
