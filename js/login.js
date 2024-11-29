let login = document.querySelector(".forms");

let email = document.querySelector(".email");
let contrasena = document.querySelector(".password");


login.addEventListener('submit', function(validar){
    validar.preventDefault();
   if(email.value === ""){
        alert("Por favor complete el campo email");
        return; 
    }
    if(contrasena.value === ""){
        alert("Por favor complete el campo contraseña");
        return;
    }

    login.submit()
    

})