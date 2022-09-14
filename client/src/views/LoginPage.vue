<template>
    <!-- Login Section -->
    <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/2 flex flex-col">

            <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                <router-link class="bg-black text-white font-bold text-xl p-4" to="/"><i class="fa-solid fa-mug-hot"></i></router-link>
            </div>

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p class="text-center text-3xl">Welcome.</p>
                <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="loginHandle">
                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="your@email.com" 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="email"
                        >
                    </div>
    
                    <div class="flex flex-col pt-4">
                        <label for="password" class="text-lg">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="password"
                        >
                    </div>
    
                    <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                </form>
                <br>
                <div id="google-button-login"></div>
                <div class="text-center pt-12 pb-12">
                    <p>Don't have an account? <router-link to="/register">Register</router-link></p>
                </div>
            </div>

        </div>

        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block" src="https://inaexport.id/uploads/Eksportir_Product/Image/12138/1654595306__%20coffee%20ku.jpg">
        </div>

    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useIProjStore } from '../stores/IProj';
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(useIProjStore, ['handleLogin', 'handleCredentialResponse']),
            loginHandle(){
                this.handleLogin(this.email, this.password)
            }
        },
        mounted(){
            const cb = this.handleCredentialResponse
            
            window.onload = function () {
                google.accounts.id.initialize({
                    client_id: "1079445495110-forsvi4sg2pdbnvpb5t0haan7mooj446.apps.googleusercontent.com",
                    callback: cb
                });
                    google.accounts.id.renderButton(
                    document.getElementById("google-button-login"),
                    { theme: "outline", size: "large" }  // customization attributes
                );
                google.accounts.id.prompt(); // also display the One Tap dialog
            }
      },
    }
</script>