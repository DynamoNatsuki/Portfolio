<template>
    <h1>Blog platform API</h1>

    <p>
        Created a web API that can be used to create, view, edit, and delete blog posts. Each blog post has a title (max 100 characters), a summary (max 150 characters), 
        and main content (up to 5000 characters).
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="/blogMVCcode.JPG" alt="Blog MVC code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="/blogMVC.JPG" alt="Blog MVC">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/BlogApplicationAPI"><strong>GitHub Repo</strong></a></p>

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