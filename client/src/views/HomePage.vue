<script>

// import db from "../db";
// import { reactive, onMounted, ref } from "vue";

import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data() {
        return {
            // username: '',
            surat: "",
            messages: []
        };
    },
    computed: {
        ...mapState(useCounterStore, ["username"]),
        ...mapState(useCounterStore, ["images"]),
    },
    methods: {
        // ...mapActions(useCounterStore, [''])
        // sendMessage() {
        //     this.messageRef() = db.database().ref("messages")
        // }
    }
};
</script>

<template>
    <!-- Welcome Page -->
    <div class="text-center py-4">
        <h1>Welcome to Our World!</h1>
        <span>Here you can find many recipes all over the world, and dont forget we
            love you!</span>
    </div>
    <hr />

    <div class="container">
        <div class="col-4">
            <!-- <header>

                <h4>Hi, {{this.username}}</h4>
            </header>
            <section class="chat-box">
                //messages
                <div v-for="message in messages" :key="message.key"
                    :class="(message.username == this.username ? 'message current-user' : 'message')">
                    <div class="message-inner">
                        <div class="username">{{ message.username }}</div>
                        <div class="content">{{ message.content }}</div>
                    </div>
                </div>
            </section>
            <footer>
                <form @submit.prevent="">
                    <input v-model="surat" type="text" placeholder="Write a message here ...">
                    <input type="submit" value="Send">
                </form>
            </footer> -->
        </div>

        <div class="col-6">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.budgetbytes.com/wp-content/uploads/2021/08/Cheese-Grits-plate.jpg"
                            class="d-block w-100" alt="1">
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.budgetbytes.com/wp-content/uploads/2022/09/Easy-Soda-Bread-V3.jpg"
                            class="d-block w-100" alt="2">
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.budgetbytes.com/wp-content/uploads/2020/09/Cajun-Sausage-and-Rice-Skillet-front.jpg"
                            class="d-block w-100" alt="3">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>


</template>