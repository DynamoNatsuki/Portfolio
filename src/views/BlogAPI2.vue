<template>
    <h1>API for blog</h1>
    <div>
        <p>
        A project where, I built a Blog API. This project is part of the larger project named "Blog frontend & backend". The API contains CRUD operations (Create, Read, Update, and Delete), 
        i.e. Get, Post, Put, and Delete, for blog posts. Each post have the following properties:    
        </p>
        <ul>
            <li>Id (int)</li>
            <li>Title (string)</li>
            <li>Content (string)</li>
            <li>Date (DateTime)</li>
        </ul>
    </div>

    <div class="code">
        <h2>Project code</h2>
        <img src="blogSqlApicode.JPG" alt="Blog SQL API code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="blogSqlApi.JPG" alt="Blog SQL API">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/Blog_SQL_API"><strong>GitHub Repo</strong></a></p>

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