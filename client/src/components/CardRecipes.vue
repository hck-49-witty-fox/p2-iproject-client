<script>
export default {
    props: ['recipe']
}
</script>
<template>
    <div class="container border my-5">
        <div class="d-flex flex-wrap justify-content-between shrink py-5">
            <div class="card my-3" style="width: 24rem">
                <img :src="recipe.picture" class="card-img-top" :alt="index" />
                <div class="card-body">
                    <h5 class="card-title">{{recipe.title}}</h5>
                    <p class="card-text">
                        {{recipe.description}}
                    </p>
                </div>
                <div class="card-body d-flex justify-content-between">
                    <button class="btn btn-light">Read More</button>
                    <button class="btn btn-light">Add to My Recipes</button>
                </div>
            </div>
        </div>
    </div>
</template>