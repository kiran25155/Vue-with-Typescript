import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
    data() {
        return{
          backgroundcolor:'red',
        c:0,
        JobData:[],
       job:{
        sNo:'',
        title:'',
        description:''
       },
       Status:'',
       ApplicantDatas: [
      {
        name: '',
        mobile_Number: '',
        email: '',
        dob: '',
        gender: '',
        qualification: '',
        country: '',
        password: '',
        confpassword: '',
        address: '',
        sNo: ''
      }
    ],
        ApplyDetails:{
        name: '',
        mobile_Number: '',
        email: '',
        dob: '',
        gender: '',
        qualification: '',
        country: '',
        password: '',
        confpassword: '',
        address: '',
        sNo: ''
      },
      get:[{
      name: '',
      mobileNumber: '',
      email: '',
      degree: '',
      gender: '',
      title: '',
      sNo: ''
      }],
      getDetails:{
        name: '',
        mobileNumber: '',
        email: '',
        degree: '',
        gender: '',
        title: '',
        sNo: ''
      },
      Email:'',
      ErrorMessage:{
        statusCode:'',
        message:'',
        timestamp:''
      }
        }
    },
    methods:{
      
     async callNotification(){
      
    let e:any=localStorage.getItem('email')
    this.Email=e
      let c1=0;
      let c2=0;
     let result=await axios.get(`http://localhost:1111/Post/getAllPosts`);
     this.JobData=result.data;
     
     
      let Apply:any=await axios.get(`http://localhost:1111/AppliacteStatus/get/${this.Email}`)
            
            this.ErrorMessage=Apply
            if(this.ErrorMessage.message==null){
              this.get=Apply.data
            }
            else{
              alert("please login and apply");
            }
            for(let jobs of this.JobData){
             c1++;
             
             this.job=jobs;
            for(let getData of this.get){
             this.getDetails=getData
           
              if(this.job.title==this.getDetails.title){
                 c2++;
                 console.log(this.job.title+" "+this.getDetails.title)
              }
              else{
                 console.log(this.job.title+" "+this.getDetails.title)
                
                 
              }
             }
          }
          this.c=c1-c2;
       
        
          

     },
     async ApplyJob(id:number){
    
               let title:string=''
        let result:any= await axios.get(`http://localhost:1111/Post/get/${id}`);
        this.job=result.data;
        console.log(this.job);
        console.log(this.job.title)
        let email:any=localStorage.getItem('email')
        this.Email=email;
        let userdata:any=await axios.get(`http://localhost:1111/Registeration/get/${this.Email}`)
        this.ApplyDetails=userdata.data;
        console.log( this.ApplyDetails) 
        // for(let appDetails of this.ApplicantDatas){
        //   this.ApplyDetails=appDetails;
        //   console.log(this.ApplyDetails.name+'hi')
        // }
   let Apply:any=await axios.get(`http://localhost:1111/AppliacteStatus/get/${this.Email}`)
           this.get=Apply.data
           
           console.log(this.get);
           for(let getData of this.get){
            this.getDetails=getData
            title=this.getDetails.title
            if(title==this.job.title){
                break;
            }
           }
        if(title==this.job.title){
            alert(" you are Already Applied for Position")
        }
        else{
         let ApplicantStatus:any=await axios.post(`http://localhost:1111/AppliacteStatus/newAppliacteStatus`,{

        'name':this.ApplyDetails.name,
        'mobileNumber': this.ApplyDetails.mobile_Number,
        'email': this.ApplyDetails.email,
        'degree': this.ApplyDetails.qualification,
        'gender': this.ApplyDetails.gender,
        'title':this.job.title,
        'status':this.Status

    })
    console.log(this.ApplyDetails.name+" "+this.job.title)
    alert("Sucessfully Applied")
        --this.c
        }    
 }
 
},
})