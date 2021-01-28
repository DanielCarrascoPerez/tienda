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
        },
        warn: function (message, event) {
            alert('Compra realizada!')
        },
        eliminarItem: function(index){
            this.orders.splice(index, 1);
        }
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
