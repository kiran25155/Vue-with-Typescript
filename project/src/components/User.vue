<template>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
<div class="row">
    <a @click.prevent="TrackApplication()" >Track My Application</a>
   
   <a @click.prevent="callNotification()">Notifications
    
   <button class="button"  >
    <span class="material-symbols-outlined">
circle_notifications
</span>
<span class="count" v-if="alert">{{count}}</span >
 
</button>
</a>
    <a @click="Logout" href="/login">Log Out</a>
</div>

  

  <Notifications :getCounter="getcount" v-if="tsee" ><h1 style="color:red; text-align:center">Notifications</h1></Notifications>
  <TrackMyApplication style="text-align:center;" v-if="Tseen"><h1 style="color:red">Track My Application</h1></TrackMyApplication>
</body>
</html>
</template>
<script lang="ts" src="../Typescript/User.ts">

</script>
<style scoped>
@import '../css/user.scss'
</style>

