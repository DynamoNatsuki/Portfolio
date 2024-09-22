<template>
    <h1>Recipe list in MVC</h1>

    <p>
        Create a new web project in Visual Studio of type MVC (Model-View-Controller) and build a page with different recipes. 
        The recipes should be displayed in a list with summary and image on the home page and each recipe should be viewable on its own subpage by 
        the visitor clicking on the recipe in the list on the home page.
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="" alt="">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="" alt="">
    </div>

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
}
</style>
