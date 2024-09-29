<template>
    <h1>Training diary with SQL</h1>

    <p>
        I created a web project in Visual Studio of type MVC (Model-View-Controller) and built a page where visitors can create and view training data. 
        On the home page, saved training sessions are displayed. A workout contains exercise (max 50 characters), sets (number between 1-100), 
        reps (number between 1-100) and weight (number between 1-500). Each exercise are clickable to edit or delete. On a separate subpage, a form 
        are displayed that visitors can use to create their own training sessions that are saved in the database.
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="trainingsqlcode.JPG" alt="Training SQL code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="trainingsql.JPG" alt="Training SQL">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/TrainingApplicationSQL">GitHub Repo</a></p>

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
