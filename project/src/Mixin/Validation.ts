import Register from '../Mixin/Register'
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    mixins:[Register],
methods: {
    
    async validate () {
      let v:boolean|undefined
      let msg:string|undefined
      let degree:string=''
           let regexp = /^[6-9]\d{9}$/
      if (this.MobileNum == '') {
        this.seen = true,
        this.Mvalid = 'invalid',
        this.color.color = 'red' 
      } else if (regexp.test(this.MobileNum)) {
        this.seen = true,
        this.Mvalid = 'valid',
        this.color.color = 'green'
      } else {
        this.seen = true,
        this.Mvalid = 'invalid',
        this.color.color = 'red'
      }

      let r:any = /^([a-zA-Z0-9]+)@([a-z A-z]+)\.([a-z A-Z]{2,5})$/
      if (this.email == ' ') {
        this.Eseen = true,
        this.Evalid = 'invalid',
        this.Estyle.color = 'red'
      } else if (r.test(this.email)) {
        this.Eseen = true,
        this.Evalid = 'valid',
        this.Estyle.color = 'green'
      } else {
        this.Eseen = true,
        this.Evalid = 'invalid',
        this.Estyle.color = 'red'
      }

      let regExp:any = /^[A-Z](?=.*[!\@\#\$\%\^\&])(?=.*[a-z])(?=.*[0-9]).{7,}$/
      if (this.password == '') {
        this.Pseen = true,
        this.Pvalid = 'Password consist should be 8 charater.First letter Should be Capital.atleast one lower case character.atleast one special character.atleast one Numeric value',
        this.Pstyle.color = 'red'
      } else if (regExp.test(this.password)) {
        this.Pseen = true,
        this.Pvalid = 'valid',
        this.Pstyle.color = 'green'
      } else {
        this.Pseen = true,
        this.Pvalid = 'Password consist should be 8 charater.First letter Should be Capital.atleast one lower case character.atleast one special character.atleast one Numeric value',
        this.Pstyle.color = 'red'
      }

      if (this.confirmpassword == '') {
        this.CPseen = true,
        this.CPvalid = 'Password consist should be 8 charater.First letter Should be Capital.atleast one lower case character.atleast one special character.atleast one Numeric value',
        this.CPstyle.color = 'red'
      } else if ((this.password) == (this.confirmpassword)) {
        this.CPseen = true,
        this.CPvalid = 'valid',
        this.CPstyle.color = 'green'
      }

      if (this.Name == '' || this.MobileNum == '' || this.country == '' || this.password == '' || this.dob == '' || this.picked == ''||this.country=='select' ) {
        alert('mandatry fields are required to fill')

        v = false
      } else {
        for(let degre of this.Degree){
              degree=degree+degre+" "
              console.log(degree)
        }
        console.log(degree)
        console.log("hi")
        let r=await axios.get(`http://localhost:1111/Registeration/get/${this.email}`)
         this.ApplicateData=r.data;
       
        
         if(this.ApplicateData.email==null){
          
          let results:any = await axios.post(`http://localhost:1111/Registeration/addApplicate`, {

            'name': this.Name,
            'mobile_Number': this.MobileNum,
            'email': this.email,
            'dob': this.dob,
            'gender': this.picked,
            'qualification': degree,
            'country': this.country,
            'password': this.password,
            'confpassword': this.confirmpassword,
            'address': this.add
          })
          this.ErrorMessage=results.data;
          if(this.ErrorMessage.message==null){
            alert('Registration Done Successfully')
          window.location.href = '/'
          localStorage.setItem('Applicate_Records', JSON.stringify(results.data))
          v = true
          }
          else{
            alert(this.ErrorMessage.message);
            v = false;
          }
         }
          
          else {
           alert("Your are already Registered Kindly Login")
              }
               
         }
      return v;
    }

  }
})