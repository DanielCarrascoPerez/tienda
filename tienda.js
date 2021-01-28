const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Tienda DB',
        items: [],
        orders: [],
        total: 0,
        envio: 0
    },
    methods: {
        agregarItem: function(i){
            //console.log(this.selCPU);
            switch(i){
                case 1:
                    for (x of this.items){
                        if(x.nombre == this.selCPU)
                            this.orders.push({
                                categoria: x.categoria,
                                nombre: x.nombre,
                                precio: x.precio,
                                stock: x.stock,
                                descrption: x.descrption,
                                imagen: x.imagen,
                                cantidad: 1
                            });
                    }
                    break;
                case 2:
                    for (x of this.items){
                        if(x.nombre == this.selBoard)
                            this.orders.push({
                                categoria: x.categoria,
                                nombre: x.nombre,
                                precio: x.precio,
                                stock: x.stock,
                                descrption: x.descrption,
                                imagen: x.imagen,
                                cantidad: 1
                            });
                    }
                    break;
                case 3:
                    for (x of this.items){
                        if(x.nombre == this.selGPU)
                            this.orders.push({
                                categoria: x.categoria,
                                nombre: x.nombre,
                                precio: x.precio,
                                stock: x.stock,
                                descrption: x.descrption,
                                imagen: x.imagen,
                                cantidad: 1
                            });
                    }
                    break;    
                case 4:
                    for (x of this.items){
                        if(x.nombre == this.selRAM)
                            this.orders.push({
                                categoria: x.categoria,
                                nombre: x.nombre,
                                precio: x.precio,
                                stock: x.stock,
                                descrption: x.descrption,
                                imagen: x.imagen,
                                cantidad: 1
                            });
                    }
                    break; 
            }
            //console.log(this.orders.nombre);
            //localStorage.setItem('tienda-vue', JSON.stringify(this.items));
        },
        warn: function (message, event) {
            // now we have access to the native event
            alert('Compra realizada!')
        },
        editarItem: function(index){
            //this.items[index].estado = true;
            //localStorage.setItem('tienda-vue', JSON.stringify(this.items));
        },
        eliminarItem: function(index){
            this.orders.splice(index, 1);
            //localStorage.setItem('tienda-vue', JSON.stringify(this.items));
        }
    },
    created: function(){
        // let datosDB = JSON.parse(localStorage.getItem('tienda-vue'));
        // //Cargamos los datos
        // if(datosDB === null){
        //     localStorage.setItem('tienda-vue', JSON.stringify(this.items));
        // }else{
        //     this.tareas = datosDB;
        // }
        //let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        // console.log(datosDB);
        //if(datosDB === null){
        //    this.tareas = [];
        //}else{
        //    this.tareas = datosDB;
        //}
    },
    computed: {
        sumarTotal(){
            this.total=0;
            for(x of this.orders){
                this.total += x.cantidad*x.precio;
            }
            return this.total;
        },
        calcularSubtotal(){
            return this.total + this.envio;
        }
    },
    mounted: function(){
        axios.get('tienda.json')
            // .then(function (response) {
            .then(response => {
                // handle success
                this.items = response.data;
                //console.log(this.items);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
});
