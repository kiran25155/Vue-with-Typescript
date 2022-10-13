<template>
    <head>
     
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
      
          <div class="row1">
          <a @click=" createPost()">Send Post</a>
          <a @click=" updateStatus()" >Update Applicate Status
          <button class="button1" >
            <span class="material-symbols-outlined">group_add</span>
            <span class="count1" v-if="UserAlert" style="color:red">{{count}}</span>
          </button >
          </a>
          <a @click.prevent="GetData()">Update Post</a>
      <a href="/login">Log Out</a>
      </div> 
  <br>
  <send-post  :seen="bool"></send-post>
   <UpdateApplicationStatus  v-if="update"><h1 style="color:orangered; text-align:center">Update Applicate status</h1></UpdateApplicationStatus>
   <GetPostData v-if="getdata"><h1 style="color:red;text-align:center">Update Post Details</h1></GetPostData>
   
  </template> 
  <script lang="ts" src="../Typescript/EmpDetails">
  
  </script>
  <style scoped>
  @import '../css/Emp.scss'
  </style>
  