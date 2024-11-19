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
            titulo += `<>`

        }
        menu.innerHTML= titulo
        

    })
    .catch(function(error){
        console.log(error)
    })
