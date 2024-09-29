<template>
    <h1>Webshop with Vue JS</h1>

    <p>
        I used Vue JS to build an online store. On the homepage, products are displayed with image, name, and price. Each product is clickable to 
        show more information about the product. On the product pages, the visitor is able to click on a Buy button that takes the visitor to a form 
        where the product is displayed and where the visitor can complete the purchase by filling in payment details. The Buy function does not function 
        and no money can be deducted for the purpose of this project. 
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="webshopcode.JPG" alt="Webshop code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="webshop.JPG" alt="Webshop">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/Webshop_Vue">GitHub Repo</a></p>

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
