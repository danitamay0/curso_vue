<template>
   <div id="editar">
    <h2>editar</h2>
    <h3>{{tarea.nombre}}</h3>
    <form @submit.prevent="editarTarea(tarea)">
        <h2></h2>
        <input type="text"  name="" id="" v-model="tarea.nombre">
    </form>
    </div> 
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:"editar",
    data(){
        return {
            id: this.$route.params.id,
          
        }
    },
    methods:{
        ...mapActions(['editarTarea','getTarea'])
    },
   
    
     created(){
        
        this.getTarea(this.id);
     
          
          
         
     },
      computed:{
        ...mapState(['tarea'])

    },
        
    

}
</script>