fetch('https://dummyjson.com/recipes')
    .then (function(response){
        return response.json();

    })
    .then(function(data){
        console.log(data);
        let mprincipal = document.querySelector(".mprincipal")
        let titulo = ""

        for (let i=0; i<10; i++){
            console.log(i)
            titulo += `<article class= "fotos_art">
            <img src=${data.recipes[i].image} alt= "" >
            <article class="foto_plato"> <a class="plato" href="./index.html?id=${data.recipes[i].id}">
            ${data.recipes[i].name}</a>
            <p class= "dif"> Nivel de dificultad: ${data.recipes[i].difficulty}</p></article> </article>`;

        }
        mprincipal.innerHTML= titulo

        let cargarmasfotos = document.querySelector('.boton_mas')
        cargarmasfotos.addEventListener('click', function(){
            for(let i=10; i<20; i++){
                titulo += `<article class="foto_plato">
                <img src=${data.recipes[i].image} alt="">
                <div> <a class= "plato" href= "./index.html?id=${data.recipes[i].id}">
                ${data.recipes[i].name} </a> 
                <p class= "dif"> Nivel de dificultad: ${data.recipes[i].difficulty}</p>
                </div>
                </article>`;
                mprincipal.innerHTML= titulo
            }
        })
        

    })
    .catch(function(error){
        console.log(error)
    })
