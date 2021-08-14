let cervezasLocales = [{"id" : 1,"name" : "IPA", "description" : "Amarga", "price": 120},
                {"id" : 2,"name" : "APA", "description" : "Amarga y muy lupulada","price": 120},
                {"id" : 3,"name" : "BLACK IPA", "description" : "Amarga y oscura como la noche   ", "price": 130}
            ]

const ITEMS_URL = 'http://127.0.0.1:8000/api/items-stock/'

const menu = new Vue({
    el: '#menu',
    store,
    data() {
        return {
            cervezas: [],
            mesa: "",
            token: ""
        }
    },
    methods: {
        agregarItem(item) {
            store.commit('agregar', item);
        },
        quitarItem(item) {
            store.commit('quitar', item);
        },
        getBeerData() {
           /*  axios
                .get(ITEMS_URL)
                .then(response => {
                    this.cervezas = response['data'];
                })
                .catch(error => console.error()); */
                this.cervezas = cervezasLocales
                console.log(this.cervezas)
               
                
               
        },
        getParametrosFromUrl(){
            const valoresParametros = window.location.search;
            const urlParams = new URLSearchParams(valoresParametros);
            this.mesa = urlParams.get('mesa');
            this.token = urlParams.get('token');
        }
    },
    mounted() {
        this.getBeerData();
        this.getParametrosFromUrl();
    }

});

