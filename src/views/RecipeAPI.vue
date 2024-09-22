<template>
    <h1>Recipe list API</h1>

    <p>
        I created a web API that can be used to create, view, edit, and delete recipes. Each recipe has a title (max 100 characters) and instructions (up to 5000 characters).
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="/recipeAPIcode.JPG" alt="Recipe API code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="/recipeAPI.JPG" alt="Recipe API">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/RecipeApplicationAPI"><strong>GitHub Repo</strong></a></p>

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
