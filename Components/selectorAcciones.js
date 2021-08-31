const CUENTA_URL = "https://beermenu.herokuapp.com/api/attention_requests"
const LLAMAR_MOZO_URL = "https://beermenu.herokuapp.com/api/attention_requests"
const MIS_PEDIDOS_URL = "https://beermenu.herokuapp.com/api/orders/table/"

Vue.component('about', {
  template: `
    <section id="home">
                    <h2 class="text-center heading-font" id="presentacion"> <span class="text-danger">SINGLETON</span>
                         
                    </h2>
                    <h5 class="text-center mt-5"> </h5>

                    <div class="row mt-5">
                        <div class="col-md-12 justify-content-center">
                            <h2 class="secondary-font">About <span class="text-danger">US</span></h2>
                            <p>Bienvenido a nuestro menú digital, mas abajo podra consultar la carta y ver todo lo que tenemos para ofrecer. </p>
                           
                        </div>
                        
                    </div>
                    <div class="row">
                    <div class="col-1"></div>
                        <div class="col-10 ">
                        <a type="button" href="#comienzo-menu" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light" >VER MENU</a>
                        </div>
                        <div class="col-1"></div>
                     </div>

                    <div class="row mt-3">
                    <div class="col-1"></div>
                        <div class="col-10 ">
                        <a type="button" href="#menu" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light" data-toggle="modal" data-target="#modalCuenta">PEDIR CUENTA</a>
                        </div>
                        <div class="col-1"></div>
                    </div>

                    <div class="row mt-3">
                    <div class="col-1"></div>
                        <div class="col-10 ">
                        <a type="button" href="#menu" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light" @click="llamarMozo()">LLAMAR MOZO</a>
                        </div>
                        <div class="col-1"></div>
                    </div>

                    <div class="row mt-3">
                    <div class="col-1"></div>
                        <div class="col-10 ">
                        <a type="button" href="#menu" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light" @click="solicitarMisPedidos()" data-toggle="modal" data-target="#modalPedidos">MIS PEDIDOS</a>
                        </div>
                        <div class="col-1"></div>
                    </div>

                    <div class="row mt-3">
                    <div class="col-1"></div>
                         <div class="col-10">
                         <a type="button" href="#contacto" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light">INFORMACION DE CONTACTO</a>
                         </div>
                         <div class="col-1"></div>
                    </div>

                    <div class="modal fade text-dark" id="modalPedidos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <!--Header-->
                        <div class="modal-header">
                          <h4 class="modal-title" id="myModalLabel">Tus pedidos</h4>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <!--Body-->
                        <div class="modal-body">
                        <div class="card mb-3" v-for= "orden of misPedidos">
                        <div class="card-header">
                          Orden #{{orden.id}}
                        </div>
                        <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item " v-for= "item of orden.items">
                                  <div class="row ">
                                      <div class="col-6 text-left align-middle"><label class="subFont-md">{{item.name}}</label></div>
                                      <div class="col-3 text-center align-middle"><label class="subFont-md">{{item.amount}} ud.</label></div>
                                      <div class="col-3 text-center align-middle"><label class="subFont-md">$ {{item.amount * item.price}}</label></div>
                                  </div>
                              </li>
                          </ul>
                        </div>
                         <h5 class="card-header text-left">Total: $ {{orden.total}}</h5>
                         <h5 class="card-header text-left">Hora: {{formatTime(orden.created_at)}}</h5>
                      
                      </div>
                      
                        </div>
                        <!--Footer-->
                        <div class="modal-footer">
                          <button type="button" class="btn btn-outline-primary btn-md" data-dismiss="modal">Salir</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

</div>


<div class="modal fade text-dark" id="modalCuenta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <!--Header-->
    <div class="modal-header">
      <h4 class="modal-title" id="myModalLabel">Tus pedidos</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <!--Body-->
    
    <div class="modal-body text-left">
    <div class="mb-1">   Como desea abonar?    </div>

    <div class="form-check form-check-inline ml-1">
  <input
    class="form-check-input"
    type="radio"
    name="inlineRadioOptions"
    id="cash"
    value="Abona en efectivo"
  />
  <label class="form-check-label" for="cash">Efectivo</label>
</div>

<div class="form-check form-check-inline ml-1">
  <input
    class="form-check-input"
    type="radio"
    name="inlineRadioOptions"
    id="card"
    value="Abona con tarjeta"
  />
  <label class="form-check-label" for="card">Tarjeta</label>
</div>

    </div>
    <!--Footer-->
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-primary btn-md" data-dismiss="modal" >Cancelar</button>
      <button type="button" class="btn btn-primary btn-md"  data-dismiss="modal"  @click="solicitarCuenta()">Solicitar Cuenta</button>
    </div>
  </div>
</div>
</div>
</div>
</section>

               
    `,
  props: ['mesa', "token"],
  data() {
    return {
      misPedidos: "",

    }
  },
 
  methods: {
    llamarMozo() {
      console.log("LLamando el mozo")
      let mensajeMozo = {
        "token": this.token,
        "table": this.mesa,
        "comments": "Sal",
        "type":"WAITER"
      }
      this.axiosPost(mensajeMozo, LLAMAR_MOZO_URL)
    },
    solicitarCuenta() {
      console.log("Solicitando la cuenta")
      let metodoPago = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
      let mensajeCuenta = {
        "token": this.token,
        "table": this.mesa,
        "comments": metodoPago,
        "type":"BILL"
      }
      this.axiosPost(mensajeCuenta, CUENTA_URL)
    },
    solicitarMisPedidos() {
      console.log("Solicitando mis pedidos")
      axios
        .get(this.buildURL(this.mesa,this.token))
        .then(response => {
          this.misPedidos = response['data'];
          console.log(this.misPedidos)
        })
        .catch(error => console.error(error));

    },
    axiosPost(mensaje, url) {
      console.log(mensaje)
      axios.post(url, mensaje, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.status === 200) {
            this.notify();
          };
        }).catch(e => {

        });
    },
    notify() {
      swal("Su petición ha sido enviada", "Por favor, aguarde un momento y sera atendido", "success", {
        timer: 3000
      });
    },
    formatTime(date) {
      let dates = new Date(date)
      let horas = dates.getUTCHours() 
      let minutos = dates.getUTCMinutes()
      return  this.addZero(horas) + ":" + this.addZero(minutos)

    },
    addZero(time){
      if (time < 10)  time = '0' + time;
      return time
    },
    buildURL(mesa,token){
      return MIS_PEDIDOS_URL+""+mesa+"?token="+token
    },
  }
});
