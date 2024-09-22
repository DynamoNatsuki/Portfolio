<template>
    <h1>API for blog</h1>

    <p>
        Create a new web project in Visual Studio of type MVC (Model-View-Controller) and build a simple company page. You can either invent a company, or 
        choose an existing company page and try to clone it. clone it. If you build a page for an invented company, you can add the following subpages and 
        fill with Lorem Ipsum text (https://www.lipsum.com/):  
    </p>
    <ul>
        <li>Home page (simple information about the company)</li>
        <li>About us (more detailed information)</li>
        <li>Employees (pictures of, and texts about, four to five employees)</li>
        <li>Contact us (email address, phone number, map, and forms)</li>
    </ul>
    
    <div class="code">
        <h2>Project code</h2>
        <img src="/companyMVCcode.JPG" alt="Company MVC code">
    </div>

    <div>
        <h2>Project final result</h2>
        <img src="/companyMVC.JPG" alt="Company page">
    </div>

    <p><a href="https://github.com/DynamoNatsuki/CompanyApplication"><strong>GitHub Repo</strong></a></p>

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
li {
    list-style-type: none;
    padding: 5px;
}
</style>