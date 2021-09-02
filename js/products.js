//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    var maxPrecio;
    var minPrecio;
   
    function listaProductos(url){
        fetch(url)
            .then(respuesta => respuesta.json())
    
            .then(datos => {
                   
                    for (valor of datos){

                        if(((minPrecio == undefined) || (minPrecio != undefined && parseInt(valor.cost)>= minPrecio)) && ((maxPrecio == undefined) || (maxPrecio != undefined && parseInt(valor.cost)<=maxPrecio))){

                        document.getElementById("listaProductos").innerHTML += `

                        <p>Precio: ${valor.cost}  </p>
                        <p>Nombre: ${valor.name}  </p>
                        <p>Descripción: ${valor.description} </p>
                        <hr>
                        ` 
                            
                    }
                    }
            })
            .catch(error => alert("Hubo un error: " + error));
    }

    listaProductos(PRODUCTS_URL);


    document.getElementById("botonFiltrar").addEventListener("click", function(){

        minPrecio = document.getElementById("minimo").value;
        maxPrecio = document.getElementById("maximo").value;

        if((minPrecio != undefined) && (minPrecio != "") && (parseInt(minPrecio))>=0 ){
            minPrecio = parseInt(minPrecio);
        }
        else{
            minPrecio = undefined;
        }

        if((maxPrecio != undefined) && (maxPrecio != "") && (parseInt(maxPrecio))>=0 ){
            maxPrecio = parseInt(maxPrecio);
        }
        else{
            maxPrecio = undefined;
        }


        listaProductos(PRODUCTS_URL);


    })

    document.getElementById("limpiarFiltro").addEventListener("click", function(){

        minPrecio = document.getElementById("minimo").value="";
        maxPrecio = document.getElementById("maximo").value="";


        minPrecio = undefined;
        maxPrecio = undefined;

        listaProductos(PRODUCTS_URL);
    })


});