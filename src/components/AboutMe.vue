<template>
    <h1>Portfolio</h1>
    <h2><em>Pethra Axelsson</em></h2>
    <div class="aboutme">
        <img src="egenbild.jpg" alt="egen bild" class="waterfall-animation person">
        <div class="aboutmetext waterfall-animation">
            <h3 class="waterfall-animation">About me</h3>
            <p class="waterfall-animation">I am a full-stack developer based in Gothenburg, Sweden. I like being in the stable, training and competing with my horse, playing the drums, playing rpgs and board games with my friends, watching anime, working with 
            improving working processes, automation, and coding.</p>
        </div>
    </div>

    <div class="contact">
        <h2 class="waterfall-animation">Contact details</h2>
        <a href="https://se.linkedin.com/in/pethra-axelsson-3735b028/sv" target="_blank" rel="noopener noreferrer">
            <img src="Linkedin.png" alt="LinkedIn Logo" class="waterfall-animation linked-image">
        </a>
        <a href="mailto:pethra_1@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img src="outlook.png" alt="Outlook Logo" class="waterfall-animation linked-image">
        </a>
    </div>

    <div class="skills">
        <h3 class="waterfall-animation">Skills</h3>
        <p class="waterfall-animation"><em>I have worked with the following programs and coding languages:</em></p>
        
        <div class="skilllist">
            <ul class="waterfall-animation">
                <li>MVC</li>
                <li>SQL Server</li>
                <li>API</li>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
                <li>Node JS</li>
                <li>Express</li>
                <li>Handlebars</li>
                <li>Vue JS</li>
                <li>C#</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
        </div>
    </div>
    
    <div class="projects">
        <h3 class="waterfall-animation">Projects</h3>
        <p class="waterfall-animation"><em>Here is a list of the projects I have done so far.</em></p>
        <ul class="waterfall-animation">
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
    </div>


</template>

<style scoped>
.aboutme {
    text-align: center;
    display: inline-flex;
    flex-direction: row;
}

.aboutmetext {
    width: 400px;
}

.skills {
    text-align: center;
}

.projects {
    text-align: center;
}

li {
    list-style-type: none;
    padding: 5px;
}

.person {
    width: 200px;
    height: 300px;
    padding: 20px;
    border-radius: 10%;
}

.contact{
    padding: 50px
}

.linked-image {
    width: 50px; /* Adjust the size of the image */
    height: auto;
    padding: 20px;
    cursor: pointer; /* Show pointer on hover */
    transition: transform 0.3s ease; /* Add hover effect */
}

.linked-image:hover {
    transform: scale(1.05); /* Slightly zoom in the image on hover */
}
</style>