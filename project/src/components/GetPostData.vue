<template>
    <body > 
       
        <fieldset id="postJob" v-if="Useen" class="update" style="text-align: center;"> 
        <h2 id="postTitile" style="color: #00008B;">Update Post</h2>
        <form> 
<table id="postJobs"  v-if="Useen"   class="update" style="max-height:150px">
    <tr >
        <td>
           <h4> Job Title:</h4>
        </td>
        <td >
            <input type="text" v-model="EditPost.title">
        </td>
    </tr>
    <tr>
       <td ><h4>Description:</h4></td> 
       <td>
        <textarea v-model="EditPost.description" style="height:100px" row="8" cols="20"></textarea>
       </td>
    </tr>
    <tr>
        <td ></td>
        <td><button  @click.prevent="update()" id="post" style="width:170px; height:40px ; background-color:#05770d;color:#fbfaf7">Update</button></td>
    </tr>
</table>

</form>
</fieldset>
<br>
<slot></slot>
        <table id="updatePost" style="border-collapse: collapse">
            
        <thead style="background-color:#fbec5d; height:50px">
            <tr>
        <th style="width:80px">SNo</th>
        <th >Job Title</th>
        <th style="width:400px">Description</th>
        <th >Action</th>
    </tr>
        </thead>
        <tbody >
            <tr class="post" v-for="item in JobData" :key="item.sNo">
             <td>{{item.sNo}}</td>
             <td >{{item.title}}</td>
             <td >{{item.description}}</td> 
            <td >
                
                <button @click="editPost(item.sNo)" style="background-color:khaki;">Update</button>&nbsp;
            <button @click="deletePost(item.sNo)" style="background-color:firebrick;color:white;">Delete</button></td>
            </tr>
        </tbody>
        
    </table>
    </body>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
    name:'GetPostData',
    data(){
        return{
            n:0,
           Useen:false,
       JobData:[],
       EditPost:{
        title:'',
        description:''
       },
       edit:{
        title:'',
        description:''
       }
    }
    },
    methods:{
        async getData(){
       let results:any=await axios.get(`http://localhost:1111/Post/getAllPosts`);
          this.JobData=results.data;
     },
     async deletePost(id:number){
    let results:any=await axios.delete(`http://localhost:1111/Post/delete/${id}`);
        alert("Post deleted Sucessfully");
        this.getData();
   },
       async editPost(id:number){
        this.Useen=true
    let result:any=await axios.get(`http://localhost:1111/Post/get/${id}`);
             this.EditPost=result.data;
            this.n=id;
            console.log(result.data)

},
async update(){
    
  let r:any=await axios.get(`http://localhost:1111/Post/get/${this.n}`)
        this.edit=r.data;
       let result=await axios.put(`http://localhost:1111/Post/updatePost/${this.n}`,{
    'title':this.edit.title,
    'description':this.EditPost.description
  })
  console.log(result)
  alert("Post Updated sucessfully")
  this.getData()
  this.EditPost.description=""
  this.EditPost.title=''
  this.Useen=false
}
},
    beforeMount():void{
        this.getData()
      },
})
</script>
<style scoped>
@import '../css/GetPost.scss'
</style>
