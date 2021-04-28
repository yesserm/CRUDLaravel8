<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white shadow-xl sm:rounded-lg">
                <button id="obtener" class="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-6  border border-blue-500 hover:border-transparent rounded">Obtener mi perfil de GitHub</button>
                <button id="seguidores" class="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-6  border border-blue-500 hover:border-transparent rounded">Obtener seguidores</button>
                <button id="modal" class="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-6  border border-blue-500 hover:border-transparent rounded">Abrir Modal</button>
                              
                <div class="flex bg-white overflow-hidden shadow-xl sm:rounded-lg py-3" id="miPerfil">
                <div>

                <div id="myModal" class="modal">
                    <!-- Contenido del modal -->
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Mi texto en una ventana modal..</p>
                        <form action="#" class="w-full max-w-lg" method="post">
                            @csrf()
                            <div class="flex items-center py-2">
                                <div class="w-full px-3">
                                    <label for="usuario" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Usuario</label>
                                </div>
                                <input type="text" id="usuario" name="usuario" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" tabindex="1">
                            </div>
                            <button type="submit" id="consultar" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" tabindex="4">Consultar</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <script src="{{ asset('js/codigo.js') }}"></script>
    </div>
</x-app-layout>
