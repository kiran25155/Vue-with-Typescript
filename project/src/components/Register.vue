<template>
  <!DOCTYPE html>
  <html>
<head>
<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
</head>
   

<fieldset style="background-color:white;border:2px solid red " class="reg">
<h1  style="text-align:center;color:#8B0000" >Register</h1>
<form  name="f1" @submit.prevent="validate()" >
<table class="reg" style="background-color:white" >

<tr>
<td>
Name:
</td>
<td>
<input type="text" placeholder="Name" v-model="Name" Id="Name"/><label style="color:red">*</label>

</td>
</tr>
<tr>
<td>
Mobile Number:
</td>
<td>
<input type="text" @change.prevent="mobInputs()"   placeholder="Mobile Number" v-model="MobileNum" Id="MobileNum"/><label style="color:red">*</label><br>
<label Id="invalid" v-if="seen" v-bind:style="color">{{Mvalid}}</label>
</td>
</tr>

<tr>
<td>
Email:
</td>
<td>
<input type="text" @change="emailInputs()" placeholder="email" v-model="email" Id="email"/><label style="color:red">*</label><br>
<label Id="invalid" v-if="Eseen" v-bind:style="Estyle">{{Evalid}}</label>
</td>
</tr>

<tr>
<td>
Date of Birth:
</td>
<td>
<input type="date" style="width:140px;font-size:15px ;scrollbar-highlight-color: #2916F5;" v-model="dob" Id="dob"/>  &emsp; &nbsp;&nbsp; &emsp;<label style="color:red">*</label>
</td>
</tr>
<tr>
<td>
Gender:
</td>
<td><label >
<input type="radio" name="gender"  v-model="picked" value="male"/>male
<input type="radio" name="gender"   v-model="picked" Id="female" value="female"/>female  &nbsp; &nbsp;  &emsp;<label style="color:red">*</label>
</label>
</td>
</tr>

<tr>
<td>
Qualification:
</td>
<td>
<label ><input type="checkbox" style="accent-color:#2916F5;" class="Degree" v-model="Degree" value="B.tech"/></label>B.tech
<input type="checkbox" class="Degree" style="accent-color:#2916F5;" v-model="Degree"  value="BSc"/>Bsc
<input type="checkbox" class="Degree" style="accent-color:#2916F5;" v-model="Degree"  value="MBA"/>MBA <label style="color:red">*</label>
</td>
</tr>
<tr>
<td>
Country:
</td>
<td>
  
<select v-model="country" Id="country">
  
<option  value="select">select</option>
<option value="India">India</option>
<option value="Us">Us</option>
<option value="Cannada">Cannada</option>
<option value="Uk">Uk</option>
<option value="Austrila">Austrila</option>
<option value="Germany">Germany</option>
<option value="fernch">Fernch</option>

</select>


</td>
</tr>
<tr>
<td>
Create Password:
</td>
<td>
<input type="text" @change="passInputs()" v-model="password" Id="password"/><label style="color:red">*</label><br>
<span Id="invalid" v-if="Pseen" v-bind:style="Pstyle">{{Pvalid}}</span>

</td>
</tr>

<tr>
<td>
Confirm Password:
</td>
<td>
<input type="text" @change.prevent="cnfInputs" v-model="confirmpassword" Id="confpassword"/><label style="color:red">*</label><br>
<span Id="invalid" v-if="CPseen" v-bind:style="CPstyle">{{CPvalid}}</span>

</td>
</tr>

<tr>
<td>
Address:</td>
<td>
<textarea id="add" v-model="add" style="height:100px" row="8" cols="26"></textarea>

</td>
</tr>

<tr><td></td></tr>
<tr>
<!-- <td></td> -->
<td  colspan="2" >

<button class="btn-reg" style="background-color:#228B22;color:white">Register</button><br><br>

