let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let etiqueta = queryStringObj.get("tags");

let sectiondet = document.querySelector("#sectiondet");
sectiondet.innerHTML = etiqueta; 

fetch(`https://dummyjson.com/recipes/tag/${etiqueta}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        

        for(let i=0; i<data.recipes.length; i++){
            sectiondet.innerHTML +=            
                `<article>
                <img src=${data.recipes[i].image} alt="" style="width:300px;">
                <a href="./detallerecetas.html?id=${data.recipes[i].id}"><p>Plato: ${data.recipes[i].name}</p></a>
                <p>Dificultad: ${data.recipes[i].difficulty}</p>
                </article>`;
        }
    })

.catch(function(error){
    console.log(error);
});