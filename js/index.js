fetch('https://dummyjson.com/recipes?limit=10')
    .then (function(response){
        return response.json();

    })
    .then(function(data){
        console.log(data);
        let mprincipal = document.querySelector(".mprincipal")
        let titulo = "";
        let receta = 10;

        for (let i=0; i<data.recipes.length; i++){
            console.log(i)
            titulo += `<article class= "fotos_art">
            <img src=${data.recipes[i].image} class="fotos_recetas" alt= "" >
           <a class="plato" href="./receta.html?id=${data.recipes[i].id}">
            ${data.recipes[i].name}</a>
            <p class= "dif"> Nivel de dificultad: ${data.recipes[i].difficulty}</p> </article>`;
            
        }
        mprincipal.innerHTML= titulo
        
    })
    .catch(function(error){
        console.log(error)
    })

    let cargarmasfotos = document.querySelector('.boton_mas')

    let skip = 10

        cargarmasfotos.addEventListener('click', function(){

            fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
            .then (function(response){
                return response.json();
        
            })
            .then(function(data){
                console.log(data);
                let mprincipal = document.querySelector(".mprincipal")
                let titulo = "";
                let receta = 10;
        
                for (let i=0; i<data.recipes.length; i++){
                    console.log(i)
                    titulo += `<article class= "fotos_art">
                    <img src=${data.recipes[i].image} class="fotos_recetas" alt= "" >
                   <a class="plato" href="./receta.html?id=${data.recipes[i].id}">
                    ${data.recipes[i].name}</a>
                    <p class= "dif"> Nivel de dificultad: ${data.recipes[i].difficulty}</p> </article>`;
                    
                }
                mprincipal.innerHTML += titulo
                
            })
            .catch(function(error){
                console.log(error)
            })

            skip += 10

        })