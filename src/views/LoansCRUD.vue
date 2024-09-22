<template>
    <h1>CRUD for loans</h1>

    <p>
        Build on the same project as in the course and add a model and controller for Loans. A loan has the following properties: <br>
        Add CRUD (Create, Read, Update & Delete) operations, i.e. Get, Post, Put, and Delete, for Loans in the same way as we did for Books.
    </p>

    <ul>
        <li>Id (int)</li>
        <li>BookId (int)</li>
        <li>StartDate (DateTime)</li>
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
