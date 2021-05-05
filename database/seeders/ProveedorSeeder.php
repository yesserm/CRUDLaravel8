<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProveedorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('proveedores')->insert([
            [
                'nombres' => 'Yesser Joel',
                'apellidos' => 'Miranda Guillen',
                'telefono' => '+50589364636'
            ],
            [
                'nombres' => 'Beatriz Elizabeth',
                'apellidos' => 'Sanchez Flores',
                'telefono' => '+50589364636'
            ]
        ]);
    }
}
