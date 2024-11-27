let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let sacar = queryStringObj.get("id")

console.log(sacar)
let section_recetas = document.querySelector("#detallerec")

fetch(`https://dummyjson.com/recipes/${sacar}`)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);
        detallerec.innerHTML += `
        <article class="articlerec">
        <div class"contenedor">
        <h2 style="font-weight:bold;">${data.name}</h2>
        <p>Instrucciones de preparacion: ${data.instructions}</p>
        <p>Tiempo de cocción: ${data.cookTimeMinutes}</p>
        <img src="${data.image}" alt="" class="imagen_detalles">
        <a href="./categorias.html" class="arecetas"><p> Categorias: </p>${data.mealType}</a> 
        </div>
        </article>
        `
    })

    .catch(function(error){
        console.error(error);
        document.body.innerHTML = "<h2>No se pudo cargar la receta</h2>";
    })





    
