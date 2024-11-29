let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let etiqueta = queryStringObj.get("tag");

let sectiondet = document.querySelector("#sectiondet");
let titulo = document.querySelector("h2")
titulo.innerText = etiqueta

fetch(`https://dummyjson.com/recipes/tag/${etiqueta}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        

        for(let i=0; i<data.recipes.length; i++){
            sectiondet.innerHTML +=            
                `<article class = "contenedordetalles">
                <img class="imagendeta" src=${data.recipes[i].image} alt="">
                <a href="./detallerecetas.html?id=${data.recipes[i].id}"><p class= "platillo">Plato: ${data.recipes[i].name}</p></a>
                <p>Dificultad: ${data.recipes[i].difficulty}</p>
                </article>`;
        }
    })

.catch(function(error){
    console.log(error);
});