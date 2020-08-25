Vue.component('menu-card',{
    template: `
    <!-- Card -->
    <div class="card-group col-12 col-sm-12 col-md-6 col-lg-4">
    <div class="card mt-3" >
        <!-- Card image -->
        <div class="view overlay">
                <img class="card-img-bottom img-fluid"
                    src="https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
                    alt="Card image cap">
        </div>
        <!-- Card content -->
        <div class="card-body elegant-color white-text rounded-bottom">
            <!-- Title -->
            <h4 class="card-title">IPA $150.00</h4>
            <!-- Text -->
            <p class="card-text white-text">Cerveza lupulada y de amargor intenso, ideal para quienes deseen
                una cerveza distinta.
            </p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-green btn-sm btn-circle " @click="cantidad++"><i class="fas fa-plus"></i></button>
            <span class="text-center">Cantidad: {{cantidad}}</span>
            <button type="button " class="btn btn-red btn-sm btn-circle"  @click= restar ><i class="fas fa-minus"></i></button>
           
        </div>
    </div>
    </div>

    `,
    data(){
      return{
        cantidad: 0
      }
    },
    methods: {
        restar(){
            if(this.cantidad - 1 < 0)
                this.cantidad = 0;
            else
                this.cantidad--;
        }
    }
});

