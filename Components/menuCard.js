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
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button " class="btn btn-red btn-sm btn-circle"  @click= restar ><i class="fas fa-minus"></i></button>
            <span class="text-center">Cantidad: {{cantidad}}</span>   
            <button type="button" class="btn btn-green btn-sm btn-circle " @click= sumar ><i class="fas fa-plus"></i></button>
            <span class="text-center ml-5">Total: $ {{total}}</span>
           
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
        restar(){
            if (this.cantidad - 1 < 0){
                this.cantidad = 0;
                this.total = 0;
            }
            else{
                this.cantidad--;  
                this.total -= this.precio;  
            }
            this.$emit('restar',this.item);
        },
        sumar() {
            this.cantidad++;
            this.total += this.precio;
            this.$emit('agregar',this.item);
        }
    }
});

