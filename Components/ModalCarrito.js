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
                <li class="list-group-item">Item 1</li>
                <li class="list-group-item">Item 2</li>
                <li class="list-group-item">Item 3</li>
                <li class="list-group-item">Item 4</li>
                <li class="list-group-item">Item 5</li>
                <li class="list-group-item">Item 6</li>
                <li class="list-group-item">Item 7</li>
                <li class="list-group-item">Item 8</li>
            </ul>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    `
});