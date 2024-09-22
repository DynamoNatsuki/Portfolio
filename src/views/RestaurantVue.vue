<template>
    <h1>Restaurant page with Vue JS</h1>

    <p>
        Use Vue JS to build a restaurant page. Use custom content or Lorem Ipsum text (https://www.lipsum.com/) to build the following subpages:  
    </p>
    <ul>
        <li>Home (Restaurant name and some short text about the restaurant)</li>
        <li>Lunch menu (a menu with different dishes for each day Monday to Friday)</li>
        <li>Contact us (phone number, email address, and visiting address)</li>
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
