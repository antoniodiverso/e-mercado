//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var infoCarrito;

function mostrarCarrito(productoCarrito) {
    let contenidoCarrito = ""
    contenidoCarrito += `
        <div class="container">

        <br>

            <div class="row">
                <div class="col-8" id="productBody">
                    <h1>Carrito</h1>
                    <div class="row">
                        <div class="col-6">Producto</div>
                        <div class="col">Cantidad</div>
                        <div class="col">Precio</div>
                        <div class="col">Subtotal</div>

                    </div>
                    <div class="row" >
                        <div class="col-6">
                            <div class="row">
                                <div class="col-6"><img src="img/tree1.jpg" width=100% alt=""></div>
                                <div class="col-6">${productoCarrito[0].name}</div>
                            </div>
                        </div>
                        <div class="col">${productoCarrito[0].count}</div>
                        <div class="col">${productoCarrito[0].unitCost} UYU</div>
                        <div class="col">${(productoCarrito[0].unitCost) * (productoCarrito[0].count)} UYU</div>

                    </div>
                </div>
                <div class="col-4" id="importeTotal" style="background-color: lightgrey;">
                    
                    <div class="row">
                    <h2>Importe total</h2>

                        <div class="col-6">Total</div>
                        <div class="col-6">${(productoCarrito[0].unitCost) * (productoCarrito[0].count)} UYU</div>
                        
                        <div class="col-6">Envio</div>
                        <div class="col-6">${(((productoCarrito[0].unitCost) * (productoCarrito[0].count)) * 15 )/100}</div>

                        <div class="col-6">Gran Total</div>
                        <div class="col-6">${((productoCarrito[0].unitCost) * (productoCarrito[0].count)) + ((((productoCarrito[0].unitCost) * (productoCarrito[0].count)) * 15 )/100)}</div>

              
                        </div>
                        </div>
            </div>

            <br>

            </div>`
     
    document.getElementById("contenidoCarrito").innerHTML += contenidoCarrito;
}





document.addEventListener("DOMContentLoaded", function (e) {


    getJSONData(CART_INFO_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            infoCarrito = resultado.data.articles;

            mostrarCarrito(infoCarrito);
        }
    })



});