Vue.component('modal-confirm',{
template://html
`
<div>
    <div class="modal fade" id="modalConfirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-sm modal-notify modal-danger" role="document">
            <div class="modal-content text-center">
                <div class="modal-header d-flex justify-content-center">
                    <p class="heading">Esta seguro que desea vaciar el carrito?</p>
                </div>
                <div class="modal-body">
                    <i class="fas fa-times fa-4x animated rotateIn"></i>
                </div>
                <div class="modal-footer flex-center">
                    <a href="" class="btn  btn-outline-danger" @click="$store.commit('clear')">Si</a>
                    <a type="button" class="btn  btn-danger waves-effect" data-dismiss="modal">No</a>
                </div>
            </div>
        </div>
    </div>
</div>

`
});