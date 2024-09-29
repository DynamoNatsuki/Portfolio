<template>
    <h1 class="waterfall-animation">Recipe list in MVC</h1>

    <p class="waterfall-animation">
        I created a new web project in Visual Studio of type MVC (Model-View-Controller) and build a page with different recipes. 
        The recipes are displayed in a list with summary and image on the home page and each recipe is viewable on its own subpage by 
        the visitor clicking on the recipe in the list on the home page.
    </p>

    <div class="code">
        <h2 class="waterfall-animation">Project code</h2>
        <img src="recipeMVCcode.JPG" alt="Recipe MVC code" class="waterfall-animation">
    </div>

    <div>
        <h2 class="waterfall-animation">Project final result</h2>
        <img src="recipeMVC.JPG" alt="Recipe MVC page" class="waterfall-animation">
    </div>

    <h2 class="waterfall-animation">GitHub</h2>
    <p class="waterfall-animation"><a href="https://github.com/DynamoNatsuki/RecipeApplicationMVC"><strong>GitHub Repo</strong></a></p>

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
