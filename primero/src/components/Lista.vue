<template>
    <div   class="container">
        <ul v-for="(fruta, index) of ordenado" :key="fruta.id" class="list-group">
             <li @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
               {{index}} {{fruta.nombre}}
                <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
             </li>
        </ul>
        <button class="btn btn-danger my-4 w-100" @click="reiniciar">Reiniciar</button>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    name:'lista',
    computed:{
        ...mapState(['frutas']),
        ordenado(){
            let frutasN = this.frutas //copia local para no afectar el array principal
            return frutasN.sort((a,b)=>b.cantidad - a.cantidad);
        }
    },
    methods:{
        ...mapMutations(['aumentar','reiniciar'])
    }
}
</script>

<style  scoped>
    li{
        cursor: pointer;
    }
</style>