//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//<div class="col">${productoCarrito[0].count}</div>
var infoCarrito;
var modalTarjeta;
var modalBanco;

function mostrarModalTarjeta(){
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

function mostrarModalBanco(){
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
                    

                        <div class="col-6">Subtotal</div>
                        <div class="col-6" id="importeSubtotal">${(productoCarrito[0].unitCost) * (productoCarrito[0].count)}UYU</div>

                        <div class="col-6">Envío</div>
                        <div class="col-6" id="valorEnvio"></div>

                        <div class="col-6">Total</div>
                        <div class="col-6" id="importeTotal">UYU</div>
                        
                        </div>
                        </div>
                        <br><br>
                    <div class="col">
                        <button class="btn btn-success" data-toggle="modal" data-target="#modalMetodoPago">Método de pago</button>
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

function alertajaja(){
    alert('LOL');
}

function calcularSub(precioUni) {
    let cantidad = parseInt(document.getElementById(`numCantidad`).value);
    subtotal = precioUni * cantidad;
    document.getElementById(`subtotalProductos`).innerHTML = subtotal + "UYU";
    document.getElementById(`importeSubtotal`).innerHTML = subtotal + "UYU";
}

function calcularEnvío(){
    precioUni = 100;
    let cantidad = parseInt(document.getElementById(`numCantidad`).value);
    subtotal = precioUni * cantidad;
   
    let envio; 
    let selectEnvio = document.getElementById("selectEnvio").value;
    
        if (selectEnvio == 1){
            envio = ((15*(subtotal))/100);
            document.getElementById("valorEnvio").innerHTML = envio + " UYU";
        }
        else if (selectEnvio == 2) {
            envio = ((7*(subtotal))/100);
            document.getElementById("valorEnvio").innerHTML = envio + " UYU";
        } else if (selectEnvio == 3) {
            envio = ((5*(subtotal))/100);
            document.getElementById("valorEnvio").innerHTML = envio + " UYU";
        }

        //document.getElementById("importeTotal").innerHTML = (subtotal + envio) + " UYU";
           
}








document.addEventListener("DOMContentLoaded", function (e) {


    getJSONData(CART_INFO_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            infoCarrito = resultado.data.articles;

            mostrarCarrito(infoCarrito);
        }
    })
    console.log(document.getElementById("selectEnvio").value);
    



});

document.getElementById("pagoTarjeta").addEventListener("click", function (){ 
    mostrarModalTarjeta()
   
    


});

document.getElementById("pagoBanco").addEventListener("click", function (){ 
    mostrarModalBanco()
    


});