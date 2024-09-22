<template>
    <h1>Blog with Vue JS</h1>

    <p>
        Use Vue JS to build a personal blog. Use custom content or Lorem Ipsum text (https://www.lipsum.com/) to build a homepage listing all blog posts, 
        and separate subpages for each post. On the home page, each post should be clickable to display the entire post on a separate page.
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