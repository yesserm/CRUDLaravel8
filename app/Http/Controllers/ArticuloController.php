<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticuloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $preciomayor = DB::table('articulos')->max('precio');
        // $articulos = DB::table('articulos')->select('id', 'codigo', 'descripcion', 'cantidad', 'precio')->where('precio', '=', $preciomayor)->get();
        $articulos = DB::table('articulos')->select('id', 'codigo', 'descripcion', 'cantidad', 'precio')->get();
        return view('articulo.index')->with('articulos', $articulos);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('articulo.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // $articulos = new Articulo();
        // $articulos->codigo = $request->get('codigo');
        // $articulos->descripcion = $request->get('descripcion');
        // $articulos->cantidad = $request->get('cantidad');
        // $articulos->precio = $request->get('precio');


        //$articulos->save();

        $codigo = $request->get('codigo');
        $descripcion = $request->get('descripcion');
        $cantidad = $request->get('cantidad');
        $precio = $request->get('precio');

        DB::insert('insert into articulos (codigo, descripcion, cantidad, precio) values(?, ?, ?, ?)', [$codigo, $descripcion, $cantidad, $precio ]);
        
        return redirect('/articulos');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $articulo = Articulo::find($id);
        return view('articulo.edit')->with('articulo', $articulo);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        // $articulo = Articulo::find($id);
        // $articulo->codigo = $request->get('codigo');
        // $articulo->descripcion = $request->get('descripcion');
        // $articulo->cantidad = $request->get('cantidad');
        // $articulo->precio = $request->get('precio');

        // $articulo->save();

        // $codigo = $request->get('codigo');
        // $descripcion = $request->get('descripcion');
        // $cantidad = $request->get('cantidad');
        // $precio = $request->get('precio');
        // $fecha = date("y.m.d");
        // DB::update('update articulos set codigo = ?, descripcion = ?, cantidad = ?, precio = ? where id = ?', [$codigo, $descripcion, $cantidad, $precio, $id ]);

        DB::table('articulos')->where('id', $id)->decrement('cantidad', 1);
        return redirect('/articulos');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $articulo = Articulo::find($id);
        $articulo->delete();

        return redirect('/articulos');
    }
}
