Vue.component('menu-list',{
    template: `
    <div>
        
            <div class="d-flex w-100 justify-content-between">
                <p class="mb-1 text-white subFont">{{item.name}}</p>
                <small class="text-white">$ {{new Intl.NumberFormat("de-DE").format(item.price)}} 
                    <div class="btn-group " role="group" aria-label="Basic example">
                      
                        <button type="button" class="btn btn-white btn-xs-amount "  v-if = "cantidad == 0" @click= restar(item) disabled><i class="fas fa-minus"></i></button>
                        <button type="button" class="btn btn-white btn-xs-amount "  v-else @click= restar(item)><i class="fas fa-minus"></i></button>
                        <button type="button" class="btn btn-outline-white  btn-xs-amount ">{{cantidad}}</button>
                        <button type="button" class="btn btn-white btn-xs-amount" @click= sumar(item)><i class="fas fa-plus"></i></button>
                    </div> 
                </small>
            </div>
            <small class="text-white descripcion-item">{{item.description}}</small>
            <hr style="background-color:rgb(255, 255, 255); height: 1px;">

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

