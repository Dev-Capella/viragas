@extends('voyager::master')

@section('content')

    <div class="page-content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-bordered">
                    <div class="panel-body">
                        <h1>Ürün Sil</h1>
                        <h3 style="color:black;">{{ $product->name }} isimli ürünü silmek istediğinize emin misiniz ?</h3>
                        
                        <form action="{{ route('products.destroy', $product->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">Evet</button>
                            <a href="{{ route('products.destroy') }}" class="btn btn-secondary">Hayır</a>
                        </form>

                        @if(session('success'))
                            <div class="alert alert-success">
                                {{ session('success') }}
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
