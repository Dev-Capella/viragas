@extends('voyager::master')

@section('content')
    <div class="page-content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-bordered">
                    <div class="panel-body">
                        <h1>Ürünler</h1>
                        <p>Welcome, {{ auth()->user()->name }}!</p>
                        
                        @if(session('success'))
                            <div class="alert alert-success">
                                {{ session('success') }}
                            </div>
                        @endif
                        <!-- Yeni Ürün Ekle Butonu -->
                        <a href="{{ route('products.create') }}" class="btn btn-primary">Yeni Ürün Ekle</a>

                        <!-- Ürün Listesi Tablosu -->
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Ürün Adı</th>
                                    <th>Açıklama</th>
                                    <th>Görseller</th>
                                    <th>Görsel Alt Etiket</th>
                                    <th>Ürün Sırası</th>
                                    <th>Meta Title</th>
                                    <th>Aksiyonlar</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($products as $product)
                                    <tr>
                                        <td>{{ $product->id }}</td>
                                        <td>{{ $product->name }}</td>
                                        <td>{{ $product->description }}</td>
                                        <td>
                                            @if ($product->image_gallery)
                                                @foreach(json_decode($product->image_gallery) as $image)
                                                    <img src="{{ asset('storage/images/' . $image) }}" alt="İmage" style="max-width: 50px;">
                                                @endforeach
                                            @endif
                                        </td>
                                        <td>{{ $product->image_alt }}</td>
                                        <td>{{ $product->order }}</td>
                                        <td>{{ $product->meta_title }}</td>
                                     
                                        <td style="width:1%;">
                                        <a href="{{ route('products.edit', $product->id) }}" class="btn btn-sm btn-warning" style="width:100%;">İncele</a>
                                            <a href="{{ route('products.edit', $product->id) }}" class="btn btn-sm btn-primary" style="width:100%;">Düzenle</a>
                                          
                                            <!-- Örneğin, products.index.blade.php -->


    <!-- Silme butonu modalı tetikleyecek -->
    <button type="button" style="width:100%;" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#confirmDeleteModal{{ $product->id }}">
        Sil
    </button>

    <!-- Silme işlemi için modal -->
    <div class="modal fade" id="confirmDeleteModal{{ $product->id }}" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteModalLabel{{ $product->id }}" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="display: flex; justify-content: space-between; width: 100%;">
                    <h2 class="modal-title" id="confirmDeleteModalLabel{{ $product->id }}">Ürünü Sil</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span style="font-size:2rem;" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>{{ $product->name }} isimli ürünü silmek istediğinize emin misiniz?</h3>
                </div>
                <div class="modal-footer" style="display:flex; justify-content:space-between;">
                    <!-- Silme işlemini onayla -->
                    <form action="{{ route('products.delete', $product->id) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Evet</button>
                    </form>
                    <!-- Modalı kapat -->
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hayır</button>
                </div>
            </div>
        </div>
    </div>





                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.delete-product').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productId = this.getAttribute('data-id');
            
            if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
                const form = document.createElement('form');
                form.setAttribute('method', 'POST');
                form.setAttribute('action', `/products/${productId}`);
                
                const hiddenMethodField = document.createElement('input');
                hiddenMethodField.setAttribute('type', 'hidden');
                hiddenMethodField.setAttribute('name', '_method');
                hiddenMethodField.setAttribute('value', 'DELETE');
                
                const csrfField = document.createElement('input');
                csrfField.setAttribute('type', 'hidden');
                csrfField.setAttribute('name', '_token');
                csrfField.setAttribute('value', '{{ csrf_token() }}'); // Laravel'de CSRF token'ını otomatik olarak yerleştirir
                
                form.appendChild(hiddenMethodField);
                form.appendChild(csrfField);
                
                document.body.appendChild(form);
                form.submit();
            }
        });
    });
});

        </script>
@endsection
