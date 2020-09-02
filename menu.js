const menu = new Vue({
    el: '#menu',
    store,
    data() {
        return {
            cervezas: []
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
                .get('http://127.0.0.1:8000/api/items-stock/')
                .then(response => {
                    this.cervezas = response['data'];
                })
                .catch(error => console.error());
        },
    },
    mounted() {
        this.getBeerData();
    }

});