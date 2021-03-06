//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var infoProducto;
var arrayComentarios = [];
var listaProductosRelacionados = [];
var indiceProductosRelacionados = [];

function listaInfoProducto(producto) {
  let informacion = "<br><hr><br>";
  let imagenes = "";

  informacion += `<h1>${producto.name}</h1>`
  informacion += `<h2>USD${producto.cost}</h2><br>`
  informacion += `<h5>Descripción</h5><hr>`
  informacion += `<p>${producto.description}</p><hr>`
  informacion += `<button class="btn btn-secondary" id="volverListaProducto" onclick=window.location='products.html'>Volver a la lista</button>`
  informacion += `<br><hr><br>`

  imagenes += `<img src="img/prod1.jpg" width=15%  alt="">`
  imagenes += `<img src="img/prod1_1.jpg" width=15%  alt="">`
  imagenes += `<img src="img/prod1_2.jpg" width=15%  alt="">`
  imagenes += `<img src="img/prod1_3.jpg" width=15%  alt="">`
  imagenes += `<img src="img/prod1_4.jpg" width=15%  alt=""><br><hr>`


  document.getElementById("infoProducto").innerHTML += informacion;
  document.getElementById("imagenesInfo").innerHTML += imagenes;
}

function listaComentarios(array) {
  let comentarios = "<h5>Comentarios</h5><hr>"
  for (let i = 0; i < array.length; i++) {
    let lista = array[i]

    comentarios += `<p><strong>${lista.user}</strong><p>`
    comentarios += `<p>${lista.dateTime}</p>`
    comentarios += `<p>${lista.description}</p>`

    for (let e = 1; e <= lista.score; e++) {
      comentarios += `<span class="fa fa-star checked"></span>`
    }

    for (let e = lista.score + 1; e <= 5; e++) {
      comentarios += `<span class="fa fa-star"></span>`
    }

    comentarios += `<hr>`

  }
  document.getElementById("listaComentarios").innerHTML += comentarios;
}

function productosRelacionados(array1, arrray2) {
  let listaCarousel = "";
  let datos ="<hr><br><h3>Productos Relacionados</h3><hr><br>";
  for (let i = 0; i < arrray2.length; i++) {
    let producto = array1[arrray2[i]]



    if (i == 0){
      datos += `<div class="carousel-item active">
        <img src="${producto.imgSrc}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        <h3>${producto.name}</h3> 
        <h4>USD ${producto.cost}</h4>
        </div>
        </div>`

      listaCarousel+=`<li data-target="#carouselExampleCaptions" data-slide-to="${i}" class="active"></li>`

    }
else{
      datos += `<div class="carousel-item">
      <img src="${producto.imgSrc}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      <h3>${producto.name}</h3> 
      <h4>USD ${producto.cost}</h4>
      </div>
      </div>`

      listaCarousel+=`<li data-target="#carouselExampleCaptions" data-slide-to="${i}"></li>`
}


}

  document.getElementById("carousel-indicators").innerHTML += listaCarousel;
  document.getElementById("carousel-inner").innerHTML += datos;
}


document.getElementById("submitComentario").addEventListener("click", function () {

  document.getElementById('listaComentarios').innerHTML = "";

  let d = new Date();
  let nuevoComentario = {
    score: parseInt(document.getElementById('selectEstrellas').value),
    user: JSON.parse(localStorage.getItem('User-Logged')).email,
    description: document.getElementById('comentarios').value,
    dateTime: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '  ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  }

  arrayComentarios.push(nuevoComentario);
  document.getElementById('comentarios').value = "";
  listaComentarios(arrayComentarios);

});

document.addEventListener("DOMContentLoaded", function (e) {

  getJSONData(PRODUCT_INFO_URL).then(function (resultado) {
    if (resultado.status === "ok") {
      infoProducto = resultado.data;

      listaInfoProducto(infoProducto);
    }
  });

  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultado) {
    if (resultado.status === "ok") {
      arrayComentarios = resultado.data;

      listaComentarios(arrayComentarios);
    }
  });

  getJSONData(PRODUCT_INFO_URL).then(function (resultado) {
    if (resultado.status === "ok") {
      indiceProductosRelacionados = resultado.data.relatedProducts;

      getJSONData(PRODUCTS_URL).then(function (resultado1) {
        if (resultado1.status === "ok") {
          listaProductosRelacionados = resultado1.data;



          productosRelacionados(listaProductosRelacionados, indiceProductosRelacionados)
        }
      });
    }
  });





});







