//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function (e) {
    
    let nameLocal = localStorage.getItem('Name-Perfil');
    let edadLocal = localStorage.getItem('Edad-Perfil');
    let emailLocal = localStorage.getItem('Email-Perfil');
    let telLocal = localStorage.getItem('Telefono-Perfil');
    let urlLocal = localStorage.getItem('URL-Imagen');

    let inputName = document.getElementById("inputName");
    let inputEdad = document.getElementById("inputEdad");
    let inputEmail = document.getElementById("inputEmail"); 
    let inputTel = document.getElementById("inputTel"); 
    let inputUrlImagen = document.getElementById("inputUrl"); 

        
  if(urlLocal){
    urlLocal = JSON.parse(urlLocal);

    inputUrlImagen.value += urlLocal.urlImagen;

    document.getElementById("imagenPerfil").src = inputUrlImagen.value;
  }
    
    
  if(nameLocal){
    nameLocal = JSON.parse(nameLocal);

    inputName.value += nameLocal.nombrePerfil;
  }

  if(edadLocal){
    edadLocal = JSON.parse(edadLocal);

    inputEdad.value += edadLocal.edadPerfil;
  }

  if(emailLocal){
    emailLocal = JSON.parse(emailLocal);

    inputEmail.value += emailLocal.emailPerfil;
  }

  if(telLocal){
    telLocal = JSON.parse(telLocal);

    inputTel.value += telLocal.telPerfil;
  }


  document.getElementById("guardarDatos").addEventListener("click", function (){ 


    localStorage.setItem('Name-Perfil', JSON.stringify({ nombrePerfil: inputName.value}));

    localStorage.setItem('Edad-Perfil', JSON.stringify({ edadPerfil: inputEdad.value}));

    localStorage.setItem('Email-Perfil', JSON.stringify({ emailPerfil: inputEmail.value}));

    localStorage.setItem('Telefono-Perfil', JSON.stringify({ telPerfil: inputTel.value}));


});

document.getElementById("guardarImagen").addEventListener("click", function (){

    localStorage.setItem('URL-Imagen', JSON.stringify({ urlImagen: inputUrl.value}));

    window.location = 'my-profile.html';
});


});


