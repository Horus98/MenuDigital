const CUENTA_URL = "www.cuentaporfavor.com"
const LLAMAR_MOZO_URL = "www.necesitoayudamozo.com"
const MIS_PEDIDOS_URL = "www.mispedidos.com"

Vue.component('about', {
    template: `
    <section id="home">
                    <h2 class="text-center heading-font" id="presentacion"> <span class="text-danger">MULAIKA</span>
                         
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
                        <a type="button" href="#comienzo-menu" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light" @click="solicitarCuenta()">PEDIR CUENTA</a>
                        </div>
                        <div class="col-1"></div>
                    </div>

                    <div class="row mt-3">
                    <div class="col-1"></div>
                        <div class="col-10 ">
                        <a type="button" href="#comienzo-menu" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light" @click="llamarMozo()">LLAMAR MOZO</a>
                        </div>
                        <div class="col-1"></div>
                    </div>

                    <div class="row mt-3">
                    <div class="col-1"></div>
                        <div class="col-10 ">
                        <a type="button" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light" @click="solicitarMisPedidos()" data-toggle="modal" data-target="#modalPedidos">MIS PEDIDOS</a>
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
                          <ul class="list-group">
                            <li class="list-group-item " v-for= "item of misPedidos">
                              <div class="row ">
                                <div class="col-6 text-center align-middle"><label class="secondary-font-md">{{item.name}}</label></div>
                                <div class="col-6 text-center align-middle"><label class="secondary-font-md ">{{item.cantidad}}</label></div>
                              </div>
                            </li>
                          </ul>   
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
    
                </section>
                
    `,
    data() {
        return {
          misPedidos: "",
        }
    },

    methods: {
        llamarMozo(){
            console.log("LLamando el mozo")
            this.axiosPost("Ayuda mozo", LLAMAR_MOZO_URL)
        },
        solicitarCuenta(){
            console.log("Solicitando la cuenta")
            this.axiosPost("Cuenta por favor!", CUENTA_URL)
        },
        solicitarMisPedidos(){
            console.log("Solicitando mis pedidos")
            axios
                .get(MIS_PEDIDOS_URL)
                .then(response => {
                    this.misPedidos = response['data'];
                })
                .catch(error => console.error(error)); 
            //Imitamos que nos llegan un par de pedidos.
            this.formatearRespuesta(this.misPedidos)
        },
        axiosPost(mensaje, url){
            axios.post(url, mensaje, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
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
            swal("En un momento sera atendido", {
              timer: 3000
            })
        },
        formatearRespuesta(ordenes){
            this.misPedidos = 
                [{
                    "name": "IPA",
                    "cantidad": "5"
                },
                {   "name": "APA",
                    "cantidad": "1"
                    
                }
                ]
        }
    }
});