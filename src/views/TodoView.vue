<template>
    <h1>Todo frontend & backend</h1>

    <p>
        I created a new API to retrieve, create, edit and delete tasks in a todo list. Each task have a title, date, and be marked as done/not done. 
        I also built a front-end application with Vue JS that I connected to my API so that users can view, create, edit, and delete tasks through the application.
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="/todoAPIcode.JPG" alt="Todo API code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="/todoAPIvue.JPG" alt="Todo API Vue">
    </div>

    <div class="links">
        <p><a href="https://github.com/DynamoNatsuki/ToDo-Vue-API">GitHub Repo for the Vue project</a></p>
        <p><a href="https://github.com/DynamoNatsuki/Todo_API_application">GitHub Repo for connected API project</a></p>
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
    border-radius: 10%;
}
</style>