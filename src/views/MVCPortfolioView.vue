<template>
    <h1>MVC Project</h1>

    <p>Build a portfolio page in MVC with a home page where you introduce yourself. Add a subpage for your projects.</p>

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
