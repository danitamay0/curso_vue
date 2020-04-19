const app = new Vue({
  el: "#app",
  data: {
    message: "Hola mundo vue",
    frutas: [
      { nombre: "manzana", cantidad: 30 },
      { nombre: "pera", cantidad: 0 },
      { nombre: "banano", cantidad: 80 }
    ],
    nuevaFruta:'',
    cantidadFruta:0,
    suma:0
  },
  methods:{
    aggFruta(){
       this.frutas.push({nombre:this.nuevaFruta,cantidad:this.cantidadFruta})
        this.nuevaFruta='';
        this.cantidadFruta=''
    }
  },
  computed:{
      sumarFrutas(){
          this.suma=0;
          this.frutas.forEach(fruta => {
              this.suma+=fruta.cantidad;
          });
          return this.suma;
      }
  }
});
