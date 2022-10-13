<template>
    <body>
  <form>
  <fieldset v-if="update" class="update" style="max-height:300px">
      <h3>Update Status</h3>
      <table v-if="update" class="update" style="max-height:300px;">
        <tr>
          <td>Update Status</td>
          <td><input type='text' v-model="UpdateApplication.status" v-bind:style="Ustyle"/></td>
        </tr>
        <tr>
          <td></td>
          <td><button @click.prevent="updateStatus()" style="background-color:green; color:aliceblue">Update</button></td>
        </tr>
      </table>
    </fieldset>
    </form>
    <slot></slot>
  <table id="tupdate" style="border-collapse:collapse">
      <thead style="background-color:#fbec5d;border-radius:10px; height: 60px;">
                <tr  >
                  <th >Applicant Name</th>
                  <th>Email</th>
                  <th >Mobile Number</th>
                  <th>Degree</th>
                  <th >Gender</th>
                  <th >Job Role</th>
                  <th >Status</th>
                  <th >Action</th>
                </tr>
              </thead>
              <tbody >
                <tr class="Application" v-for="item in trackApplication" :key="item.sNo" >
                <td>{{item.name}}</td>
                <td  >{{item.email}}</td>
                <td >{{item.mobileNumber}}</td>
                <td >{{item.degree}}</td> 
                <td >{{item.gender}}</td>
                
                <td    >{{item.title}}</td>
                <td  v-bind:style="[item.status!='Reject'?item.status!='Accept'?item.status=='offer letter'?{color:'#52BE80'}:{color:'#eed202'}:{color:'blue'}:{color:'red'}]">{{item.status}}</td>
                <td ><button @click="editUpdate(item.sNo)" style="background-color:green;max-width=30px; color:aliceblue">Update</button></td>
                </tr>
  
              </tbody>
      <tbody> 
  
      </tbody>
  </table>
  <!-- <h1>{{getCounter(c)}}</h1> -->
  </body>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios';
  export default defineComponent({
    name:'UpdateApplicationStatus',
    data() {
      return{
        update: false,
        trackApplication:[],
        UpdateApplication: {
                name: "",
                mobileNumber: "",
                email: "",
                degree: "",
                gender: "",
                title: "",
                status: "",
                sNo: ""
            },
            n:0,
            Ustyle: {
                color: ""
            },
            ErrorMessage:{
        statusCode:'',
        message:'',
        timestamp:''
      }

      }
    },
    methods:{
      async ApplicatesData() {
            let result: any = await axios.get(`http://localhost:1111/AppliacteStatus/getAllAppStatus`);
            this.ErrorMessage=result.data;
            if(this.ErrorMessage.message==null){
              this.trackApplication = result.data;
            }
          else{
            alert(this.ErrorMessage.message);
          }
      },
      async editUpdate(id:number) {
        this.update = true;
            let result: any = await axios.get(`http://localhost:1111/AppliacteStatus/getById/${id}`);
            this.UpdateApplication = result.data;
            this.n = id;
            console.log(id);
            
        },
        async updateStatus() {
            this.update = false;
            let result: any = await axios.put(`http://localhost:1111/AppliacteStatus/update/${this.n}`,{
                "name": this.UpdateApplication.name,
                "mobileNumber": this.UpdateApplication.mobileNumber,
                "email": this.UpdateApplication.email,
                "degree": this.UpdateApplication.degree,
                "gender": this.UpdateApplication.gender,
                "title": this.UpdateApplication.title,
                "status": this.UpdateApplication.status
            });
            this.ApplicatesData();
        }
    },
    beforeMount() {
        this.ApplicatesData();
        
    }
  })
  </script>
  
   
  
  <style scoped>
  @import '../css/UpdateApplicationStatus.scss'
  </style>
  