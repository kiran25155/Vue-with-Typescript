<template>
    <html>
    <body>
        <slot></slot>
        <table  id="tNotification" style="border-collapse:collapse;border:1px solid black">
    <thead style="background-color:#fbec5d;height:40px">
     <th style="border:1px solid black">SNo</th>
     <th style="border:1px solid black">Job Title</th>
     <th style="border:1px solid black">Description</th>
     <th style="border:1px solid black">Action</th>
    </thead>
    <tbody >
       
        <tr class="trow" v-for="item in JobData" key="item.sNo" >
        
            <td style="border:1px solid black">{{item.sNo}}</td>
        <td style="border:1px solid black">{{item.title}}</td>
        <td style="border:1px solid black">{{item.description}}</td>
        <td style="border:1px solid black;color:blue"><a  @click="ApplyJob(item.sNo)">Apply</a></td></tr>
    
    </tbody>
   
</table>
<h1>{{getCounter(c)}}</h1>


    </body>
    </html>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Notification from '../Mixin/Notification';
export default defineComponent({
    name:'Notifications',
  mixins:[Notification],
   props:['getCounter'],
   
beforeMount(){
      
    this.callNotification();
    
}
})
</script>
<style scoped>
  @import '../css/Notifications.scss'
</style> 

