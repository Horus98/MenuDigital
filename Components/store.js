const store = new Vuex.Store({
    state: {
        cantidadItemSeleccionado: new Map(),
        itemsSeleccionados: new Array(),

    },
    mutations: {
        agregar(state, item) {
            let key = item.id;
            let value = state.cantidadItemSeleccionado.get(key) + 1;
            if (state.cantidadItemSeleccionado.has(key))
                state.cantidadItemSeleccionado.set(key, value);
            else {
                state.cantidadItemSeleccionado.set(key, 1);
                state.itemsSeleccionados.push(item);
            }
        },
        quitar(state, item) {
            let key = item.id;
            if (state.cantidadItemSeleccionado.has(key)) {
                let value = state.cantidadItemSeleccionado.get(key) - 1;
                if (value <= 0) {
                    state.cantidadItemSeleccionado.delete(key);
                    const index = state.itemsSeleccionados.indexOf(item);
                    if (index > -1) {
                        state.itemsSeleccionados.splice(index, 1);
                      }
                    
                } else
                    state.cantidadItemSeleccionado.set(key, value);
            }
        },
        clear(state){
            state.itemsSeleccionados = [];
            state.cantidadItemSeleccionado.clear();
        }
    }
});


