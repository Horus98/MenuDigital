
const menu = new Vue({
    el: '#menu',
    data() {
        return {
            cervezas : [{
                "id": 5,
                "descripcion":"Rubia",
                "nombre":"IPA",
                "precio": 125.00,
                "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
            },
            {
                "id": 2,
                "descripcion":"Roja",
                "nombre":"Irish",
                "precio": 120.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 12,
                "descripcion":"Dorada",
                "nombre":"APA",
                "precio": 180.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 32,
                "descripcion":"Rubia",
                "nombre":"Honey",
                "precio": 120.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 5,
                "descripcion":"Negra",
                "nombre":"Stout",
                "precio": 100.00,
                "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
            },
            {
                "id": 2,
                "descripcion":"Roja",
                "nombre":"Irish",
                "precio": 120.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 5,
                "descripcion":"Rubia",
                "nombre":"IPA",
                "precio": 125.00,
                "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
            },
            {
                "id": 2,
                "descripcion":"Roja",
                "nombre":"Irish",
                "precio": 120.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 5,
                "descripcion":"Rubia",
                "nombre":"IPA",
                "precio": 125.00,
                "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
            },
            {
                "id": 2,
                "descripcion":"Roja",
                "nombre":"Irish",
                "precio": 120.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
        ],
        cantidad: 0,
        cantidadItemSeleccionado: new Map(),
        itemsSeleccionados : new Set(),
        }
    },
    methods:{
        agregarItem(item){
            let key = item.id;
            let value = this.cantidadItemSeleccionado.get(key) + 1;
            if(this.cantidadItemSeleccionado.has(key))
                this.cantidadItemSeleccionado.set(key,value);
            else{
                this.cantidadItemSeleccionado.set(key,1);
                this.itemsSeleccionados.add(item);
            }
        },
        quitarItem(item){
            let key = item.id;
            let value = this.cantidadItemSeleccionado.get(key) - 1;
            if(value <= 0){
                this.cantidadItemSeleccionado.delete(key);
                this.itemsSeleccionados.delete(key);
            }
            this.cantidadItemSeleccionado.set(key,value);
            console.log(this.cantidadItemSeleccionado);
            console.log(this.itemsSeleccionados);
        }
    }
});