<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-image: url('@/assets/texture.jpg');
  background-size: cover;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  justify-content: center;
}

a {
  color: #0b633b;
}

button {
  background-color: transparent; /* Makes the background invisible */
  color: rgb(47, 48, 87); /* Text color */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button.hover {
  background-color: rgba(255, 255, 255, 0.2); /* Optional: Adds a light hover effect */
}

button:focus {
  outline: none; /* Removes default focus outline */
}

</style>
