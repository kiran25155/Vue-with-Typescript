<template>
    <body>
    <div class="row">
     
    <a href="/">Home</a>
    <a href="about.html">About</a>
    <a href="/reg" target="_self">Register</a>
    <a href="forgottenPass.html">Contact</a>
    <a href="">suggestion</a>
    
    <router-link to='/login'>Login</router-link>
    </div>
    
    <h1 class="home">Welcome To Amiti Technologies</h1>
    
    </body>
    </template>
    <script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
    name:'Home',
    
    })
    </script>
    <style>
    body{
    background-image:url('~@/assets/company1.jpg');
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-size:cover;
    }


* {
    box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}

div.row {
   
    overflow:hidden;
    background:white;
    margin-top: -79px;
    width:1300px;
    max-height:70px;
}
div.row a {
    height:70px;
    float:left;
    color:#B22222;
    text-align:center;
    text-decoration:none;
    padding:20px 16px;
   
    font-size: 18px;
    text-transform:uppercase;
    font-weight:bold
}
    div.row a:hover{
    background:	#00008B;
    color:white;
    }
    * {
      box-sizing: border-box;
    }
    h1.home {
    text-align: center;
    color: orange;
    margin-left: auto;
    margin-right: auto;
    margin-top: 153px;
}
    </style>
    