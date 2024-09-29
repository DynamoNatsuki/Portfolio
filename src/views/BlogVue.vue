<template>
    <h1>Blog with Vue JS</h1>

    <p>
        I use Vue JS to build a personal blog. Use custom content to build a homepage listing all blog posts, and separate subpages for each post. 
        On the home page, each post is clickable to display the entire post on a separate page.
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="blogVuecode.JPG" alt="Blog Vue code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="blogVue.JPG" alt="Blog Vue page">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/Blog_Vue"><strong>GitHub Repo</strong></a></p>

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