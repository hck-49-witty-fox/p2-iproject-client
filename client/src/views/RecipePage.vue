<script>
import { mapState } from 'pinia';
import CardRecipes from '../components/CardRecipes.vue';
import { useCounterStore } from '../stores/counter';
export default {
    name: 'RecipePage',
    components: { CardRecipes },
    computed: {
        ...mapState(useCounterStore, ['recipes'])
    }
}
</script>


<template>
    <div>
        <!-- Welcome Page -->
        <div class="text-center py-4">
            <h1>Here are our recipes!</h1>
            <span>You can put them in your list.</span>
        </div>
        <hr />

        <CardRecipes v-for="recipe,index in recipes" :recipe="recipe" :key="index" />
    </div>
</template>