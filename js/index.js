fetch('https://dummyjson.com/recipes')
    .then (function(response){
        return response.json();

    })
    .then(function(data){
        console.log(data);
        let mprincipal = document.querySelector(".mprincipal")
        let titulo = "";
        let receta = 10;

        for (let i=0; i<10; i++){
            console.log(i)
            titulo += `<article class= "fotos_art">
            <img src=${data.recipes[i].image} class="fotos_recetas" alt= "" >
           <a class="plato" href="./detallerecetas.html?id=${data.recipes[i].id}">
            ${data.recipes[i].name}</a>
            <p class= "dif"> Nivel de dificultad: ${data.recipes[i].difficulty}</p> </article>`;
            
        }
        mprincipal.innerHTML= titulo

        let cargarmasfotos = document.querySelector('.boton_mas')
        cargarmasfotos.addEventListener('click', function(){
            let masfotos = receta + 10;
            if (receta < 30){
                if (masfotos > 30){
                    masfotos = 30;
                }
            }
            for(let i= receta; i< masfotos; i++){
                titulo += `<article class="fotos_art">
                <img src=${data.recipes[i].image} class="fotos_recetas" alt="">
                <a class= "plato" href= "./index.html?id=${data.recipes[i].id}">
                ${data.recipes[i].name} </a> 
                <p class= "dif"> Nivel de dificultad: ${data.recipes[i].difficulty}</p>
                </article>`;
                mprincipal.innerHTML= titulo;
                receta = masfotos

            }


        })
        

    })
    .catch(function(error){
        console.log(error)
    })
