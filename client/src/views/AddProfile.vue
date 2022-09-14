<template>
    <div class="w-full flex flex-wrap">

        <div class="w-full md:w-1/2 flex flex-col">

            <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                <router-link class="bg-black text-white font-bold text-xl p-4" to="/"><i class="fa-solid fa-mug-hot"></i>
                </router-link>
            </div>

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p class="text-center text-3xl">Join Us.</p>
                <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="profileRegis">
                    <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">FullName</label>
                        <input type="text" id="name" placeholder="John Smith"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="fullname" />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Bio</label>
                        <input type="text" id="bio" placeholder=""
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="bio" />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="password" class="text-lg">imgUrl</label>
                        <input type="text" placeholder=""
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="imgUrl" />
                    </div>

                    <input type="submit" value="Add Profile"
                        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                </form>
            </div>

        </div>

        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block"
                src="https://inaexport.id/uploads/Eksportir_Product/Image/12138/1654595306__%20coffee%20ku.jpg"
                alt="Background" />
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'pinia'
    import { useIProjStore } from '../stores/IProj';
    export default {
        data() {
            return {
                fullname: '',
                bio: '',
                imgUrl: ''
            }
        },
        methods: {
            ...mapActions(useIProjStore, ['handleProfile']),
            profileRegis() {
                this.handleProfile(this.fullname, this.bio, this.imgUrl)
            }
        },
    }
</script>