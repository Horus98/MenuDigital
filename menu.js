
const menu = new Vue({
    el: '#menu',
    data() {
        return {
            cervezas : [{
                "id": 1,
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
                "id": 3,
                "descripcion":"Dorada",
                "nombre":"APA",
                "precio": 180.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 4,
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
                "id": 6,
                "descripcion":"Roja",
                "nombre":"Irish",
                "precio": 120.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 7,
                "descripcion":"Rubia",
                "nombre":"IPA",
                "precio": 125.00,
                "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
            },
            {
                "id": 8,
                "descripcion":"Roja",
                "nombre":"Irish",
                "precio": 120.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 9,
                "descripcion":"Rubia",
                "nombre":"IPA",
                "precio": 125.00,
                "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
            },
            {
                "id": 10,
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
            if(this.cantidadItemSeleccionado.has(key)){
                let value = this.cantidadItemSeleccionado.get(key) - 1;
                if(value <= 0){
                    this.cantidadItemSeleccionado.delete(key);
                    this.itemsSeleccionados.delete(item);
                }
                else
                    this.cantidadItemSeleccionado.set(key,value);
             }
        }
    }
});

