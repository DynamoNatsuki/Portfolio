<template>
    <h2>Pethra Axelsson</h2>

    <div class="aboutme">
        <img src="/egenbild.jpg" alt="egen bild">
        <div class="aboutmetext">
            <h3>About me</h3>
            <p>I am a full-stack developer based in Gothenburg, Sweden. I like being in the stable, training and competing with my horse, playing the drums, playing rpgs and board games with my friends, watching anime, working with 
            improving working processes, automation, and coding.</p>
        </div>
    </div>

    <div class="skills">
        <h3>Skills</h3>
        <p><em>I have worked with the following programs and coding languages:</em></p>
        
        <div class="skilllist">
            <ul>
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
        <h3>Projects</h3>
        <p><em>Here is a list of the projects I have done so far.</em></p>
        <ul>
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

    <div class="contact">
        <h1>Contact details</h1>
        <p><a href="https://se.linkedin.com/in/pethra-axelsson-3735b028/sv">LinkedIn</a></p>
    </div>
</template>

<style scoped>
.aboutme {
    margin: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    padding-left: 300px;
    padding-right: 300px;
}

.aboutmetext {
    margin: 10px;
}

.skills {
    margin: 10px;
    text-align: center;
}

.projects {
    margin: 10px;
    text-align: center;
}

li {
    list-style-type: none;
    padding: 5px;
}

img {
    width: 200px;
    height: 300px;
    padding: 20px;
    border-radius: 10%;
}

.contact{
    padding: 50px
}
</style>