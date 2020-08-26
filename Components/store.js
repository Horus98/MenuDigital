const store = new Vuex.Store({
    state: {
        cantidadItemSeleccionado: new Map(),
        itemsSeleccionados: new Set(),
    },
    mutations: {
        agregar(state, item) {
            let key = item.id;
            let value = state.cantidadItemSeleccionado.get(key) + 1;
            if (state.cantidadItemSeleccionado.has(key))
                state.cantidadItemSeleccionado.set(key, value);
            else {
                state.cantidadItemSeleccionado.set(key, 1);
                state.itemsSeleccionados.add(item);
            }
        },
        quitar(state, item) {
            let key = item.id;
            if (state.cantidadItemSeleccionado.has(key)) {
                let value = state.cantidadItemSeleccionado.get(key) - 1;
                if (value <= 0) {
                    state.cantidadItemSeleccionado.delete(key);
                    state.itemsSeleccionados.delete(item);
                } else
                    state.cantidadItemSeleccionado.set(key, value);
            }
        }
    }
});