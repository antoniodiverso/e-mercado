//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("ingresar").addEventListener("click", function (){ 

    let email = document.getElementById("email");
    let contraseña = document.getElementById("contraseña")
    let camposCompletos = true      

    if (email.value === ""){
        email.classList.add("invalid");
        camposCompletos = false
    }
    else{
        email.classList.remove("invalid");
    }

    if (contraseña.value === ""){
        contraseña.classList.add("invalid");
        camposCompletos = false
    }
    else{
        contraseña.classList.remove("invalid");
    }


    if (camposCompletos){
        
            localStorage.setItem('User-Logged', JSON.stringify({ email: email.value}));

            window.location = "inicio.html" ;

        }
        else{
            alert("Debes ingresar los datos")
        }

    }

)

});