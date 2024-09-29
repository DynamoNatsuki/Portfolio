<template>
    <h1 class="waterfall-animation">Recipe list API</h1>

    <p class="waterfall-animation">
        I created a web API that can be used to create, view, edit, and delete recipes. Each recipe has a title (max 100 characters) and instructions (up to 5000 characters).
    </p>

    <div class="code">
        <h2 class="waterfall-animation">Project code</h2>
        <img src="recipeAPIcode.JPG" alt="Recipe API code" class="waterfall-animation">
    </div>

    <div>
        <h2 class="waterfall-animation">Project final result</h2>
        <img src="recipeAPI.JPG" alt="Recipe API" class="waterfall-animation">
    </div>

    <h2 class="waterfall-animation">GitHub</h2>
    <p class="waterfall-animation"><a href="https://github.com/DynamoNatsuki/RecipeApplicationAPI"><strong>GitHub Repo</strong></a></p>

    <router-link :to="'/'"><button><strong>Back to homepage</strong></button></router-link>
</template>

<style scoped>
p {
    text-align: center;
    padding: 15px 100px 15px 100px;
}

img {
    width: fit-content;
    height: fit-content;
    padding: 20px;
    border-radius: 10%;
}
</style>
