
import { defineComponent } from 'vue';
import axios from 'axios';


export default defineComponent({
  name: 'LogIn',

  data () {
    return {
      Echeck:false,
      Etype:'password',
      check:false,
      type:'password',
      empId: '',
      empid: false,
      Estyle: {
        color: 'red'
      },
    
      Evalid: '',

      password: '',
      crtpass: false,
      Pstyle: {
        color: 'red'
      },
      Pvalid: '',

      email: '',
      emailId: false,
      Ustyle: {
        color: 'red'
      },
      Uvalid: '',

      pass: '',
      UPpass: false,
      UPstyle: {
        color: 'red'
      },
      UPvalid: '',
      Applicate:[],
      ApplicateData:{
        Name: '',
        MobileNum: '',
        email: '',
        dob: '',
        gender: '',
        Degree: '',
        country: '',
        password: '',
        confpassword: '',
        add: ''
      }
    }
  },
  methods: {

    changInpts: function () {
      let reg = /^Em\d{4}$/
      if (this.empId == '') {
        this.empid = true,
        this.Estyle.color = 'red',
        this.Evalid = 'Invalid'
      } else if (reg.test(this.empId)) {
        this.empid = true,
        this.Estyle.color = 'green',
        this.Evalid = 'valid'
      } else {
        this.empid = true,
        this.Estyle.color = 'red',
        this.Evalid = 'Invalid'
      }
    },
    passInputs () {
      let regExp = /^[A-Z](?=.*[!\@\#\$\%\^\&])(?=.*[a-z])(?=.*[0-9]).{7,}$/

      if (this.password == '') {
        this.crtpass = true,
        this.Pstyle.color = 'red',
        this.Pvalid = 'Invalid'
      } else if (regExp.test(this.password)) {
        this.crtpass = true,
        this.Pstyle.color = 'green',
        this.Pvalid = 'valid'
      } else {
        this.crtpass = true,
        this.Pstyle.color = 'red',
        this.Pvalid = 'Invalid'
      }
    },

    checking () {
      if ((this.empId == "Em1234") && (this.password == "Kiran@1234")) {
        window.location.href = '/Emp'
        alert('Sucessfully login')
      } else {
        alert('you details are not matched with our record')
      }
    },
    async userData() {
     
      let results = await axios.get(
        `http://localhost:1111/Registeration/get/${this.email}`
      );
      this.ApplicateData=results.data;
    
      if(this.ApplicateData.email==this.email&&this.ApplicateData.password==this.pass){
        console.log(this.ApplicateData);
        console.log(results.data);
        alert("sucessfully login");
        localStorage.setItem('email',this.email)
        window.location.href='/user'
      }
      else{
        console.log(this.ApplicateData.email==this.email&&this.ApplicateData.password==this.pass)
        console.log("App"+this.ApplicateData);
        console.log(this.Applicate);
        console.log(results.data);
        console.log(this.ApplicateData.email+" "+this.email+" "+this.ApplicateData.password+" "+this.pass);

        alert('you details are not matched with our record')
      }
      
     
      console.log(this.email+" "+this.pass)
      console.log(results.data.length)
      console .log(results.data)
    },
     checkbox(){
      if(this.check==true){
           this.type='text';
      }
      else{
        this.type='password';
      }
     },
     Echeckbox(){
      if(this.Echeck==true){
           this.Etype='text';
      }
      else{
        this.Etype='password';
      }

      
     
     }


  }
})