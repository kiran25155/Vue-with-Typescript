import { defineComponent } from 'vue';
import Register from '../Mixin/Register'
import Validation from '../Mixin/Validation'
export default defineComponent({

  name: 'Register',
  mixins:[
    Register,
    Validation
  ]


})