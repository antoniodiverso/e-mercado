//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var infoProducto;

function listaInfoProducto(producto) {
  let informacion = "<br><hr><br>";
  let imagenes = "";

  informacion +=`<h1>${producto.name}</h1>`
  informacion +=`<h2>USD${producto.cost}</h2><br>`
  informacion +=`<h5>Descripción</h5><hr>`
  informacion +=`<p>${producto.description}</p><hr>`
  informacion +=`<button id="volverListaProducto" onclick=window.location='products.html'>Volver a la lista</button>`
  informacion +=`<br><hr><br>`

  imagenes +=`<img src="img/prod1.jpg" width=15%  alt="">`
  imagenes +=`<img src="img/prod1_1.jpg" width=15%  alt="">`
  imagenes +=`<img src="img/prod1_2.jpg" width=15%  alt="">`
  imagenes +=`<img src="img/prod1_3.jpg" width=15%  alt="">`
  imagenes +=`<img src="img/prod1_4.jpg" width=15%  alt=""><br><hr>`
                    

 document.getElementById("infoProducto").innerHTML += informacion;
 document.getElementById("imagenesInfo").innerHTML += imagenes;
}


document.addEventListener("DOMContentLoaded", function(e){

  getJSONData(PRODUCT_INFO_URL).then(function (resultado) {
    if (resultado.status === "ok") {
      infoProducto = resultado.data;

      listaInfoProducto(infoProducto);
    }
})

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