<router-link to="/" style="width=250px; height=50px; background-color:#228B22;color:white">back</router-link>
&nbsp;
<small style="color:#2916F5">if already registered</small><br> &emsp; &emsp; &emsp;

<a href="/login" style="color:#2916F5" target="_self">Log In</a>

</td></tr>
</table>
</form>
</fieldset>

</html>
</template>
  
  <script lang="ts" src="../Typescript/Register">
  
  </script>
  <style scoped>
  
  fieldset.reg{
    margin-top: -29px;
   
      max-width: 400px;
    margin-left: auto;
    margin-right: auto;
   
 
 }
 table.reg{
  text-decoration: darkblue;
  font-size: 20px;
  margin-top:10px;
  
 }

 input[type='text'],
 
 input[type="password"],
 input[type="email"]{
  width: 200px;
 
  border-radius: 15px;
  border-color:#228b22;
  border-top:#228b22;
  border-left: none;
  border-right: none;
  height: 30px;
  background-color: #ffff66;
  
  font-size: medium;
  background-color:white;
 }
 input[type="radio"]{
 
  outline: none;
  height: 15px;
  width:15px;
  box-shadow:0 0 0 2px #228b22;
  border-radius: 50%;
  
 }
 input[type="radio"]:checked{
  background-color:rgb(31, 31, 207);
  box-shadow:0 0 0 2px red;
 }
 input[type="checkbox"]{
  box-shadow:0 0 0 1px #228b22;
  outline: none;
  height:17px; 
  width:17px
 }
 input[type="date"]{
  background-color: rgb(27, 156, 27);
  padding: 7px;
  /* position: absolute; */
  color:white;
  border: none;
  outline: none;
  width:80px;
  border-radius: 20px;
 }
 input[type="date"]:focus{
  background-color: rgb(27, 156, 27);
  
 }
 ::-webkit-calender-picker-indicator{
  border-color: #F39C12;
  background-color: #ffff66;
  border-radius: 3px;
 
  cursor: pointer;
 }

 select{
  border-top:none;

  border-left: none;
  border-right: none;
  border-color:#228b22;
 }
 textarea{
  
  border-color:#228b22;
  border-radius: 16px;
  border-width: 2px;
 }
 textarea:focus{
  outline: none;
 
  background-color:  #e4ffff;
  border-color: red;
 }
 input:focus{
  outline: none;
  border-top:none;
  border-left: none;
  border-right: none;
  background-color: #e4ffff;
 border-color: red;
 }
 .btn-reg{
  min-height: 50px; 
  min-width: 380px;
  
 }
 /* dropdown:hover .dropbtn */
 select{
  position: relative;
  height: 30px;
  width: 200px;
  font-size: large;
   background-color:white;
   border-radius:68px;
   border-width: 2px;
 
}
select:focus{
outline: none;
background-color:  #e4ffff;
border-color: red;
}
textarea{
  font-size: 20px;
}

div.dropdown-content{
color:blue;
accent-color:#F39C12;
}
label{
  font-size: 22px;
}


/* @media screen and (min-width:200px) and (max-width:420px) {

 input[type='text'],
 
 input[type="password"],
 input[type="email"]{
  max-width: 100px;

  
  font-size: small;
  background-color:white;
 }
 input[type="radio"]{
  
  height: 10px;
  width:10px;
  
 }
 fieldset.reg{
  max-width:200px;
  min-height: 500px;
  max-height: 1500px;
 }
 table.reg{
  text-decoration: darkblue;
  font-size: 15px;
  margin-top:5px;
  min-height: 100px;
  max-width: 200px;
  max-height:500px;
  
 }
 input[type="date"]{
 font-size: small;
  
  max-width:100px;

 }
 textarea{
  font-size:5px;
  max-width:100px;
  max-height: 50px;
}
select{
max-width:100px;
}
input[type="checkbox"]{
height:10px; 
width:10px
}
.btn-reg{
min-width:10px;
min-height:3px;
}
} */
  </style>
  