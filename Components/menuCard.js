Vue.component('menu-card',{
    template: `
    <!-- Card -->
    <div class="card-group col-12 col-sm-12 col-md-6 col-lg-4"  >
        <div class="card mt-3" >
            <!-- Card content -->
            <div class="card-body elegant-color white-text rounded-bottom"  >
                <!-- Title -->
                <div class="row">
                    <div class="col-7">
                    <!-- Text -->
                        <p class="card-text white-text">{{item.name}} $ {{new Intl.NumberFormat("de-DE").format(item.price)}} {{item.description}}</p>
                    </div>
                        <div class="col-5">
                            <button type="button " v-if = "cantidad == 0" class="btn btn-pink btn-sm btn-circle disabled"  @click= restar(item) ><i class="fas fa-minus"></i></button>
                            <button type="button " v-else class="btn btn-pink btn-sm btn-circle"  @click= restar(item) ><i class="fas fa-minus"></i></button>
                            <span class="text-center">{{cantidad}}</span>  
                            <button type="button" class="btn btn-lime accent-4 btn-sm btn-circle " @click= sumar(item) ><i class="fas fa-plus"></i></button>  
                        </div>
                    </div>
            </div>
        </div>
    </div>

    `,
    props : ['item'],
    data(){
      return{
        cantidad: 0,
        precio: this.item.price,  
      }
    },
    computed:{
        total: function(){
            return this.precio * this.cantidad
        }
    },
    watch:{
        '$store.state.cantidadItemSeleccionado':{
            handler(after){
                const value = store.state.cantidadItemSeleccionado.get(this.item.id)
                if  (value != undefined){
                    this.cantidad = value
                }
                else{
                    this.cantidad = 0
                }
            }
        }
    },
    methods: {
        restar(item){
            if(this.total != 0){
                store.commit('quitar',item)
            }
        },
        sumar(item) {
            store.commit('agregar',item);
        }
    },
});

