<template>
    <h1>FizzBuzz</h1>
    <p>This project is a console program in C# that prints all numbers from 1 to 100 on a single line. 
    If the number is divisible by 3, print “Fizz” instead of the number.
    For example, 3 and 6 should be replaced by Fizz.
    If the number is divisible by 5, print “Buzz” instead of the number. 
    For example, 5 and 10 should be replaced by Buzz
    If the number is divisible by both 3 and 5, print FizzBuzz instead.
    For example, 15 and 30 should be replaced by FizzBuzz.</p>

    <div class="code">
        <h2>Project code</h2>
        <img src="fizzbuzzcode.JPG" alt="fizz buzz code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="fizzbuzz.PNG" alt="fizz buzz">
    </div>
    
    <p><a href="https://github.com/DynamoNatsuki/FizzBuzz"><strong>GitHub Repo</strong></a></p>

    <router-link :to="'/'"><button><strong>Back to homepage</strong></button></router-link>
</template>


<style scoped>
p {
    text-align: center;
    padding: 0;
}

img {
    width: fit-content;
    height: fit-content;
    padding: 20px;
    border-radius: 10%;
}

</style>