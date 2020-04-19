Vue.component('padre',{
    
    template:
    `
        <div class="bg-dark p-5">
            <h2 class="text-white">component Padre {{numeroPadre}} </h2>
            <hijo :numero="numeroPadre"></hijo>
            <button @click="numeroPadre++">+</button>
            {{this.dato}}
        </div>

    `,
    data(){
        return {
            numeroPadre:0
        }
    }
})