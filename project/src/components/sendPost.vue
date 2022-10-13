<template>
    <body>
        <fieldset class="postJob" v-if="seen" style="text-align: center;"> 
        <h2 class="postTitile" style="color: #00008B;">Create Post</h2>
        <form> 
<table id="postJob"  v-if="seen">
    <tr >
        <td>
            <h4>Job Title:</h4>
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
        <td><button  @click.prevent="posts()" id="post" style="width:200px; height:40px ; background-color:#05770d;color:#fbfaf7">post</button></td>
    </tr>
</table>

</form>
</fieldset>
 </body>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    name:'SendPost',
     props: ['seen'],
    
    data() {
        return{
         EditPost:
        {
              title:'',
            description:''
        },
        getPost:{
            title:'',
            description:''
        }
        }
    },
      
    methods:{
     async posts()
     {
        let msg :any|null;
               let getPosts=await axios.get(`http://localhost:1111/Post/getAllPosts`);
       for(let posts of getPosts.data){
        this.getPost=posts;
       if(this.getPost.title==this.EditPost.title){
       msg= "You are already create post on this title";
       break;
       }
     }
     if(msg==null){
        let result:any=await axios.post(`http://localhost:1111/Post/createPost`,{
    'title':this.EditPost.title,
    'description':this.EditPost.description
  })
  alert("Post Created Sucessfully")
  window.location.href='http://localhost:8085/Emp';
     }
     else{
        alert(msg);
     }
     
    }
    }
})
</script>
<style scoped>
   @import '../css/sendPost.scss'
</style>
