<template>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container-xl px-4">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                                <!-- Social login form-->
                                <div class="card my-5">
                                    <div class="card-body p-5 text-center">
                                        <div class="h3 fw-light mb-3">Sign In</div>
                                        <!-- Social login links-->
                                        <!-- ? FACEBOOK SIGNIN BUTTON -->
                                        <FacebookSigninButton/>

                                        <!-- ? GOOGLE SIGNIN BUTTON -->
                                        <GoogleSigninButton/>
                            
                                    </div>
                                    <hr class="my-0" />
                                    <div class="card-body p-5">

                                        <!-- Login form-->
                                        <form @submit.prevent="handleLogin">

                                            <!-- EMAIL-->
                                            <div class="mb-3">
                                                <label class="text-gray-600 small" for="emailExample">Email address</label>
                                                <input class="form-control form-control-solid" type="text" placeholder="" aria-label="Email Address" aria-describedby="emailExample"
                                                    v-model="credential.email"
                                                />
                                            </div>

                                            <!-- PASSWORD -->
                                            <div class="mb-3">
                                                <label class="text-gray-600 small" for="passwordExample">Password</label>
                                                <input class="form-control form-control-solid" type="password" placeholder="" aria-label="Password" aria-describedby="passwordExample"
                                                    v-model="credential.password"
                                                />
                                            </div>

                                            <!-- BUTTON -->
                                            <div class="d-flex align-items-center justify-content-between mb-0">
                                                <button class="btn btn-danger" type="submit">Login</button>
                                            </div>

                                        </form>
                                    </div>
                                    <hr class="my-0" />
                                    <div class="card-body px-5 py-4">
                                        <div class="small text-center">
                                            New user?
                                            <router-link to="/session/register" style="color:red">Create an account!</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
            <!-- FOOTER -->
            <FooterBar/>

        </div>
</template>

<script>
    import { mapActions, mapState } from 'pinia';
    import { useSessionStore } from '../stores/sessionStore';

    // COMPONENTS
    import FooterBar from '../components/FooterBar.vue';
    import FacebookSigninButton from '../components/FacebookSigninButton.vue';
    import GoogleSigninButton from '../components/GoogleSigninButton.vue';
    
    
    export default {
        data() {
            return {
                credential: {
                    email : '',
                    password : ''
                }
            }
        },
        components: { FooterBar, FacebookSigninButton, GoogleSigninButton },
        computed: {
            ...mapState(useSessionStore, ['isLogin']),
        },
        methods: {

            // LOGIN
            ...mapActions(useSessionStore, [ 'login' ]),

            handleLogin(){
                this.login(this.credential)
            }
        },
    };
</script>