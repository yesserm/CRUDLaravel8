const botonObtener = document.getElementById('obtener').addEventListener('click',obtenerPerfil);
const botonSeguidores = document.getElementById('seguidores').addEventListener('click',obtenerSeguidores);
const botonModal = document.getElementById('modal').addEventListener('click',mostrarModal);
const botonUsuario = document.getElementById('consultar').addEventListener('click',mostrarUsuario);

function mostrarUsuario(e){
    e.preventDefault();
    let usuario = document.getElementById('usuario').value;
    fetch(`https://api.github.com/users/${usuario}`)
        .then(response => response.json())
        .then(function(perfil){
            let {name, avatar_url, company, location, followers, following} = perfil;
            let tarjeta = `
            <div id="miPerfil" class="max-w-sm rounded overflow-hidden shadow-lg  mx-4 ">
            <img class="w-full" src="${avatar_url}" alt="mi foto">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">${name}</div>
                <p class="text-gray-700 text-base">
                ${company}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#seguidores ${followers}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#siguiendo ${following}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${location}</span>
            </div>
            </div>
            `;
            document.getElementById('miPerfil').innerHTML = tarjeta;
        });
}


//obtener el modal
var modal = document.getElementById('myModal');

// obtener el boton de cerrar 
var span = document.getElementsByClassName('close')[0];

function mostrarModal(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

function obtenerSeguidores(){
    fetch('https://api.github.com/users/yessermiranda13/followers')
        .then(response => response.json())
        .then(function(seguidores){
            let login, avatar_url, html_url, type;
            let tarjetas = '';
            seguidores.forEach(element => {
                ({login, avatar_url, html_url, type} = element);
                tarjetas += `
                <div class="max-w-sm rounded overflow-hidden shadow-lg  mx-4 ">
                <img class="w-full" src="${avatar_url}" alt="mi foto">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">${login}</div>
                    <p class="text-gray-700 text-base">
                    ${html_url}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${type}</span>
                </div>
                </div>
                `;
            });
            document.getElementById('miPerfil').innerHTML = tarjetas;
        })
}


function obtenerPerfil()
{
    fetch('https://api.github.com/users/yessermiranda13')
        .then(response => response.json())
        .then(function(perfil){
            let {name, avatar_url, company, location, followers, following} = perfil;
            let tarjeta = `
            <div id="miPerfil" class="max-w-sm rounded overflow-hidden shadow-lg  mx-4 ">
            <img class="w-full" src="${avatar_url}" alt="mi foto">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">${name}</div>
                <p class="text-gray-700 text-base">
                ${company}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#seguidores ${followers}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#siguiendo ${following}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${location}</span>
            </div>
            </div>
            `;
            document.getElementById('miPerfil').innerHTML = tarjeta;
        });
}
