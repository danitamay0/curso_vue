<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="ingresoUsuario({email:email, password:password})">
            <input type="email" v-model="email" placeholder="email">
            <input type="password" v-model="password" placeholder="password">
            <button type="submit">acceder</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name:'ingreso',
    data(){
        return {
            email:'',
            password:'',
          
        }
    },
    computed:{
        ...mapState(['error'])
    }
    ,
    methods:{
        ...mapActions(['ingresoUsuario'])
    }
}
</script>