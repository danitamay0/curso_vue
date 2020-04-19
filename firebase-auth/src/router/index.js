import Vue from 'vue'
import VueRouter from 'vue-router';
import * as firebase from "firebase/app";
Vue.use(VueRouter)

const routes = [

  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      // a meta field
      meta: { requiresAuth: true }
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
 const rutaProtegida= to.matched.some(record => record.meta.requiresAuth);
 const isAuth=firebase.auth().currentUser;

 if(rutaProtegida == true && isAuth == null){
   next({name:'ingreso'});
 }else{
   next();
 }
  
  
})

export default router
