<template>
  <div class="validaciones">
    <h1>Viulidate</h1>
     <form @submit.prevent="sub">
      <div class="row justify-content-center">
     

     
       <div class="col-md-6">
      <!--email-->
       <input class="form-control" v-model="$v.email.$model" type="email" 
        :class="{'is-invalid':$v.email.$error}"
       >
       <p class="text-danger" v-if="!$v.email.required">
         Campo requerido
       </p>
        <p class="text-danger" v-if="!$v.email.email">
          email invalido
       </p>
      
  <!--password-->
      
       <input class="form-control my-3" v-model="$v.password.$model" type="password" 
        :class="{'is-invalid':$v.password.$error}"
       >
      <p class="text-danger" v-if="!$v.password.minLength" >minimo 6 caracteres</p>


        <input class="form-control" v-model="$v.password2.$model" type="password" 
        :class="{'is-invalid':$v.password2.$error}"
       >
       <p class="text-danger" v-if="!$v.password2.sameAsPassword">Las contraseñas no coinciden</p>
       </div>

      
      

   
     </div>
      <button type="submit" :disabled="$v.$invalid">Enviar</button>
     </form>
   
  </div>
</template>

<script>
import { required, email,sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  name:'Validaciones',
  data(){
    return{
      email:'',
      password:'',
      password2:''
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password:{
      required,
      minLength:minLength(6)
    },
      password2:{
      required,
      sameAsPassword:sameAs('password')
    }
  },
  methods:{
    sub(){
      console.log('submit');
      this.$v.$touch()
      if(this.$v.$invalid){
        console.log('datos invalidos');
        
      }else{
        console.log('datos correctos',this.$v.email.$model,this.$v.password.$model);
        
      }
    }
  }

}
</script>
