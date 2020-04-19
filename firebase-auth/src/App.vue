<template>
  <div id="app">
    <div id="nav">
      <router-link  to="/" v-if="existeUsuario">Home </router-link> 
      <router-link to="/registro" v-if="!existeUsuario">Registro</router-link> 
       <router-link :to="{name:'ingreso'} " v-if="!existeUsuario">Ingreso</router-link>
       <a @click="cerrarSesion" v-if="existeUsuario">Cerrar Sesión</a>
     
    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
export default {
  
  name:'App',
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }

}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  font-size:20px;
  text-decoration:underline;
  margin-right: 5px
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
