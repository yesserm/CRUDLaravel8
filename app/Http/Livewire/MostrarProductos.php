<?php

namespace App\Http\Livewire;

use Livewire\Component;

class MostrarProductos extends Component
{
    protected $listeners = ['mostrar' => 'render'];

    public function render()
    {
        return view('livewire.mostrar-productos');
    }
}
