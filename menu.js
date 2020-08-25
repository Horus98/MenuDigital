
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
        itemsSeleccionados: [{}],
        }
    }
});