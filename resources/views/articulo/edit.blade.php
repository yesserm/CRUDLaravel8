@extends('layouts.plantillabase')

@section('contenido')
<h1>CREAR REGISTROS</h1>
<form action="/articulos/{{ $articulo->id }}" method="post">
    @csrf
    @method('PUT')
    <div class="mb-3">
        <label for="" class="form-label">Código</label>
        <input type="text" id="codigo" name="codigo" class="form-control" value="{{$articulo->codigo}}" tabindex="1">
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Descripción</label>
        <input type="text" id="descripcion" name="descripcion" value="{{$articulo->descripcion}}" class="form-control" tabindex="2">
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Cantidad</label>
        <input type="number" id="cantidad" name="cantidad" value="{{$articulo->cantidad}}" class="form-control" tabindex="3">
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Precio</label>
        <input type="number" id="precio" name="precio" step="any" value="{{$articulo->precio}}" class="form-control" tabindex="4">
    </div>
    <a href="/articulos" class="btn btn-secondary" tabindex="5">Cancelar</a>
    <button type="submit" class="btn btn-primary" tabindex="4">Guardar</button>
</form>
@endsection