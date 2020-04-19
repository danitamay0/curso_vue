import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
//import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC80PhMCSmS-QogW2IC9E_EDkbGkYmB8A0",
  authDomain: "crud-vue1.firebaseapp.com",
  databaseURL: "https://crud-vue1.firebaseio.com",
  projectId: "crud-vue1",
  storageBucket: "crud-vue1.appspot.com",
  messagingSenderId: "262967129978",
  appId: "1:262967129978:web:a262bb6997a1e4809b08c3",
  measurementId: "G-HL89G5EYVE"
};
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   console.log(user);
    var email = user.email;
    var uid = user.uid;
    store.dispatch('detectarUsuario',{email:email,uid:uid})
    // ...
  } else {
    store.dispatch('detectarUsuario',null)
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


