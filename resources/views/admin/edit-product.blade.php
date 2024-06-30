@extends('voyager::master')

@section('content')
<style>
.detail {
    display:flex !important;
    gap:10px !important;
    align-items:flex-end !important;
}
.form-group input{
    height:auto !important;
    padding: 20px !important ;
}
.hidden-btn{
    background :none !important; 
    border:none !important; 
    cursor:context-menu !important;
}
.close-icon {
    cursor: pointer;
    color: red;
    font-size: 20px;
    margin-left: 5px;
}
.close-icon:hover {
    text-decoration: underline;
}
.close-detail-container {
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
                    <h1>Edit Product</h1>
                   
                    @if(session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif

                    <form action="{{ route('products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" class="form-control" value="{{ $product->name }}" >
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea name="description" id="description" class="form-control" >{{ $product->description }}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="image_gallery">Image Gallery</label>
                            <input type="file" name="image_gallery[]" id="image_gallery" class="form-control" multiple>
                        </div>
                        <div class="form-group">
                            <label for="image_alt">Image Alt Text</label>
                            <input type="text" name="image_alt" id="image_alt" class="form-control" value="{{ $product->image_alt }}" >
                        </div>
                        <div class="form-group">
                            <label for="order">Order</label>
                            <input type="text" name="order" id="order" class="form-control" value="{{ $product->order }}" >
                        </div>
                        <div class="form-group">
                            <label for="meta_title">Meta Title</label>
                            <input type="text" name="meta_title" id="meta_title" class="form-control" value="{{ $product->meta_title }}" >
                        </div>
                        <div class="form-group">
                            <label for="meta_tag">Meta Tag</label>
                            <input type="text" name="meta_tag" id="meta_tag" class="form-control" value="{{ $product->meta_tag }}" >
                        </div>

                        <h3 style="margin-bottom:3rem; margin-top:3rem;">Ürün İçerik Detayı</h3>
                        <div id="product-details">
                            @foreach ($product->details as $index => $detail)
                                 <div class="detail" style="display:flex;">
                                    <input type="hidden" name="details[{{ $index }}][id]" value="{{ $detail->id }}">
                                    <div class="form-group">
                                        <label for="details[{{ $index }}][mode]">Mode</label>
                                        <input type="text" name="details[{{ $index }}][mode]" class="form-control" value="{{ $detail->mode }}" >
                                    </div>
                                    <div class="form-group">
                                        <label for="details[{{ $index }}][kursmm]">Kurs (mm)</label>
                                        <input type="text" name="details[{{ $index }}][kursmm]" class="form-control" value="{{ $detail->kursmm }}" >
                                    </div>
                                    <div class="form-group">
                                        <label for="details[{{ $index }}][lmm]">L (mm)</label>
                                        <input type="text" name="details[{{ $index }}][lmm]" class="form-control" value="{{ $detail->lmm }}" >
                                    </div>
                                    <div class="form-group">
                                        <label for="details[{{ $index }}][lminmm]">L min (mm)</label>
                                        <input type="text" name="details[{{ $index }}][lminmm]" class="form-control" value="{{ $detail->lminmm }}" >
                                    </div>
                                    <div class="form-group">
                                        <label for="details[{{ $index }}][dmm]">D (mm)</label>
                                        <input type="text" name="details[{{ $index }}][dmm]" class="form-control" value="{{ $detail->dmm }}" >
                                    </div>
                                    <div class="form-group">
                                        <label for="details[{{ $index }}][dmmm]">D min (mm)</label>
                                        <input type="text" name="details[{{ $index }}][dmmm]" class="form-control" value="{{ $detail->dmmm }}" >
                                    </div>
                                    <div class="form-group">
                                        <label for="details[{{ $index }}][dan]">DAN</label>
                                        <input type="text" name="details[{{ $index }}][dan]" class="form-control" value="{{ $detail->dan }}" >
                                    </div>
                                    <div class="form-group">
                                        @if($detail->silindir_cap)
                                            <div>
                                                <img style="width:50px" src="{{ url('storage/info_products/' . $detail->silindir_cap) }}" />
                                                <input style="width:40px;" type="checkbox" name="details[{{ $index }}][silindir_cap_delete]" value="true"> Sil
                                            </div>
                                        @endif
                                        <label for="details[{{ $index }}][silindir_cap]">Silindir Cap</label>                                
                                        <input type="file" name="details[{{ $index }}][silindir_cap]" class="form-control" id="silindir_cap">
                                    </div>

                                    <div class="form-group">
                                        @if($detail->seri_baglama)
                                            <div>
                                                <img style="width:50px" src="{{ url('storage/info_products/' . $detail->seri_baglama) }}" />
                                                <input style="width:40px;" type="checkbox" name="details[{{ $index }}][seri_baglama_delete]" value="true"> Sil
                                            </div>
                                        @endif
                                        <label for="details[{{ $index }}][seri_baglama]">Seri Bağlama</label>        
                                        <input type="file" name="details[{{ $index }}][seri_baglama]" class="form-control" id="seri_baglama">
                                    </div>
                                    <div class="form-group" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                        <input style="width:40px;" type="checkbox" name="details[{{ $index }}][delete]" value="true"> Sil
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        <button type="button" class="btn btn-success" style="margin:1rem;" id="add-detail">Add Detail</button>
                        <hr>
                        <button type="submit" class="btn btn-primary" style="margin:1rem;">Update Product</button>
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
                        <input type="text" name="details[${detailCount}][kursmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][lmm]">L (mm)</label>
                        <input type="text" name="details[${detailCount}][lmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][lminmm]">L min (mm)</label>
                        <input type="text" name="details[${detailCount}][lminmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][dmm]">D (mm)</label>
                        <input type="text" name="details[${detailCount}][dmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][dmmm]">D min (mm)</label>
                        <input type="text" name="details[${detailCount}][dmmm]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][dan]">DAN</label>
                        <input type="text" name="details[${detailCount}][dan]" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][silindir_cap]">Silindir Cap</label>
                        <input type="file" name="details[${detailCount}][silindir_cap]" class="form-control" id="silindir_cap">
                    </div>
                    <div class="form-group">
                        <label for="details[${detailCount}][seri_baglama]">Seri Bağlama</label>
                        <input type="file" name="details[${detailCount}][seri_baglama]" class="form-control" id="seri_baglama">
                    </div>
                    <div class="close-detail-container form-group">
                        <button style="width:40px;" type="button" class="close-detail btn btn-danger">x</button>
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
    document.addEventListener('DOMContentLoaded', function () {
    // Close icon click event listener
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('close-icon')) {
                var index = event.target.getAttribute('data-index');
                var type = event.target.getAttribute('data-type');
                
                // Clear the image and set null value
                var imgElement = document.querySelector(`[name="details[${index}][${type}]"] + img`);
                if (imgElement) {
                    imgElement.remove();
                }

                // Clear the file input value
                var fileInput = document.querySelector(`[name="details[${index}][${type}]"]`);
                if (fileInput) {
                    var newFileInput = document.createElement('input');
                    newFileInput.type = 'file';
                    newFileInput.name = fileInput.name;
                    newFileInput.className = fileInput.className;
                    newFileInput.id = fileInput.id;
                    fileInput.parentNode.replaceChild(newFileInput, fileInput);
                }
                fileInput.value = null;
                console.log(fileInput);
                console.log(fileInput.value);
            }
        });
    });
</script>

@endsection
