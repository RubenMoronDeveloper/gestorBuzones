<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Carta;
use Illuminate\Http\Request;


class CartaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $cartas = Carta::all();
       return $cartas;
    }

    public function listById(string $id){
        $cartas = Carta::where('id_piso',$id)->get();
        return  response ([
            "status" => 1,
            "msg" => "listado de cartas",
            "cartas" =>$cartas
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $carta = new Carta();
        $carta->remitente = $request->remitente;
        $carta->contenido = $request->contenido;
        $carta->id_piso = $request->id_piso;

        $carta->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $carta =  Carta::find($id);
        return $carta;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $carta = Carta::findOrFail($request->id);
        $carta->remitente = $request->remitente;
        $carta->contenido = $request->contenido;
        $carta->id_piso = $request->id_piso;

        $carta->save();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $carta = Carta::destroy($id);
        return $carta;
    }
}
