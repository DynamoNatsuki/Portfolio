<template>
    <h1>Tic tac toe</h1>

    <p>
        Tic Tac Toe (also known as 'three in a row' or 'hobo chess') is a game where two players take turns placing their marker (X or O) in a grid and compete to see 
        who can place three of their markers in a row first. Write a program that displays a 3x3 grid in the console and allows the user to place a marker in any free 
        square by typing in which row and column the marker should be placed.
    </p>

    <div class="code">
        <h2>Project code</h2>
        <img src="/tictaccode.JPG" alt="tic tack toe code">
    </div>

    <div class="image">
        <h2>Project final result</h2>
        <img src="/tictactoe.PNG" alt="Tic Tac Toe">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/Tic-Tac-Toe"><strong>GitHub Repo</strong></a></p>

    <router-link :to="'/'"><button><strong>Back to homepage</strong></button></router-link>
</template>

<script>
export default {
    name: 'TicTacToeView',
};
</script>

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