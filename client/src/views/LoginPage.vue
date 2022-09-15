<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data() {
        return {
            register: {
                email: '',
                username: '',
                password: '',
            },
            login: {
                username: '',
                password: '',
            }

        }
    },
    methods: {
        ...mapActions(useCounterStore, ['loginUser']),
        loginButton() {
            this.loginUser(this.login.username, this.login.password)
        },
        ...mapActions(useCounterStore, ['registerUser']),
        registerButton() {
            this.registerUser(this.register.username, this.register.password, this.register.email)
        },
    }
}
</script>

<template>
    <div>
        <!-- LOGIN REGISTER FORM -->
        <div class="d-flex align-self-center py-2">
            <!-- Login -->
            <div class="container d-flex justify-content-end">
                <div class="col-6 d-flex justify-content-start py-5">
                    <form @submit.prevent="loginButton" class="col-9">
                        <h1>Login</h1>
                        <div class="mb-3">
                            <label for="login-username" class="form-label">Username</label>
                            <input v-model="login.username" type="text" class="form-control" id="login-username"
                                aria-describedby="usernameHelp" placeholder="Username" />
                        </div>
                        <div class="mb-3">
                            <label for="login-password" class="form-label">Password</label>
                            <input v-model="login.password" type="password" class="form-control" id="login-password"
                                placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-light">Submit</button>
                    </form>
                </div>
            </div>
            <!-- End Login -->
            <!-- Register -->
            <div class="container border-start border-dark">
                <div class="col-6 d-flex justify-content-start py-5 mx-3">
                    <form @submit.prevent="registerButton" class="col-12">
                        <h1>Register</h1>
                        <div class="mb-3">
                            <label for="register-email" class="form-label">Email</label>
                            <input v-model="register.email" type="email" class="form-control" id="register-email"
                                placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <label for="register-username" class="form-label">Username</label>
                            <input v-model="register.username" type="text" class="form-control" id="register-username"
                                placeholder="Username" />
                        </div>
                        <div class="mb-3">
                            <label for="register-password" class="form-label">Password</label>
                            <input v-model="register.password" type="password" class="form-control"
                                id="register-password" placeholder="Password" />
                        </div>
                        <div>
                            <button type="submit" class="btn btn-light">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- End Register -->
        </div>
        <!-- END LOGIN REGISTER PAGE -->
    </div>
</template>