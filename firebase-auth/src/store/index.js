import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase/app";
import router from '@/router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:'',
    error:''
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario=payload
    },
    setError(state,payload){
      state.error=payload
    }
  },
  actions: {
    crearUsuario({commit},payload){
      console.log(payload);
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
      .then( res=>{
        console.log('created',res);
        commit('setUsuario',{email:res.user.email,uid:res.user.email})
        router.push({name:'home'})

      }).catch(err=>{
        console.log('err',err.code, 'errms', err.message);
        commit('setError',err.message);
      })
    },

    ingresoUsuario({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.password).then(res=>{
        console.log('logeado');
        commit('setUsuario',{email:res.user.email,uid:res.user.uid});
        router.push({name:'home'});

      }).catch(err=>{
        console.log('err', err.message);
        commit('setError',err.message);
      })
      },

      detectarUsuario({commit},payload){
        if(payload != null)commit('setUsuario',{email:payload.email,uid:payload.uid});
        else commit('setUsuario',null);
      },

      cerrarSesion({commit}){
        firebase.auth().signOut();
        commit('setUsuario',null);
        router.push({name:'ingreso'})
      }
    
   
      
    
  },
  getters:{
    existeUsuario(state){
      if(state.usuario === null || state.usuario === undefined || state.usuario === '' ){
        return false
      }else{
        return true
      }
    }
  },
  modules: {
  }
})
