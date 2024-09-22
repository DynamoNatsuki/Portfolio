<template>
    <h1>CV portfolio with handlebars</h1>

    <p>
        Build a portfolio or resume website with Node JS, Express and Handlebars. Add the following subpages and fill with real information, or 
        Lorem Ipsum text (https://www.lipsum.com/):
    </p>

    <ul>
        <li>Home page</li>
        <li>About me</li>
        <li>Previous projects</li>
        <li>Contact details</li>
    </ul>

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