//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//<div class="col">${productoCarrito[0].count}</div>
var infoCarrito;
var modalTarjeta;
var modalBanco;
var modoPago = "";


function mostrarModalTarjeta() {
    document.getElementById('contenidoModal').innerHTML = '';
    let contenidoModal = ""


    contenidoModal = `   <form>
    <div class="form-group">
      <label for="modalInputTarjeta">Número de tarjeta</label>
      <input type="number" class="form-control" id="modalInputTarjeta" aria-describedby="modalInputTarjetaHelp">
      <small id="modalInputTarjetaHelp" class="form-text text-muted">Ingrese los 16 dígitos de la tarjeta</small>
    </div>
    <div class="form-group">
      <label for="modalInputVencimiento">Fecha de vencimiento</label>
      <input type="date" class="form-control" id="modalInputVencimiento">
    </div>
    <div class="form-group">
      <label for="modalInputCvc">CVC</label>
      <input type="number" class="form-control" id="modalInputCvc" aria-describedby="modalInputCvcHelp" style="width: 25%;">
      <small id="modalInputCvcHelp" class="form-text text-muted">Ingrese los 3 dígitos</small>
    </div>
  </form>`

    document.getElementById('contenidoModal').innerHTML += contenidoModal;
}

function mostrarModalBanco() {
    document.getElementById('contenidoModal').innerHTML = '';
    let contenidoModal = ""


    contenidoModal = `<form>
    <div class="form-group">
      <label for="modalInputCuentaOrigen">Número de cuenta origen</label>
      <input type="number" class="form-control" id="modalInputCuentaOrigen" aria-describedby="modalInputCuentaOrigen">
    </div>
    <div class="form-group">
      <label for="modalInputLlaveDigital">Llave digital</label>
      <input type="password" class="form-control" id="modalInputLlaveDigital">
    </div>
  </form>`

    document.getElementById('contenidoModal').innerHTML += contenidoModal;
}




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
                <div class="col"><input type="number" onkeydown="return false" onchange="calcularImportes(${productoCarrito[0].unitCost}), mostrarImporteTotal()" value="${productoCarrito[0].count}" id="numCantidad" name="numCantidad" min="1" style="width: 50px;"></div>
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
                    

                        <div class="col-6">Subtotal</div>
                        <div class="col-3" id="importeSubtotal" style="text-align: right;">${(productoCarrito[0].unitCost) * (productoCarrito[0].count)}</div>
                        <div class="col-3">UYU</div>

                        <div class="col-6">Envío</div>
                        <div class="col-3" id="valorEnvio" style="text-align: right;">30</div>
                        <div class="col-3">UYU</div>

                        <div class="col-6">Total</div>
                        <div class="col-3" id="mostrarTotal" style="text-align: right;">230</div>
                        <div class="col-3">UYU</div>
                        
                        </div>
                        </div>
                        <br><br>
                    <div class="col">
                        <button class="btn btn-success" data-toggle="modal" data-target="#modalMetodoPago">Método de pago</button>
                    </div><br>
                    <div class="col">
                    <button onclick="funcionFinalizarCompra()" class="btn btn-primary" id="finalizarCompra">Finalizar Compra</button>
                    
                    
                </div>
                    <div id="alertaMetodoPago" style="color: red;"></div><br>
                    <div id="alertaMetodoEnvio" style="color: red;"></div>
                
                        </div>
            </div>
       

            <br>

           `

    document.getElementById("contenidoCarrito").innerHTML += contenidoCarrito;
}

function calcularImportes(precioUni) {
    //Calculo del subtotal
    let cantidad = parseInt(document.getElementById(`numCantidad`).value);
    subtotal = precioUni * cantidad;
    document.getElementById(`subtotalProductos`).innerHTML = subtotal + "UYU";
    document.getElementById(`importeSubtotal`).innerHTML = subtotal;

    //Calculo del envío por separado
    let envio;
    let selectEnvio = document.getElementById("selectEnvio").value;

    if (selectEnvio == 1) {
        envio = ((15 * (subtotal)) / 100);
        document.getElementById("valorEnvio").innerHTML = envio;
    }
    else if (selectEnvio == 2) {
        envio = ((7 * (subtotal)) / 100);
        document.getElementById("valorEnvio").innerHTML = envio;
    } else if (selectEnvio == 3) {
        envio = ((5 * (subtotal)) / 100);
        document.getElementById("valorEnvio").innerHTML = envio;
    }


}

function mostrarImporteTotal() {
    total = 0;
    total = parseInt(document.getElementById(`subtotalProductos`).innerHTML) + parseInt(document.getElementById(`valorEnvio`).innerHTML);
    document.getElementById("mostrarTotal").innerHTML = `<div id="importeTotal" style="text-align: right;">${total}</div>`;


}

function validarPago() {
    pagoValido = false;


    if (modoPago == "Tarjeta") {
        modalInputTarjeta = document.getElementById("modalInputTarjeta").value;
        modalInputVencimiento = document.getElementById("modalInputVencimiento").value;
        modalInputCvc = document.getElementById("modalInputCvc").value;
        if (modalInputTarjeta == "" || modalInputVencimiento == "" || modalInputCvc == "") {
            pagoValido = false;
            document.getElementById("alertaMetodoPago").innerHTML = "Llene los datos de la tarjeta";
        }
        else {
            pagoValido = true;
            document.getElementById("alertaMetodoPago").innerHTML = "";
        }
    }
    else if (modoPago == "Cuenta") {
        modalInputCuentaOrigen = document.getElementById("modalInputCuentaOrigen").value;
        modalInputLlaveDigital = document.getElementById("modalInputLlaveDigital").value;
        if (modalInputCuentaOrigen == "" || modalInputLlaveDigital == "") {
            pagoValido = false;
            document.getElementById("alertaMetodoPago").innerHTML = "Llene los datos de la cuenta bancaria";
        }
        else {
            pagoValido = true;
            document.getElementById("alertaMetodoPago").innerHTML = "";
        }
    }
    else if (modoPago == "") {
        pagoValido = false;
        document.getElementById("alertaMetodoPago").innerHTML = "Seleccione método de pago";
    }


    return pagoValido;

}

function validarDatosEnvio(){
    envioValido = false;
    calle = document.getElementById("calle").value;
    numero = document.getElementById("numero").value;
    esquina = document.getElementById("esquina").value;
    pais = document.getElementById("pais").value;

    if (calle == "" || numero == "" || esquina == "" || pais == ""){
        envioValido = false;
        document.getElementById("alertaMetodoEnvio").innerHTML = "Llene los datos de el envío";
    }else{
        envioValido = true;
        document.getElementById("alertaMetodoEnvio").innerHTML = "";
    }

    return envioValido;

}

function validarCarrito(){
    if (validarDatosEnvio() && validarPago()){
        return true;
    }
    else{
        return false;
    }
}
function funcionFinalizarCompra(){

        if (validarCarrito()){
            alert("Compra exitosa!");
            window.location = "cart.html"
        }

    
    

}


document.addEventListener("DOMContentLoaded", function (e) {


    getJSONData(CART_INFO_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            infoCarrito = resultado.data.articles;

            mostrarCarrito(infoCarrito);
        }
    })


});


document.getElementById("pagoTarjeta").addEventListener("click", function () {
    mostrarModalTarjeta()
    modoPago = "Tarjeta";




});

document.getElementById("pagoBanco").addEventListener("click", function () {
    mostrarModalBanco()
    modoPago = "Cuenta";


});



