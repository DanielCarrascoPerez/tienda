const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Cambio de divisas',
        datos: [],
        total: 0,
        cantidad: 0,
        selection: 0,
        cotizacion: 0,
        moneda: 0
    },
    methods: {
        // Función principal "convertir" de la "API EuroRates":
        // Esta función sirve para convertir Euros a otras divisas. Se debe de crear una variable selection donde almacenaremos 
        // 0 para convertir Euros a cualquier otra divisa (comportamiento estandar) o cualquier otro número para lo contrario. 
        // Si hay más de dos opciones para elegir en el formulario, la función no funcionará.
        // Parámetros de entrada: can = cantidad a convertir
        //                        mon = valor de la divisa a convertir
        // No tiene parámetros de salida.
        convertir: function(can, mon){
            if(this.selection == "0") {
                this.cotizacion = mon;
                this.total = this.can * this.mon;
            }else {
                this.cotizacion = 1/this.mon;
                this.total = this.can/this.mon;
            }
        },
        //Esta función modifica la variable "selection" para poder realizar la conversión como el usuario desea. 
        //Esto es 0 para convertir de Euro a otra divisa o 1 para lo contrario
        //La función no devuelve ningún valor
        cambiarSelection: function(x){
            this.selection = x;
        },
        //Esta función modifica la variable "cantidad" para poder realizar la conversión, asignándole el valor del campo de texto.
        //La función no devuelve ningún valor
        cambiarCantidad: function(y){
            this.total = y;
        },
        //Esta función modifica la variable "moneda" para poder realizar la conversión, asignándole el valor del select.
        //La función no devuelve ningún valor
        cambiarMoneda: function(z){
            this.moneda = z;
        }
    },
    // Esta función puede ser exportada y llamada con una variable para poder pasarle la dirección del fichero .json en caso de ser necesario, 
    // dándole un nombre y sacándola de la sección mounted.
    // La función abre el fichero .json y almacena los datos en una variable genérica llamada datos.
    // Devuelve un error en caso de no poder leer los datos.
    // Esta función no recibe ni devuelve parámetros en esta versión.
    mounted: function(){
        axios.get('exchange.json') // Fichero con las cotizaciones de las monedas en base al Euro
            // .then(function (response) {
            .then(response => {
                // handle success
                this.datos = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
});
