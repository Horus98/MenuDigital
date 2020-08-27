Vue.component('modal-carrito', {
    template: `
        <div>
       
        
        <!-- Full Height Modal Right -->
        <div class="modal fade top" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        
        <!-- Add class .modal-full-height and then add class .modal-right (or other classes from list above) to set a position to the modal -->
        <div class="modal-dialog modal-full-height modal-top" role="document">
        
        
            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title w-100" id="myModalLabel">Sus pedidos</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <ul class="list-group">
                <li v-for= "item of $store.state.itemsSeleccionados" class="list-group-item">
                    <div>
                        <img :src= "item.imagen" alt="imagen item" height="60px" width="60px" style=" object-fit: cover;">
                        <span class="subFont ml-3 justify-content-center">{{item.nombre}}</span>
                    </div>
                </li>
            </ul>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-pink" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-lime accent-4 text-dark">Realizar Pedido</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    `
});