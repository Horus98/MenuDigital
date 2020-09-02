Vue.component('modal-carrito-table',{
    template:`
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalCart">Launch modal</button>

<!-- Modal: modalCart -->
<div class="modal fade" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <!--Header-->
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Your cart</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <!--Body-->
      <div class="modal-body">

        <table class="table table-hover">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><img src= "https://images.crateandbarrel.com/is/image/Crate/SpiegelauIPAGlass18ozSHS16" alt="imagen item" height="60px" width="60px" style=" object-fit: cover;"></th>
              <td>Product 1</td>
              <td>100$</td>
              <td>
                <div>
                    <div class="def-number-input number-input safari_only mb-0 w-100">
                      <button  
                        class="minus"></button>
                      <input class="quantity" min="0" name="quantity" value="1" type="number">
                      <button 
                        class="plus"></button>
                    </div>
                  </div>
            </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Product 2</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Product 3</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Product 4</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr class="total">
              <th scope="row">5</th>
              <td>Total</td>
              <td>400$</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
      <!--Footer-->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
        <button class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal: modalCart --></div>
    `,
    data() {
        return {
            items: store.state.cantidadItemSeleccionado,
            observations : "",
        }
    },
    methods: {
        clear(){
                
        },
        cantidad(id) {
            return store.state.cantidadItemSeleccionado.get(id);
        },
        price(item) {
            let precio = this.cantidad(item.id) * item.price;
            precio = new Intl.NumberFormat("de-DE").format(precio);
            return "$" + precio;
        },
        sumar(item) {
            store.commit('agregar', item);
        },
        restar(item) {
            let cantidad = this.cantidad(item.id);
            if (cantidad > 0)
                store.commit('quitar', item);
        }
    },


});

