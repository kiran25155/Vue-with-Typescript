 
import { defineComponent } from 'vue'
import axios from 'axios';
export default defineComponent({
    name:'UpdateApplicationStatus',
    data() {
        return{
          n:0,
          update:false,
            trackApplication:[],
        Ustyle:{
          color:''
        },
      UpdateApplication:{
      Name: '',
      MobileNum: '',
      email: '',
      Degree: '',
      gender: '',
      Title: '',
      Status:'',
      id: ''
            }
        }
    },
    methods:{
      
       async ApplicatesData(){
         let result:any=await axios.get(`http://localhost:3000/AppicantStatus`)
            this.trackApplication=result.data
          
        },
       
        async editUpdate(id:number){
          this.update=true;
       let result:any=await axios.get(`http://localhost:3000/AppicantStatus/`+id)
       this.UpdateApplication=result.data;
       this.n=id
        },
        async updateStatus(){
        this.update=false
          let result:any=await axios.put(`http://localhost:3000/AppicantStatus/`+this.n,{
        'Name':this.UpdateApplication.Name,
        'MobileNum':this.UpdateApplication.MobileNum,
        'email':this.UpdateApplication.email,
        'Degree':this.UpdateApplication.Degree,
        'gender':this.UpdateApplication.gender,
        'Title':this.UpdateApplication.Title,
        'Status':this.UpdateApplication.Status
        })
       
         this.ApplicatesData();
        }
    },
    beforeMount(){
       this.ApplicatesData();
      
       
    }
   
})