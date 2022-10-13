
import UpdateApplicationStatus from '../components/UpdateApplicationStatus.vue';
import { defineComponent } from 'vue'
import sendPost from '../components/sendPost.vue';
import GetPostData from '../components/GetPostData.vue'
import Emp from '../Mixin/Emp';
import axios from 'axios';

export default defineComponent({
  components: { sendPost,GetPostData,UpdateApplicationStatus },
   name:'EmpDetails',
   mixins:[Emp],
  
    methods:{
        createPost():void{
          this.update=false,
          this.bool=true,
          this.getdata=false
        },
        GetData():void{
          this.update=false,
       this.getdata=true,
       this.bool=false
        },
        updateStatus():void{
          
         this.update=true,
       this.getdata=false,
       this.bool=false 
        this.getcount
       },
      async getCounter(){
          // let result: any = await axios.get(`http://localhost:3000/AppicantStatus`);
          //   this.trackApplication = result.data;
          //   for (let App of this.trackApplication) {
          //       this.UpdateApplication = App;
          //       if (this.UpdateApplication.Status == "") {
          //           this.count++;
          //       }
          //   }
          //   if(this.count==0){
          //     this.UserAlert=false
          //   }
          //   else{
          //     this.UserAlert=true
          //   }
        },
        // getcount(c:number) {
        //  this.count=c;
        //  if(this.count==0){
        //       this.UserAlert=false
        //     }
        //     else{
        //       this.UserAlert=true
        //     }
        // }
     },  
     beforeMount() {
      // this.getCounter();
     
     }
     })