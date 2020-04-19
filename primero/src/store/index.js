import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[{
      nombre:'pera',
      cantidad:0
    },
    {
      nombre:'manzana',
      cantidad:0
    },
    {

      nombre:'manzana',
      cantidad:0
    }
    
  ]
  },
  mutations: {
    aumentar(state,index){
      state.frutas[index].cantidad++
    },
    reiniciar(state){
      state.frutas.forEach(Element=>{
        Element.cantidad=0
      });
    },
 
  },
  actions: {
  },
  modules: {
  }
})
