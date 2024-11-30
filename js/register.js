let registro = document.querySelector(".forms");

let email = document.querySelector(".email");
let contrasena = document.querySelector(".password");
let errorcontrasena = document.querySelector(".errorcontrasena")
let erroremail = document.querySelector(".erroremail")





registro.addEventListener('submit', function(validar){
    validar.preventDefault();

   if(email.value == ""){
        console.log("Por favor complete el campo del email"); 
        erroremail.innerHTML = "Por favor complete el campo del email"
    }else if(contrasena.value == ""){
        console.log("Por favor complete el campo contraseña");
        errorcontrasena.innerHTML= "Por favor complete el campo de la contraseña"
    } else{
        registro.submit()

    }

    

})