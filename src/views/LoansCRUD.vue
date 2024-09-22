<template>
    <h1>CRUD for loans</h1>

    <p>
        Build on the same project as in the course and add a model and controller for Loans. A loan has the following properties:
        Add CRUD (Create, Read, Update & Delete) operations, i.e. Get, Post, Put, and Delete, for Loans in the same way as we did for Books.
    </p>

    <ul>
        <li>Id (int)</li>
        <li>BookId (int)</li>
        <li>StartDate (DateTime)</li>
    </ul> 

    <div class="code">
        <h2>Project code</h2>
        <img src="/loansCRUDcode.JPG" alt="CRUD loans code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="/loansCRUD.JPG" alt="CRUD for loans page">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/LibraryAPI"><strong>GitHub Repo</strong></a></p>

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
