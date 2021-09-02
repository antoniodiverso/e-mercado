var arrayProductos = [];
var maxPrecio;
var minPrecio;

function listaProductos(array) {
    let contendio = "<br><hr><br>"
    for (let i = 0; i < array.length; i++ ) {
        let producto = array[i]
        //if(((minPrecio == undefined) || (minPrecio != undefined && parseInt(valor.cost)>= minPrecio)) && ((maxPrecio == undefined) || (maxPrecio != undefined && parseInt(valor.cost)<=maxPrecio))){

               contendio +=`<p>Precio: ${producto.cost}  </p>`
               contendio +=`<p>Nombre: ${producto.name}  </p>`
               contendio +=`<p>Descripción: ${producto.description} </p>`
               contendio +=`<br><hr><br>`
                    
    }
    document.getElementById("listaProductos").innerHTML += contendio;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            arrayProductos = resultado.data;

            listaProductos(arrayProductos);
        }
    })
    document.getElementById("botonFiltrar").addEventListener("click", function () {

        minPrecio = document.getElementById("minimo").value;
        maxPrecio = document.getElementById("maximo").value;

        if ((minPrecio != undefined) && (minPrecio != "") && (parseInt(minPrecio)) >= 0) {
            minPrecio = parseInt(minPrecio);
        }
        else {
            minPrecio = undefined;
        }

        if ((maxPrecio != undefined) && (maxPrecio != "") && (parseInt(maxPrecio)) >= 0) {
            maxPrecio = parseInt(maxPrecio);
        }
        else {
            maxPrecio = undefined;
        }


        listaProductos(PRODUCTS_URL);


    })

    document.getElementById("limpiarFiltro").addEventListener("click", function () {

        minPrecio = document.getElementById("minimo").value = "";
        maxPrecio = document.getElementById("maximo").value = "";


        minPrecio = undefined;
        maxPrecio = undefined;

        listaProductos(PRODUCTS_URL);
    })


});