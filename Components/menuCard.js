Vue.component('menu-card',{
    template: `
    <!-- Card -->
    <div class="card-group col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="card mt-3" >
            <!-- Card image -->
            <div class="view overlay">
                <img class="card-img-bottom img-fluid"
                    :src= item.imagen
                    alt="Card image cap" >
                <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>
            <!-- Card content -->
            <div class="card-body elegant-color white-text rounded-bottom">
                <!-- Title -->
                <h4 class="card-title">{{item.nombre}} $ {{new Intl.NumberFormat("de-DE").format(item.precio)}}</h4>
                <!-- Text -->
                <p class="card-text white-text">{{item.descripcion}}
                </p>
                <div class="row">
                    <div class="col-12">
                        <button type="button " class="btn btn-red btn-sm btn-circle"  @click= restar(item) ><i class="fas fa-minus"></i></button>
                        <span class="text-center" v-if="$store.state.cantidadItemSeleccionado.get(item.id) != undefined ">{{cantidadItem(item)}}</span>  
                        <span class="text-center" v-else>0 </span>    
                        <button type="button" class="btn btn-green btn-sm btn-circle " @click= sumar(item) ><i class="fas fa-plus"></i></button>
                        <span class="text-center ml-3">Total: $ {{total}}</span>
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
        total: 0, 
        precio: this.item.precio,  
      }
    },
    methods: {
        restar(item){
            if(store.state.cantidadItemSeleccionado != undefined && this.total != 0){
                let cantidad = store.state.cantidadItemSeleccionado.get(item.id) - 1;
                store.commit('quitar',item)
                this.total = this.precio * cantidad ;  
            }
        },
        sumar(item) {
            store.commit('agregar',item);
            let cantidad = store.state.cantidadItemSeleccionado.get(item.id);
            this.total = this.precio * cantidad ;  
        } ,
        cantidadItem(item){
            return store.state.cantidadItemSeleccionado.get(item.id);
        }
    },
});

