Vue.component('nav-bar',{
    template: `
    <nav id="navbar-example2" class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
       

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#menu" style= "font-family: 'Roboto', sans-serif; font-family: 'Style Script', cursive; font-size: 22px;">Singleton</a>
        <a class="navbar-brand"  href="" v-if = "$store.state.itemsSeleccionados.length > 0" data-toggle="modal" data-target="#modalCart" >
            <i class="fas fa-shopping-cart"></i> 
            <transition name="fade">
                <span v-if="$store.state.itemsSeleccionados.length > 0" class='badge badge-warning' id='lblCartCount' > {{$store.state.itemsSeleccionados.length}} </span>
            </transition> 
        </a>
        <a class="navbar-brand"  href="#" v-else >
            <i class="fas fa-shopping-cart"></i> 
            <transition name="fade">
                <span v-if="$store.state.itemsSeleccionados.length > 0" class='badge badge-warning' id='lblCartCount' > {{$store.state.itemsSeleccionados.length}} </span>
            </transition> 
        </a>
        
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#menu">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#carta">Menú</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link "href="" data-toggle="modal" data-target="#modalCart">Ver Pedido</a>
                </li>
                <!-- Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Llamar Mozo</a>
                    <div class="dropdown-menu dropdown-elegant" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item " href="#">Solicitar Cuenta</a>
                        <a class="dropdown-item" href="#">Solicitar Ayuda</a>
                    </div>
                </li>
            </ul>
        </div> 
    </nav>
    
    

    `,
   
});

