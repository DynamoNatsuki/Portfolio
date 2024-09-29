<template>
    <h1 class="waterfall-animation">Blog frontend & backend</h1>

    <p class="waterfall-animation">
        I built a web application using Vue JS that I connected to the API in the project "API for Blogs". In the web application, you are able to retrieve all blog posts, 
        view them separately by clicking on them, create new posts, edit posts, and delete posts.
    </p>

    <div class="code">
        <h2 class="waterfall-animation">Project code</h2>
        <img src="blogAPIvuecode.JPG" alt="Blog API Vue code" class="waterfall-animation">
    </div>

    <div>
        <h2 class="waterfall-animation">Project final result</h2>
        <img src="blogAPIvue.JPG" alt="Blog API Vue page" class="waterfall-animation">
    </div>

    <h2 class="waterfall-animation">GitHub</h2>
    <p class="waterfall-animation"><a href="https://github.com/DynamoNatsuki/BlogAPIVue"><strong>GitHub Repo for the Vue project</strong></a></p>
    <p class="waterfall-animation"><a href="https://github.com/DynamoNatsuki/Blog_SQL_API"><strong>GitHub Repo for connected API project</strong></a></p>

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