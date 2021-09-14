//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
 document.getElementById("radioEstrella1");
 document.getElementById("radioEstrella2");
 document.getElementById("radioEstrella3");
 document.getElementById("radioEstrella4");
 document.getElementById("radioEstrella5");

});

document.getElementById("estrella1").addEventListener("click", function (){

  var redioEstrella = document.getElementById("radioEstrella1");
  var estrella = ddocument.getElementById("estrella1");

  estrella.classList.remove("fa fa-star")
  estrella.classList.add("fa fa-star checked")

});