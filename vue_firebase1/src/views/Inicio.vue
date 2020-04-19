<template>
    <div >
        <h1>lista de tareas</h1>
       <router-link :to="{name:'agregar'}">
           <button>Agregar+</button>
       </router-link>
        <ul v-for="(tarea, index) of tareas" :key="index">
            <li>{{tarea.nombre }} - {{tarea.id}}</li>
            <router-link :to="{name:'editar',params:{id:tarea.id} }">
                <button > Editar </button>     
             </router-link>
              <button @click="eliminarTarea(tarea.id)"> eliminar </button> 
        </ul>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
    name:'inicio',
   
    methods:{
        ...mapActions(['getTareas','eliminarTarea']),   //action

    },
    created(){
        this.getTareas() //call
    },
     computed:{
        ...mapState(['tareas']) //variable store
    }

}
</script>