//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//<div class="col">${productoCarrito[0].count}</div>
var infoCarrito;

function mostrarCarrito(productoCarrito) {
    let contenidoCarrito = ""
    let sub = (productoCarrito[0].unitCost) * (productoCarrito[0].count)
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
                        <div class="col"><input type="number" onchange="calcularSub(${productoCarrito[0].unitCost})" value="${productoCarrito[0].count}" id="numCantidad" name="numCantidad" min="1" style="width: 100%;"></div>
                        <div class="col">${productoCarrito[0].unitCost} UYU</div>
                        <div class="col" id="subtotalProductos">${(productoCarrito[0].unitCost) * (productoCarrito[0].count)} UYU</div>

                    </div>
                </div>
                <div class="col-4" id="importeTotal" style="background-color: lightgrey;">
                    
                    <div class="row">
                    <h2>Importe total</h2>

                        <div class="col-6">Total</div>
                        <div class="col-6" id="totalProductos" >${(productoCarrito[0].unitCost) * (productoCarrito[0].count)} UYU</div>
                        
                        </div>
                        </div>
            </div>

            <br>

            </div>`
     
    document.getElementById("contenidoCarrito").innerHTML += contenidoCarrito;
}

function calcularSub(precioUni){
let cantidad = parseInt(document.getElementById(`numCantidad`).value);
subtotal = precioUni * cantidad;
document.getElementById(`subtotalProductos`).innerHTML = subtotal + " UYU";
document.getElementById(`totalProductos`).innerHTML = subtotal + " UYU";
}






document.addEventListener("DOMContentLoaded", function (e) {


    getJSONData(CART_INFO_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            infoCarrito = resultado.data.articles;

            mostrarCarrito(infoCarrito);
        }
    })



});