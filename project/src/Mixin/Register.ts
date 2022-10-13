import { defineComponent } from 'vue';


export default defineComponent({


  data ():any {
    return {
    
      Name:'',

      MobileNum: '',
      seen: false,
      color: {
        color: 'red'
      },
      Mvalid: '',

      email: '',
      Eseen: false,
      Estyle: {

        color: 'red'
      },
      Evalid: '',

      dob: '',

      picked: '',
      Degree: [],
      country: '',
      password: '',
      Pseen: false,
      Pstyle: {
        color: 'red'
      },
      Pvalid: '',
      confirmpassword: '',
      CPseen: false,
      CPstyle: {

        color: 'red'
      },
      CPvalid: '',
      add: '',
      ApplicateRecord:[],
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
      },
      ErrorMessage:{
        statusCode:'',
        message:'',
        timestamp:''
      }
    }
  },
  methods: {
    mobInputs: function () {
      let regexp:any = /^[6-9]\d{9}$/
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
    },
   emailInputs: function () {
      let r = /^([a-zA-Z0-9]+)@([a-z A-z]+)\.([a-z A-Z]{2,5})$/

      if (this.email == ' ') {
        this.Eseen = true,
        this.Evalid = 'invalid',
        this.Estyle.color = 'red'
      } else if (r.test(this.email)) {
        this.Eseen = true,
        this.Evalid = 'valid'
        this.Estyle.color = 'green'
      } else {
        this.Eseen = true,
        this.Evalid = 'invalid',
        this.Estyle.color = 'red'
      }
    },
    passInputs: function () {
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
    },
   cnfInputs: function () {
      if (this.confirmpassword == '') {
        this.CPseen = true,
        this.CPvalid = 'Password consist should be 8 charater.First letter Should be Capital.atleast one lower case character.atleast one special character.atleast one Numeric value',
        this.CPstyle.color = 'red'
      } else if (this.password == this.confirmpassword) {
        this.CPseen = true,
        this.CPvalid = 'valid',
        this.CPstyle.color = 'green'
      } else {
        this.CPseen = true,
        this.CPvalid = 'Password consist should be 8 charater.First letter Should be Capital.atleast one lower case character.atleast one special character.atleast one Numeric value',
        this.CPstyle.color = 'red'
      }
    }
  }
})