<template>
    <body>
        <slot></slot>
        <table id="AppStatus" style="border-collapse:collapse">
            <thead style="background-color:#fbec5d;height:50px">
              <tr >
                <th >Applicant Name</th>
                <th >Email</th>
                <th >Mobile Number</th>
                <th >Degree</th>
                <th >Gender</th>
                <th >Job Role</th>
                <th >Status</th>
                <th > Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="AppStatus" v-for="item in trackApplication" :key="sNo">
              <td >{{item.name}}</td>
              <td >{{item.email}}</td>
              <td >{{item.mobileNumber}}</td>
              <td >{{item.degree}}</td>
              <td >{{item.gender}}</td>
              
              <td >{{item.title}}</td>
              <td  v-bind:style="[item.status!='Reject'?item.status!='Accept'?item.status=='offer letter'?{color:'#52BE80'}:{color:'#eed202'}:{color:'blue'}:{color:'red'}]">{{item.status}}</td>
              <td ><button @click="withDraw(item.sNo)" style="background-color:crimson;color:aliceblue">Withdraw</button></td>
              </tr>

            </tbody>
        </table>

    </body>
</template>
<script lang="ts" src="../Typescript/TrackMyApplication">
  
</script>
<style>
  @import '../css/TrackMyApplication.scss'
</style>
