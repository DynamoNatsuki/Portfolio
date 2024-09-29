<template>
    <h1 class="waterfall-animation">Recipe list with handlebars</h1>

    <p class="waterfall-animation">
        I created a web page with with Node JS, Express and Handlebars that can be used to create, view, edit, and delete recipes. 
        Each recipe has a title (max 100 characters) and instructions (up to 5000 characters).
    </p>

    <div class="code">
        <h2 class="waterfall-animation">Project code</h2>
        <img src="recipeNodecode.JPG" alt="Recipe Node code" class="waterfall-animation">
    </div>

    <div>
        <h2 class="waterfall-animation">Project final result</h2>
        <img src="recipeNode.JPG" alt="Recipe with handlebars page" class="waterfall-animation">
    </div>

    <h2 class="waterfall-animation">GitHub</h2>
    <p class="waterfall-animation"><a href="https://github.com/DynamoNatsuki/RecipeApplication-Node-JS"><strong>GitHub Repo</strong></a></p>

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
