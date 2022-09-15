<script>
import CardMyRecipes from '../components/CardMyRecipes.vue';
export default {
    components: { CardMyRecipes }
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

        <CardMyRecipes />
    </div>
</template>