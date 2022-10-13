
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    data() {
        return{
          
                trackApplication:[],
    Application:{
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
        async TrackApplication(){
            
            
          let email:string|null=localStorage.getItem('email')
            let result:any=await axios.get(`http://localhost:1111/AppliacteStatus/get/${email}`);
            this.trackApplication=result.data;
            console.log(this.trackApplication)
            

        },
        async  withDraw(id:number){
            let email:string|null=localStorage.getItem('email')
            let result:any=await axios.delete(`http://localhost:1111/AppliacteStatus/delete/${id}`)
            alert("Application Withdrawn Sucessfully");
            this.TrackApplication();
}
    },
    beforeMount(){
        this.TrackApplication();
    }
})