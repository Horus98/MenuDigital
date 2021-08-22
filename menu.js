

const ITEMS_URL = "http://beer-menu-iaw.herokuapp.com/api/items?in_stock=true"

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
             axios
                 .get(ITEMS_URL)
                 .then(response => {
                     this.cervezas = response["data"];
                     
                 })
                 .catch(error => console.error());
        },
        getParametrosFromUrl() {
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