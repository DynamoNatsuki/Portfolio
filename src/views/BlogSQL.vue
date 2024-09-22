<template>
    <h1>Blog platform SQL</h1>

    <p>
        I created a new web project in Visual Studio of type MVC (Model-View-Controller) and built a page where visitors can create and view blog posts. 
        The home page displays all created blog posts. A post contains a title (max 50 characters), a summary (max 150 characters), and content (max 5000 characters). 
        Each post is clickable to view the full post. On a separate subpage, a form is displayed that visitors can use to create their own posts that saved in the 
        database.
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="/blogSQLcode.JPG" alt="Blog SQL code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="/blogSQL.JPG" alt="Blog SQL">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/BlogApplicationSQL"><strong>GitHub Repo</strong></a></p>

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
