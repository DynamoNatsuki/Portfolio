<template>
  <!--Sidebar Navigation-->
  <nav class="sidebar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <p class="sidebar-p"><strong>Projects</strong></p>
      <li><router-link :to="'/todo'">Todo frontend & backend</router-link></li>
      <li><router-link :to="'/blogview'">Blog frontend & backend</router-link></li>
      <li><router-link :to="'/blogapi2'">API for blog</router-link></li>
      <li><router-link :to="'/loans'">CRUD for loans</router-link></li>
      <li><router-link :to="'/webshop'">Webshop with Vue JS</router-link></li>
      <li><router-link :to="'/todovue'">Todo List with Vue JS</router-link></li>
      <li><router-link :to="'/blogvue'">Blog with Vue JS</router-link></li>
      <li><router-link :to="'/restaurant'">Restaurant page with Vue JS</router-link></li>
      <li><router-link :to="'/recipehdlb'">Recipe list with handlebars</router-link></li>
      <li><router-link :to="'/blogapi'">Blogplatform API</router-link></li>
      <li><router-link :to="'/recipeapi'">Recipe list API</router-link></li>
      <li><router-link :to="'/training'">Exercise diary with SQL</router-link></li>
      <li><router-link :to="'/blogsql'">Blogplatform with SQL</router-link></li>
      <li><router-link :to="'/recipesql'">Recipe list with SQL</router-link></li>
      <li><router-link :to="'/recipemvc'">Recipe list in MVC</router-link></li>
      <li><router-link :to="'/company'">Company page in MVC</router-link></li>
      <li><router-link :to="'/tictac'">Tic Tac Toe</router-link></li>
      <li><router-link :to="'/exercise'">Exercise diary</router-link></li>
      <li><router-link :to="'/fizzbuzz'">FizzBuzz</router-link></li>
    </ul>  
  </nav>

  <!--Content for each page-->
  <div class="content">
    <router-view/>
  </div>

</template>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-image: url('@/assets/texture.jpg');
  background-size: cover;
}

#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  margin: 0;
  padding: 0;
  min-height: 100vh;
  justify-content: center;
}

/* Sidebar Styling */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: #01301b;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.sidebar ul li a:hover {
  background-color: #01663f;
}

.sidebar-p {
  color: rgb(196, 196, 130);
  font-size: larger;
}

/* Content Styling */
.content {
  margin-left: 300px; /* Offset for the sidebar */
  padding: 20px;
}

/* Define the sliding animation */
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animation to all elements with this class */
.waterfall-animation {
  opacity: 0; /* Start invisible */
  animation: slideIn 1s forwards;
}

/* Stagger the animations using nth-child to create the waterfall effect */
.waterfall-animation:nth-child(1) {
  animation-delay: 0.2s;
}
.waterfall-animation:nth-child(2) {
  animation-delay: 0.4s;
}
.waterfall-animation:nth-child(3) {
  animation-delay: 0.6s;
}
.waterfall-animation:nth-child(4) {
  animation-delay: 0.8s;
}

a {
  color: #01301b;
}

button {
  background-color: transparent; /* Makes the background invisible */
  color: rgb(5, 6, 56); /* Text color */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button:focus {
  outline: none; /* Removes default focus outline */
}

</style>
