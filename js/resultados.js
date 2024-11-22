let busqueda = location.search;
let busquedaObjet = new URLSearchParams(busqueda);
let resultado = busquedaObjet.get("buscador");
console.log(resultado);

let recetas = document.querySelector(".sectionres");

let buscar = document.querySelector(".res");
let aviso = `Resultado para ${resultado}:`;
buscar.innerHTML = aviso;



if(resultado){
    fetch(`https://dummyjson.com/recipes/tag/${resultado}`)

    .then(function (response){
        return response.json();
    })

    .then(function (data){
        let recipes = data.recipes;
        let buscados = "";
        let recetas = document.querySelector(".sectionres");
        for (let i=0; i<recipes.length; i++) {
            buscados += `
                <article style="padding:15px;">
                    <img style="width:300px"  src=${recipes[i].image} alt="">
                    <p>Name: ${recipes[i].name}</p>
                    <p><a href="./detalles.html?id=${recipes[i].image}" style="text-decoration:none; color:black;"  alt="">Detalles: </a></p>
                </article>
            `;
        }
        recetas.innerHTML=buscados;

        if(buscados == ""){
            recetas.innerHTML = `No existe el resultado de ${resultado}"`
        }
    })
}



