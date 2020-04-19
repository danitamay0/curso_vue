<template>
    <div>
    <h2>Registro</h2>
    
    <form @submit.prevent="crearUsuario({email,password})">
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <input type="password"  v-model="password2" placeholder="Password confirm">
        <button type="submit" :disabled="!desactivarForm">Registrarse</button>
    </form>
    <p>{{error}}</p>
    </div>

</template>

<script>
import {mapActions,mapState} from "vuex"

export default {
    name:'registro',
    data(){
        return {
            email:'',
            password:'',
            password2:'',

        }
    },computed:{
        ...mapState(['error']),
        desactivarForm(){
            return this.password === this.password2 && this.password != '' 
        }
    },
    methods:{
        ...mapActions(['crearUsuario'])
    }
}
</script>