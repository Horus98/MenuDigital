Vue.component('menu-card',{
    template: `
    <!-- Card -->
    <div class="card mb-4">
        <!-- Card image -->
        <div class="view overlay">
                <img class="card-img-bottom img-fluid"
                    src="https://images-na.ssl-images-amazon.com/images/I/61Gj3yQ-dEL._AC_SL1500_.jpg"
                    alt="Card image cap">
        </div>
        <!-- Card content -->
        <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">IPA $150.00</h4>
            <!-- Text -->
            <p class="card-text">Cerveza lupulada y de amargor intenso, ideal para quienes deseen
                una cerveza distinta.
            </p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-green btn-md " @click="cantidad++">Agregar</button>
            <button type="button " class="btn btn-red btn-md" @click= restar >Quitar</button>
            <span class="text-center">Cantidad: {{cantidad}}</span>
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

