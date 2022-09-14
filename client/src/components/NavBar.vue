<template>
   <nav class="flex flex-row justify-between items-center bg-stone-900 text-white rounded-lg p-5 m-10 mt-5 mb-5">
           <div>
               <h1><i class="fa-solid fa-mug-hot"></i> <router-link to="/">Coffee Finder</router-link></h1>
           </div>
           <div>
               <ul class="flex flex-row justify-equaly">
                   <li class="ml-5 mr-5"><router-link to="/login">Login</router-link></li>
                   <li class="ml-5 mr-5"><router-link to="/register">Register</router-link></li>
                   <li class="ml-5 mr-5"><router-link to="/chat">Chat</router-link></li>
               </ul>
           </div>
           <div >
               <span v-if="username">Hei, </span>
               <span class="mr-5" v-if="username">{{username}}</span>
               <button 
               v-if="username"
               class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              
               @click="logout"
               >Logout</button>
           </div>
       </nav>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {useIProjStore} from '../stores/IProj'
    export default {
        methods: {
            ...mapActions(useIProjStore, ['logout'])
        },
        computed: {
            ...mapState(useIProjStore, ['username', 'isLogin'])
        }
    }
</script>