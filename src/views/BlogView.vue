<template>
    <h1>Blog fronend & backend</h1>

    <p>
        Use Vue JS to build a web application that you connect to the API you built in the previous task. In the web application, you should be able to retrieve all blog posts, 
        view them separately by clicking on them, create new posts, edit posts, and delete posts.
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="" alt="">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="" alt="">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/BlogAPIVue"><strong>GitHub Repo for the Vue project</strong></a></p>
    <p><a href="https://github.com/DynamoNatsuki/Blog_SQL_API"><strong>GitHub Repo for connected API project</strong></a></p>

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