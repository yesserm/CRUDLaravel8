const button = document.getElementById('obtener').addEventListener('click',ObtenerValor);
const seguidores = document.getElementById('seguidores').addEventListener('click',ObtenerSeguidores);
const consultar = document.getElementById('consultar').addEventListener('click',ObtenerUsuario);

function ObtenerValor()
{
   fetch('https://api.github.com/users/yessermiranda13')
        .then(response => response.json())
        .then(function(perfil){
            let {avatar_url, name, company, location, followers, following } = perfil;
            let tarjeta = `
            <div class="max-w-sm rounded overflow-hidden shadow-lg  mx-4 ">
            <img class="w-full" src="${avatar_url}" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"> ${name}</div>
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
            document.getElementById('perfil').innerHTML = tarjeta;
        })
}

function ObtenerUsuario(e)
{
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
   fetch(`https://api.github.com/users/${usuario}`)
        .then(response => response.json())
        .then(function(perfil){
            let {avatar_url, name, company, location, followers, following } = perfil;
            let tarjeta = `
            <div class="max-w-sm rounded overflow-hidden shadow-lg  mx-4 ">
            <img class="w-full" src="${avatar_url}" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"> ${name ? name : ''}</div>
                <p class="text-gray-700 text-base">
                 ${company ? company : ''}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#seguidores ${followers}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#siguiendo ${following}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${location}</span>
            </div>
            </div>
            `;
            document.getElementById('perfil').innerHTML = tarjeta;
        })
}

function ObtenerSeguidores()
{
    fetch('https://api.github.com/users/yessermiranda13/followers')
    .then(response => response.json())
    .then(function(perfil){
        let seguidores = '';
        let avatar_url, login, html_url, type;
        perfil.forEach(element => {
        ({avatar_url, login, html_url, type } = element);
        seguidores += `
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-4 ">
        <img class="w-full" src="${avatar_url}" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"> ${login}</div>
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
        
        document.getElementById('perfil').innerHTML = seguidores;
    })
}

// obtener el modal
var modal = document.getElementById("myModal");

// obtener el boton para abrir el modal
var btn = document.getElementById("modal");

// obtener el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// cuando el usuario de clic que abra el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// cuando el usuario de clic en el modal que cierre
span.onclick = function() {
  modal.style.display = "none";
}

// cuando el usuario de clic fuera del modal que se cierre
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}