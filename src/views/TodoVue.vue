<template>
    <h1>Todo list with Vue JS</h1>

    <p>
        I used Vue JS to build a todo list (to-do list). On the homepage, all tasks (Todos) are listed and the visitor are able to add tasks 
        with an input field and a button. Each task should have a title and can be marked as completed or deleted. Completed tasks are still displayed, 
        but there is a clear distinction between completed tasks and tasks (e.g. through different colored text). Deleted tasks disappear completely 
        and does not appear anywhere.
    </p>
    
    <div class="code">
        <h2>Project code</h2>
        <img src="/todovuecode.JPG" alt="Todo Vue code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="/todovue.JPG" alt="Todo Vue">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/Todo_Vue">GitHub Repo</a></p>

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