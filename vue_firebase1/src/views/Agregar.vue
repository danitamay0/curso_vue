<template>
    <div>
        <h2>agregar</h2>
        <div>
            <form @submit.prevent="agregarTarea(nombre)">
             
            <input type="text" placeholder="Tarea" v-model="nombre" name="" id="">
             <h2>{{nombre}}</h2>  
             <button type="submit">Agregar</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'agregar',
    data(){
        return {
            nombre:''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>