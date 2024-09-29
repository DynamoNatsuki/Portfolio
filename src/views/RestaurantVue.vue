<template>
    <h1>Restaurant page with Vue JS</h1>

    <p>
        I used Vue JS to build a restaurant page. I used custom content to build the following subpages:  
    </p>
    <ul>
        <li>Home (Restaurant name and some short text about the restaurant)</li>
        <li>Lunch menu (a menu with different dishes for each day Monday to Friday)</li>
        <li>Contact us (phone number, email address, and visiting address)</li>
    </ul>

    <div class="code">
        <h2>Project code</h2>
        <img src="restaurantVuecode.JPG" alt="Restaurant Vue code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="restaurantVue.JPG" alt="Restaurant page">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/Restaurant_Vue"><strong>GitHub Repo</strong></a></p>

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
li {
    list-style-type: none;
    padding: 5px;
}
</style>
