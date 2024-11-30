fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let seccion = document.querySelector("#sectioncate");
    let cat = "";

    for (let i=0; i<data.length;i++){
        cat+=
        
        `
        <section class="articlecate">
            <a href="./category.html?tag=${data[i]}" class="acate">${data[i]}</a>
        </section>`
    }

    seccion.innerHTML = cat;
})

.catch(function(error){
    console.log("Error ", error );
});