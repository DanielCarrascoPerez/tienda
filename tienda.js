const app = new Vue({
  el: '#app', //Esto hace que todo lo que está dentro del campo cuyo id sea app, sea procesado con Vue
  data: {
    titulo: 'Tienda de componentes',
    frutas: [
      {nombre:'Pera', cantidad:10},
      {nombre:'Manzana', cantidad:0},
      {nombre:'Platano', cantidad:11}
    ],
    fondo: 'bg-warning',
    color: false,
    nuevaFruta: '',
    total: 0
  },
  methods:{
    agregarFruta(){
      this.frutas.push({
        nombre: this.nuevaFruta, cantidad: 0
      });
      this.nuevaFruta = ''; 
    }
  },
  computed:{
    sumarFrutas(){
      this.total = 0;
      for(fruta of this.frutas){
        this.total += fruta.cantidad;
      }
      return this.total;
    }
  }    
})