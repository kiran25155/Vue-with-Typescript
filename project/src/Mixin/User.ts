import { defineComponent } from 'vue'
import axios from 'axios';

import Notification from '@/Mixin/Notification';
export default defineComponent({
    mixins:[Notification],
    data() {
        return{
       count:0,
       tsee:false,
       Tseen:false,
       alert:false
        }
      
    },
    methods:{
        callNotification(){
            this.tsee=true;
            this.Tseen=false;
            this.getcount
        },
        TrackApplication(){
            this.tsee=false;
            this.Tseen=true;
        },
        Logout(){
       localStorage.setItem("email"," ");
      
     
        },
      async counter(){
        let c:number=0;
        let c1:number=0;
        let result=await axios.get(`http://localhost:1111/Post/getAllPosts`);
         this.JobData=result.data;
         let email=localStorage.getItem('email')
         let Apply:any=await axios.get(`http://localhost:1111/AppliacteStatus/get/${email}`)
               this.get=Apply.data
               for(let jobs of this.JobData){
                c++;
                console.log(c)
                this.job=jobs;
               for(let getData of this.get){
                this.getDetails=getData
              
                 if(this.job.title==this.getDetails.title){
                    c1++;
                    console.log(this.job.title+" "+this.getDetails.title)
                 }
                 else{
                    console.log(this.job.title+" "+this.getDetails.title)
                   
                    
                 }
                }
             }
             this.count=c-c1;
    
            console.log(this.count)
            if(this.count==0){
                this.alert=false
            }
            else{
                this.alert=true 
            }

       },
       getcount(c:number){
        this.count=c;
        if(this.count==0){
            this.alert=false
        }
        else{
            this.alert=true 
        }
       },
       check(){
        if(localStorage.getItem('email')==null){
        window.location.href="/:catchAll(.*)";
            
       }
       else{
        window.location.href="/user";
       }
    }

    },
 

   async beforeMount(){
    // this.check();
   this.counter();
   }
   
    
})