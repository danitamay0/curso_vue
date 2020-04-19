import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[],
    tarea:[]
  },
  mutations: {
    llenarTareas(state,tareas){
      state.tareas=tareas
    },
    llenarTarea(state,tarea){
      state.tarea=tarea
    },
   eliminarTarea(state,id){
      //actualiza nuestro array local  y filtra primero( recorre y retorna todo lo diferebte a tarea.id)
      state.tareas=state.tareas.filter((doc)=>{
        return doc.id != id
      })
    }
  },
  actions: {
    getTareas({commit}){
      let tareas=[]
      
       db.collection('tareas').get().then(resx=>{
        resx.forEach(element=>{
            let tarea=element.data();
            tarea.id=element.id;
            tareas.push(tarea);
        })
      });
      commit('llenarTareas',tareas);
         
    },
    getTarea({commit},id){
        db.collection('tareas').doc(id).get().
        then(doc=>{
         let tar =doc.data();
         tar.id=doc.id;
        commit('llenarTarea',tar);
        })
       
      
     
    },
    editarTarea({commit},tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre:tarea.nombre
      }).then(()=>{
          router.push({name:'inicio'})
      });
    },
    agregarTarea({commit},name){
      db.collection('tareas').add({
        nombre:name
      }).then(()=>{
        router.push({name:'inicio'})
      })
    },
    eliminarTarea({commit},id){
  
      
      db.collection('tareas').doc(id).delete().then(()=>{
        console.log('tarea eliminada');
        
        commit('eliminarTarea',id)
      });

    }

  },
  modules: {
  }
})
