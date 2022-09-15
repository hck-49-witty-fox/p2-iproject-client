<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    name: 'NavBar',
    computed: {
        ...mapState(useCounterStore, ['isLogin']),
    },
    methods: {
        ...mapActions(useCounterStore, ['changeIsLogin']),
        logoutButton() {
            localStorage.clear()
            this.$router.push('/login')
            this.changeIsLogin(false)
        }
    }
}
</script>

<template>
    <!-- NavBar -->
    <div class="">
        <nav class="navbar d-flex justify-content-between navbar-light">
            <div class="container-fluid ">
                <div class="col-1">
                    <a class="navbar-brand" href="#">Logo</a>
                </div>
                <!-- margin itu buat jarak luar, padding buat jarak dalam -->
                <div class="col-6">
                    <div class="row d-flex flex-column align-items-center">
                        <div class="d-flex justify-content-center px-5">
                            <div class="navbar-nav flex-row align-items-between mb-3">
                                <div class=""></div>
                                <router-link to="/" class="nav-link px-4 border-dark border-end" href="#">Home
                                </router-link>
                                <router-link to="/recipes" class="nav-link px-4 border-dark border-end" href="#">Recipes
                                </router-link>
                                <router-link to="/myrecipes" class="nav-link px-4" href="#">MyRecipes</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="col-9 flex-row align-items-between">
                            <form class="d-flex justify-content-between">
                                <input class="form-control me-2" type="search" placeholder="Search"
                                    aria-label="Search" />
                                <button class="btn btn-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-1 d-flex justify-content-end">
                    <div v-if="!isLogin">
                        <router-link to="/login" class="nav-link link-light" href="#">Login</router-link>
                    </div>
                    <div v-if="isLogin">
                        <a @click.prevent="logoutButton" class="nav-link link-light" href="#">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>