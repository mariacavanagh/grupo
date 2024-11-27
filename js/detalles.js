let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let etiqueta = queryStringObj.get("tags");

console.log(etiqueta);

fetch(`https://dummyjson.com/recipes/tag/${etiqueta}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let sectiondet = document.querySelector("#sectiondet");
        let detcat = "";

        for(let i=0; i<data.recipes.length; i++){
            console.log(data.recipes[i].tags);
            if(data.recipes[i].tags.includes(etiqueta)){
                detcat +=`
                <article>
                <img src=${data.recipes[i].image} alt="" style="width:300px;">
                <a href="./detallerecetas.html?id=${data.recipes[i].id}"><p>Plato: ${data.recipes[i].name}</p></a>
                <p>Dificultad: ${data.recipes[i].difficulty}</p>
                </article>
                `;
            }
            sectiondet.innerHTML = detcat;
        }
    })

.catch(function(error){
    console.log(error);
});