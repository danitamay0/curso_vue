Vue.component('saludo',{
    data(){
        return {
               saludo:'Hello vuejs'
        }
    },
    template:`
        <h2>{{saludo}} </h2>
    `

})