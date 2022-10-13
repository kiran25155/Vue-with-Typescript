<template>
    <body >
    <div id="log">
    <form>
     
      <div class="column">
          
    <fieldset >
            <h3>Employee Login</h3>
    <table class="t1">
    <tr>
    <td>Emp Id:</td>
    <td><input type="text" @change.prevent="changInpts()" placeholder="Em****"  v-model="empId"/><br>
    <label v-if="empid"  style="Estyle">{{Evalid}}</label></td></tr>
    <tr>
    <td>Password:<br/>
      <!-- <input type="checkbox" @change="Echeckbox" v-model="Echeck" style="background-color:yellow"/> -->
    </td>
    <td><input type="password" @change.="passInputs()" v-model="password"/><br>
    <label v-if="crtpass"  style="Pstyle">{{Pvalid}}</label></td></tr>
    <tr><td><button style="background-color:darkblue;width:60px; height:28px"><router-link to="/" style="text-decoration:none;color:white ">Back</router-link></button></td>
    <td><button @click.prevent="checking()" style="background-color:darkblue;width:100px; height:30px; color:white">login</button></td></tr>
    <tr>
    <td></td>
    <td style="text-align:right"><router-link to="/EmpForgottenPass" target="_self" >forgotten Password</router-link></td>
    </tr>
    </table>
    </fieldset>
    
        </div>
        
        <div class="column">
    <fieldset>
        <h3>User Login</h3>
    <table>
    <tr>
    <td>Email:</td>
    <td><input type="text"  v-model="email"/><br>
    <label v-if="emailId"  style="Ustyle">{{Uvalid}}</label></td></tr>
    <tr>
    <td>Password:<br/>
      <!-- <input type="checkbox" @change="checkbox" v-model="check" style="background:yellow"/> -->
    </td>
    
    <td><input type="password"  v-model="pass"/><br>
    <label v-if="UPpass"  style="UPstyle">{{UPvalid}}</label></td></tr>
    <tr><td><button style="background-color:darkblue;;width:60px; height:28px"><router-link to="/" style="text-decoration:none;color:white ">Back</router-link>></button></td>
    <td><button @click.prevent="userData()" style="background-color:darkblue;;width:100px; height:30px; color:white">login</button></td></tr>
    <tr>
    <td> </td>
    <td style="text-align:right"><router-link to="/forgottenPass" target="_self" >forgotten Password</router-link></td>
    </tr>
    </table>
    </fieldset>
    </div>
    </form>
    </div>
   
    </body>
    </template>
    
    <script lang="ts" src="../Typescript/Login">
      
    </script>
    
    <style>
    @import '../css/LogIn.scss'
    
    
    </style>
    