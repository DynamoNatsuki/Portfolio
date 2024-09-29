<template>
    <h1 class="waterfall-animation">CRUD for loans</h1>

    <p class="waterfall-animation">
        I continued building on a library project as in the course and added a model and controller for loans of books. I added CRUD (Create, Read, Update & Delete) operations, 
        i.e. Get, Post, Put, and Delete, for Loans of books. The project has the following properties: 
    </p>

    <ul class="waterfall-animation">
        <li>Id (int)</li>
        <li>BookId (int)</li>
        <li>StartDate (DateTime)</li>
    </ul> 

    <div class="code">
        <h2 class="waterfall-animation">Project code</h2>
        <img src="loansCRUDcode.JPG" alt="CRUD loans code" class="waterfall-animation">
    </div>

    <div>
        <h2 class="waterfall-animation">Project final result</h2>
        <img src="loansCRUD.JPG" alt="CRUD for loans page" class="waterfall-animation">
    </div>

    <h2 class="waterfall-animation">GitHub</h2>
    <p class="waterfall-animation"><a href="https://github.com/DynamoNatsuki/LibraryAPI"><strong>GitHub Repo</strong></a></p>

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
