//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//<div class="col">${productoCarrito[0].count}</div>
var infoCarrito;

function mostrarCarrito(productoCarrito) {
    let contenidoCarrito = ""
    contenidoCarrito += `
      
    <br>
            <div class="row">
                <div class="col-12 col-md-8" id="productBody">
                    <h1>Carrito</h1>
                    <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="col">Producto</div>
                <div class="col">
                <div class="row">
                        <div class="col-6"><img src="img/tree1.jpg" width=100% alt=""></div>
                    <div class="col-6">${productoCarrito[0].name}</div>
                    </div>
                </div>
                </div>

            <div class="col-12 col-lg-2">
                <div class="col">Cantidad</div>
                <div class="col"><input type="number" onkeydown="return false" onchange="calcularSub(${productoCarrito[0].unitCost})" value="${productoCarrito[0].count}" id="numCantidad" name="numCantidad" min="1" style="width: 50px;"></div>
            </div>
            

            <div class="col-12 col-lg-2">
                <div class="col">Precio</div>
                <div class="col-12">${productoCarrito[0].unitCost}UYU</div>
            </div>

            <div class="col-12 col-lg-2">
                <div class="col">Subtotal</div>
                <div class="col-12" id="subtotalProductos">${(productoCarrito[0].unitCost) * (productoCarrito[0].count)}UYU</div>
            </div>
            </div>
        </div>
                  
                
               
                <div class="col-12 col-md-4" id="importeTotal" style="background-color: lightgrey;">
                <h2>Importe total</h2>
                <div class="col">
                    <div class="row">
                    

                        <div class="col-6">Total</div>
                        <div class="col-6" id="totalProductos" >${(productoCarrito[0].unitCost) * (productoCarrito[0].count)}UYU</div>
                        
                        </div>
                        </div>
                        <br><br>
                    <div class="col">
                        <button class="btn btn-success">Método de pago</button>
                    </div><br>
                    <div class="col">
                    <button class="btn btn-primary">Finalizar Compra</button>
                </div>
                
                        </div>
            </div>
       

            <br>

           `

    document.getElementById("contenidoCarrito").innerHTML += contenidoCarrito;
}

function calcularSub(precioUni) {
    let cantidad = parseInt(document.getElementById(`numCantidad`).value);
    subtotal = precioUni * cantidad;
    document.getElementById(`subtotalProductos`).innerHTML = subtotal + "UYU";
    document.getElementById(`totalProductos`).innerHTML = subtotal + "UYU";
}






document.addEventListener("DOMContentLoaded", function (e) {


    getJSONData(CART_INFO_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            infoCarrito = resultado.data.articles;

            mostrarCarrito(infoCarrito);
        }
    })



});