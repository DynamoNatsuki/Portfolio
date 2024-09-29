<template>
    <h1 class="waterfall-animation">Exercise Diary</h1>

    <p class="waterfall-animation">
        I created a training diary page using MVC. The users are able to add exercises (e.g. deadlift or running) and exercise sessions. For each exercise, the user is
        able to add the exercise name and description. For each exercise session, the user is able to add a date, select an exercise and write how much they lifted or ran. 
        (e.g. 2022-08-12, running, 5km).
    </p>

    <div class="code">
        <h2 class="waterfall-animation">Project code</h2>
        <img src="trainingMVCcode.JPG" alt="Training MVC code" class="waterfall-animation">
    </div>

    <div>
        <h2 class="waterfall-animation">Project final result</h2>
        <img src="trainingMVC.JPG" alt="Training and exercise page" class="waterfall-animation">
    </div>

    <h2 class="waterfall-animation">GitHub</h2>
    <p class="waterfall-animation"><a href="https://github.com/DynamoNatsuki/TrainingApplication"><strong>GitHub Repo</strong></a></p>

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