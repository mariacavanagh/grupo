let form = document.querySelector(".botonreg");

let email = document.querySelector("#email");
let contrasena = document.querySelector("#contrasena");
let emailmal= document.querySelector(".emailmal");
let errorcontra = document.querySelector(".errorcontra");

console.log(form);
console.log(email);

form.addEventListener('submit', function(validar){
    validar.preventDefault();
    if(email.value == ""){
        console.log("Se debe completar el campo")
        emailmal.innerHTML = `<p>Se debe completar el campo</p>`;
    }else if(contrasena.value == ""){
        console.log("Se debe completar el campo")
        errorcontra.innerHTML = `<p>Se debe completar el campo</p>`;
    }else{
        form.submit()
    }
})