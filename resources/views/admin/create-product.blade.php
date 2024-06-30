@extends('voyager::master')

@section('content')
<style>
.detail {
    display:flex;
    gap:10px;
}
.form-group input{
    height:auto;
    padding: 20px !important ;
}
.hidden-btn{
    background :none !important; 
    border:none !important; 
    cursor:context-menu !important;
}
.close-detail-container{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
</style>
    <div class="page-content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-bordered">
                    <div class="panel-body">
                        <h1>Create New Product</h1>

                        @if(session('success'))
                            <div class="alert alert-success">
                                {{ session('success') }}
                            </div>
                        @endif

                        <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="form-control" >
    </div>
    <div class="form-group">
        <label for="description">Description</label>
        <textarea name="description" id="description" class="form-control" ></textarea>
    </div>
    <div class="form-group">
        <label for="image_gallery">Image Gallery</label>
        <input type="file" name="image_gallery[]" id="image_gallery" class="form-control" multiple>
    </div>
    <div class="form-group">
        <label for="image_alt">Image Alt Text</label>
        <input type="text" name="image_alt" id="image_alt" class="form-control" >
    </div>
    <div class="form-group">
        <label for="order">Order</label>
        <input type="number" name="order" id="order" class="form-control" >
    </div>
    <div class="form-group">
        <label for="meta_title">Meta Title</label>
        <input type="text" name="meta_title" id="meta_title" class="form-control" >
    </div>
    <div class="form-group">
        <label for="meta_tag">Meta Tag</label>
        <input type="text" name="meta_tag" id="meta_tag" class="form-control" >
    </div>

    <h3 style="margin-bottom:3rem; margin-top:3rem;">Ürün İçerik Detayı</h3>
    <div id="product-details">
        <div class="detail" style="display:flex;">
            <div class="form-group">
                <label for="details[0][mode]">Mode</label>
                <input type="text" name="details[0][mode]" class="form-control" >
            </div>
            <div class="form-group">
                <label for="details[0][kursmm]">Kurs (mm)</label>
                <input type="number" name="details[0][kursmm]" class="form-control" >
            </div>
            <div class="form-group">
                <label for="details[0][lmm]">L (mm)</label>
                <input type="number" name="details[0][lmm]" class="form-control" >
            </div>
            <div class="form-group">
                <label for="details[0][lminmm]">L min (mm)</label>
                <input type="number" name="details[0][lminmm]" class="form-control" >
            </div>
            <div class="form-group">
                <label for="details[0][dmm]">D (mm)</label>
                <input type="number" name="details[0][dmm]" class="form-control" >
            </div>
            <div class="form-group">
                <label for="details[0][dmmm]">D min (mm)</label>
                <input type="number" name="details[0][dmmm]" class="form-control" >
            </div>
            <div class="form-group">
                <label for="details[0][dan]">DAN</label>
                <input type="number" name="details[0][dan]" class="form-control" >
            </div>
            <div class="form-group">
                <label for="details[0][silindir_cap]">Silindir Cap</label>
                <input type="file" name="details[0][silindir_cap]" class="form-control" id="silindir_cap">
            </div>
            <div class="form-group">
                <label for="details[0][seri_baglama]">Seri Bağlama</label>
                <input type="file" name="details[0][seri_baglama]" id="seri_baglama" class="form-control">
            </div>
            <button type="button" class="close-detail hidden-btn btn"></button>
        </div>
    </div>
    <button type="button" class="btn btn-success" style="margin:1rem;" id="add-detail">Add Detail</button>
    <hr>
    <button type="submit" class="btn btn-primary" style="margin:1rem;">Create Product</button>
</form>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('add-detail').addEventListener('click', function () {
            var detailCount = document.querySelectorAll('.detail').length;

            var detailTemplate = `
                <div class="detail" style="display:flex;">
                    <div class="form-group">
                        <label for="details[${detailCount}][mode]">Mode</label>
                        <input type="text" name="details[${detailCount}][mode]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][kursmm]">Kurs (mm)</label>
                        <input type="number" name="details[${detailCount}][kursmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][lmm]">L (mm)</label>
                        <input type="number" name="details[${detailCount}][lmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][lminmm]">L min (mm)</label>
                        <input type="number" name="details[${detailCount}][lminmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][dmm]">D (mm)</label>
                        <input type="number" name="details[${detailCount}][dmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][dmmm]">D min (mm)</label>
                        <input type="number" name="details[${detailCount}][dmmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][dan]">DAN</label>
                        <input type="number" name="details[${detailCount}][dan]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][dann]">DANN</label>
                        <input type="number" name="details[${detailCount}][dann]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][silindir_cap]">Silindir Cap</label>
                        <input type="file" name="details[${detailCount}][silindir_cap]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][seri_baglama]">Seri Bağlama</label>
                        <input type="file" name="details[${detailCount}][seri_baglama]" class="form-control" >
                    </div>
                    <div class="close-detail-container">
                        <button type="button" class="close-detail btn btn-danger">x</button>
                    </div>
                </div>
            `;

            document.getElementById('product-details').insertAdjacentHTML('beforeend', detailTemplate);

            // Close button event listener
            var closeButton = document.querySelector('.detail:last-child .close-detail');
            closeButton.addEventListener('click', function() {
                this.closest('.detail').remove();
            });
        });
    });
</script>

@endsection
