const menu = new Vue({
    el: '#menu',
    store,
    data() {
        return {
            cervezas: [{
                    "id": 1,
                    "descripcion": "Rubia",
                    "nombre": "IPA",
                    "precio": 125.00,
                    "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
                },
                {
                    "id": 2,
                    "descripcion": "Roja",
                    "nombre": "Irish",
                    "precio": 120.00,
                    "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
                },
                {
                    "id": 3,
                    "descripcion": "Dorada",
                    "nombre": "APA",
                    "precio": 180.00,
                    "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
                },
                {
                    "id": 4,
                    "descripcion": "Rubia",
                    "nombre": "Honey",
                    "precio": 120.00,
                    "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
                },
                {
                    "id": 5,
                    "descripcion": "Negra",
                    "nombre": "Stout",
                    "precio": 100.00,
                    "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
                },
                {
                    "id": 6,
                    "descripcion": "Roja",
                    "nombre": "Irish",
                    "precio": 120.00,
                    "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
                },
                {
                    "id": 7,
                    "descripcion": "Rubia",
                    "nombre": "IPA",
                    "precio": 125.00,
                    "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
                },
                {
                    "id": 8,
                    "descripcion": "Roja",
                    "nombre": "Irish",
                    "precio": 120.00,
                    "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
                },
                {
                    "id": 9,
                    "descripcion": "Rubia",
                    "nombre": "IPA",
                    "precio": 125.00,
                    "imagen": "https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
                },
                {
                    "id": 10,
                    "descripcion": "Roja",
                    "nombre": "Irish",
                    "precio": 120.00,
                    "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
                },
            ],
        }
    },
    methods: {
        agregarItem(item) {
            store.commit('agregar', item);
        },
        quitarItem(item) {
            store.commit('quitar', item);
        },
        buscar() {
            let mapeo = store.state.cantidadItemSeleccionado;
            console.log(store.state.itemsSeleccionados);
            console.log(mapeo.get(1));

        }

    }
});