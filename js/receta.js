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
        <article class="articlerec" style="width:500px;">
        <div class= "cajadetallerecetas" >
        <h2 class= "nombre_receta">${data.name}</h2>
        <p class= "detarecp" >Instrucciones de preparacion: ${data.instructions}</p>
        <p>Tiempo de preparacion: ${data.prepTimeMinutes} </p>
        <p>Tiempo de cocción: ${data.cookTimeMinutes}</p>
        <img src="${data.image}" alt="" class="imagen_detalles" style="width:300px;">
        <a href="./categorias.html" class="arecetas" style="color:black; text-decoration:none;"><p> Categorias: ${data.mealType}</p></a> 
        </div>
        </article>
        `
    })

    .catch(function(error){
        console.error(error);
        document.body.innerHTML = "<h2>No se pudo cargar la receta</h2>";
    })





    
