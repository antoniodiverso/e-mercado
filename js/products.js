//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
   
    function listaProductos(url){
        fetch(url)
            .then(respuesta => respuesta.json())
    
            .then(datos => {
                   
                    for (valor of datos){
                        document.getElementById("listaProductos").innerHTML += `

                        <p>Precio: ${valor.cost} </p>
                        <p>Nombre: ${valor.name} </p>
                        <p>Descripción: ${valor.description} </p>
                        <hr>
                        ` 
                            
                    }
    
            })
            .catch(error => alert("Hubo un error: " + error));
    }

    listaProductos(PRODUCTS_URL);

});