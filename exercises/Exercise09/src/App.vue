<template>
    <div class="container">
        <div v-if="!isSubmitted">
            <form>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <h2>User data required:</h2>
                        <!-- Exercise 1 -->
                        <!-- Create a Signup Form where you retrieve the following Information -->
                        <!-- Full Name (First Name + Last Name) -->
                        <!-- Mail -->
                        <!-- Password -->
                        <!-- Store Data? Yes/No -->
                        <!-- Exercise 2 -->
                        <!-- Only display the Form if it has NOT been submitted -->
                        <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                        <!-- Exercise 3 -->
                        <!-- Edit the Example from above and create a custom "Full Name" Control -->
                        <!-- which still holds the First Name and Last Name Input Field -->
                    </div>
                </div>
                <hr>

                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <app-full-name v-model="fullname"/>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="form-group">
                            <label>First Name:</label>
                            <input class="form-control" type="text" v-model="firstname">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="form-group">
                            <label>Last Name:</label>
                            <input class="form-control" type="text" v-model="lastname">
                        </div>
                    </div>
                </div>-->
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="form-group">
                            <label>Email:</label>
                            <input class="form-control" type="email" v-model="email">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="form-group">
                            <label>Password:</label>
                            <input class="form-control" type="password" v-model="password">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <label class="form-check-label" for="saveData">Store data?</label>
                        <div class="form-group">
                            <div class="form-input">
                                <input
                                    type="radio"
                                    class="form-check-input"
                                    value="Yes"
                                    v-model="storeData"
                                > Yes
                            </div>
                            <div class="form-input">
                                <input
                                    type="radio"
                                    class="form-check-input"
                                    value="No"
                                    v-model="storeData"
                                > No
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <button type="submit" @click.prevent="formSubmitted">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div v-else>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Data</h4>
                        </div>
                        <div class="panel-body">
                            <p>Full Name: {{ fullname }}</p>
                            <p>Mail: {{ email }}</p>
                            <p>Password: {{ password }}</p>
                            <p>Store in Database?: {{ storeData }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from "./FullName.vue";

export default {
    components: {
        appFullName: FullName
    },
    data() {
        return {
            fullname: "",//bob jones",
            email: "",
            password: "",
            storeData: "No",
            isSubmitted: false
        };
    },
    methods: {
        formSubmitted() {
            this.isSubmitted = true;
        }
    }
};
</script>

<style>
</style>
