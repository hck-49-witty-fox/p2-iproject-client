<template>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container-xl px-4">
                        <div class="row justify-content-center">
                            <div class="col-xl-8 col-lg-9">
                                <!-- Social registration form-->
                                <div class="card my-5">
                                    <div class="card-body p-5 text-center">
                                        <div class="h3 fw-light mb-3">Create an Account</div>
                                        <div class="small text-muted mb-2">Sign in using...</div>

                                        <!--? FACEBOOK SIGNIN BUTTON -->
                                        <FacebookSigninButton/>

                                        <!--? GOOGLE SIGNIN BUTTON -->
                                        <GoogleSigninButton/>
                                        
                                    </div>
                                    <hr class="my-0" />
                                    <div class="card-body p-5">
                                        <div class="text-center small text-muted mb-4">...or enter your information below.</div>
                                        <!-- Login form-->
                                        <form @submit.prevent="register(credential)">
                                            <!-- NAME -->
                                            <div class="mb-3">
                                                <label class="text-gray-600 small" for="firstNameExample">Name</label>
                                                <input class="form-control form-control-solid" type="text" placeholder="" aria-label="First Name" aria-describedby="firstNameExample"
                                                    v-model="credential.name"
                                                />
                                            </div>

                                            <!-- EMAIL -->
                                            <div class="mb-3">
                                                <label class="text-gray-600 small" for="emailExample">Email address</label>
                                                <input class="form-control form-control-solid" type="email" aria-label="Email Address" aria-describedby="emailExample"
                                                    v-model="credential.email"
                                                />
                                            </div>

                                            <!-- PASSWORD -->
                                            <div class="row gx-3">
                                                <label class="text-gray-600 small" for="passwordExample">Password</label>
                                                <input class="form-control form-control-solid" type="password" aria-label="Password" aria-describedby="passwordExample"
                                                    v-model="credential.password"
                                                />
                                            </div>

                                            <br>
                                            <!-- Form Group (form submission)-->
                                            <div class="d-flex align-items-center">
                                                <button class="btn btn-danger" type="submit">Create Account</button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <hr class="my-0" />
                                    <div class="card-body px-5 py-4">
                                        <div class="small text-center">
                                            Have an account?
                                            <router-link to="/session/login" style="color:red">Sign in</router-link>
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
    import { mapActions } from 'pinia';
    import { useSessionStore } from '../stores/sessionStore';

    import FooterBar from '../components/FooterBar.vue';
    import FacebookSigninButton from '../components/FacebookSigninButton.vue';
    import GoogleSigninButton from '../components/GoogleSigninButton.vue';
    
    export default {
        data() {
            return {
                credential : {
                    name : '',
                    email : '',
                    password : ''
                },
            };
            },
        components: { FooterBar, FacebookSigninButton, GoogleSigninButton },
        methods: {
            ...mapActions(useSessionStore, ['register'])
        },
    };
</script>