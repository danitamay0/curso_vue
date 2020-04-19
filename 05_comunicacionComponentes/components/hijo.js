Vue.component('hijo',{
    template:`
        <div>
            <h2>componente hijo {{numero}}</h2>
        </div>
    `,
    //props son propiedades pasadas por parametros del padre
    props:[
        'numero'
    ]

})