<template>
    <h1 class="waterfall-animation">Blog with Vue JS</h1>

    <p class="waterfall-animation">
        I use Vue JS to build a personal blog. Use custom content to build a homepage listing all blog posts, and separate subpages for each post. 
        On the home page, each post is clickable to display the entire post on a separate page.
    </p>

    <div class="code">
        <h2 class="waterfall-animation">Project code</h2>
        <img src="blogVuecode.JPG" alt="Blog Vue code" class="waterfall-animation">
    </div>

    <div>
        <h2 class="waterfall-animation">Project final result</h2>
        <img src="blogVue.JPG" alt="Blog Vue page" class="waterfall-animation">
    </div>

    <h2 class="waterfall-animation">GitHub</h2>
    <p class="waterfall-animation"><a href="https://github.com/DynamoNatsuki/Blog_Vue"><strong>GitHub Repo</strong></a></p>

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