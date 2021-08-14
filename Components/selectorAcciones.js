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
                        <a type="button" class="btn btn-red rounded-pill btn-block" data-mdb-ripple-color="light" @click="solicitarMisPedidos()">MIS PEDIDOS</a>
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
        }
    }
});