
const menu = new Vue({
    el: '#menu',
    data() {
        return {
            cervezas : [{
                "id": 5,
                "descripcion":"Rubia",
                "nombre":"IPA",
                "precio": 125.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            },
            {
                "id": 2,
                "descripcion":"Roja",
                "nombre":"Irish",
                "precio": 120.00,
                "imagen": "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2017/10/IPA-la-nueva-especialidad-de-Cerveza-Imperial.jpg?fit=4000%2C2670"
            }
        ],
        cantidad: 0,
        }
    }
});