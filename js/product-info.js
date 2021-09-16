//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var arrayInfoProducto = [];

function listaInfoProducto(array) {
  let contendio = ""
  for (let i = 0; i < array.length; i++ ) {
      let product = array[i]
             contendio +=`<p>${product.name}</p>`
             contendio +=`<p>Precio: ${product.cost}  </p>`
             contendio +=`<p>Descripción</p><br><hr><br>`
             contendio +=`<p>${product.description}</p>`
             contendio +=`<button id="volverListaProducto" onclick=window.location='products.html'>Volver a la lista</button>`
             contendio +=`<br><hr><br>`
                    
}
document.getElementById("infoProducto").innerHTML += contendio;
}


document.addEventListener("DOMContentLoaded", function(e){

  getJSONData(PRODUCT_INFO_URL).then(function (resultado) {
    if (resultado.status === "ok") {
      arrayInfoProducto = resultado.data;

        listaInfoProducto(arrayInfoProducto);
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