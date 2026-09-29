//imagenes para poder añadir los productos al carrito (funcion hecha entre Juan y Javi)

function cargarProductos() { 
    let parrafos = document.getElementsByTagName("p");
    let parrafoObjetivo = null;

    for (let i = 0; i < parrafos.length; i++) {
        if (parrafos[i].innerText.includes("Revisa los productos")) {
            parrafoObjetivo = parrafos[i];
            break;
        }
    }

    if (parrafoObjetivo != null) {

        parrafoObjetivo.innerHTML = `
            <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px;">
                <img src="imagenes/ordenador.png" alt="Ordenador" style="cursor: pointer; width: 100px; height: auto;" onclick="agregarAlCarrito('Ordenador')">
                <img src="imagenes/iphone.png" alt="iPhone" style="cursor: pointer; width: 100px; height: auto;" onclick="agregarAlCarrito('iPhone')">
                <img src="imagenes/macbook.png" alt="MacBook" style="cursor: pointer; width: 100px; height: auto;" onclick="agregarAlCarrito('MacBook')">
                <img src="imagenes/monitor-acer.png" alt="Monitor" style="cursor: pointer; width: 100px; height: auto;" onclick="agregarAlCarrito('Monitor Acer')">
                <img src="imagenes/airfryer.png" alt="Airfryer" style="cursor: pointer; width: 100px; height: auto;" onclick="agregarAlCarrito('Airfryer')">
                <img src="imagenes/siya.png" alt="Silla" style="cursor: pointer; width: 100px; height: auto;" onclick="agregarAlCarrito('Silla')">
            </div> 
        `;
    }
}

cargarProductos();

//esta linea sirve para que no se vea la entrada de ejemplo.
//pintarCarrito();

//meter productos al carrito (Funcion y array creados por Juan y Javi)
let carrito = [];
// Objeto (o "array asociativo") para relacionar cada producto con su precio
const preciosProductos = {
    "Ordenador": 800,
    "iPhone": 950,
    "MacBook": 1200,
    "Monitor Acer": 250,
    "Silla": 150,
    "Airfryer":50,
};

function agregarAlCarrito(nombreProducto) {
    let productoExistente = false;
    let indiceProducto = -1;
    let precio = preciosProductos[nombreProducto];

    //Recorremos el carrito con un bucle for para buscar el producto
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombreProducto) {
            productoExistente = true;
            indiceProducto = i;
            break; // Si lo encontramos, rompemos el bucle para no seguir buscando
        }
    }

    //Evaluamos el resultado del bucle
    if (productoExistente) {
        // Si ya estaba, sumamos 1 a su cantidad usando su índice
        carrito[indiceProducto].cantidad++;
    } else {
        // Lo guardamos con su nombre, cantidad y el precio que hemos buscado
        carrito.push({ 
            nombre: nombreProducto, 
            precio: precio, 
            cantidad: 1 
        });
    }

    console.log("Carrito actual:", carrito);
    alert(`¡Se ha añadido ${nombreProducto}, cuyo precio es ${precio} al carrito!`);
    pintarCarrito();
}

//esta funcion de aqui pinta los elementos selecionados en la tabla y hace los calculos necesarios (Javi)

function pintarCarrito(){
    const listaCarrito = document.getElementById("lista-carrito");

    if(!listaCarrito) return;

    // Se limpia la tabla antes de volver a dibujar
    listaCarrito.innerHTML = "";
    
    let subTotalAcumulado = 0;

    
    carrito.forEach((prod) => {
        const subtotal = prod.precio * prod.cantidad;

        subTotalAcumulado +=  subtotal;

        const fila = document.createElement("tr");

            fila.innerHTML = `
            <td class="nombre-producto">${prod.nombre}</td>
            <td class="precio-producto">${prod.precio.toFixed(2)}€</td>
            <td class="cantidad-producto">
                <button class="btn-restar" onclick="cambiarCantidad('${prod.nombre}', 'restar')">-</button>
                <span class="cantidad">${prod.cantidad}</span>
                <button class="btn-sumar" onclick="cambiarCantidad('${prod.nombre}', 'sumar')">+</button>
            </td>
            <td class="subtotal-producto">${subtotal.toFixed(2)}€</td>
            <td>
                <button class="btn-eliminar">Eliminar</button>
            </td>
            `;
        
                listaCarrito.appendChild(fila);

    });

    const subTotal1 = document.getElementById("subtotal-total");
    const envioTotal1 = document.getElementById("envio-total");
    const precioTotal1 = document.getElementById("precio-total");
    const gastosEnvio = 25.00; //elimino las comillas de texto del gasto de envio

    if (subTotal1) {
        subTotal1.textContent=`${subTotalAcumulado.toFixed(2)}€`
    } 

    if (precioTotal1) {
        //Ahora si realizo correctamente la suma total del carrito
        const totalFinal = subTotalAcumulado + gastosEnvio;
        precioTotal1.textContent = `${totalFinal.toFixed(2)}€`; 
    }

    if (envioTotal1) {
        envioTotal1.textContent = `${gastosEnvio}€`;
    }
    
    

    //contar el numero de productos (Dani, importo la funcion de su archivo conteo.js)
    if (typeof mostrarCantidadEnResumen === "function") {
        mostrarCantidadEnResumen();
    }
}
    

function cambiarCantidad(nombreProducto, operacion){
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombreProducto) {
            if (operacion === 'sumar') {
                carrito[i].cantidad++;
            } else if (operacion === 'restar') {
                if (carrito[i].cantidad > 1) {
                    carrito[i].cantidad--;
                }
            }
            break;
        }
    }
    pintarCarrito();
}


// Para navegar por las diferentes páginas (Marcos)
document.getElementById("inicio").addEventListener("click", () => {
    window.location.href = "../index.html";
});

document.getElementById("contacto").addEventListener("click", () => {
    window.location.href = "../contacto.html";
});

document.getElementById("sobre-nosotros").addEventListener("click", () => {
    window.location.href = "../sobre-nosotros.html";
});

// Botón que te lleva al sitio equivocado, debería de llevar al carrito.
document.getElementById("carrito").addEventListener("click", () => {
    window.location.href = "../carrito.html";
});

/* FUNCIONAMIENTO DEL BOTÓN DE ELIMINAR (Marcos) */
const listaCarrito = document.getElementById("lista-carrito");

if (listaCarrito) {
    listaCarrito.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("btn-eliminar")) {
            evento.target.closest("tr").remove();
        }
    });
}

pintarCarrito();


/* FUNCIONAMIENTO DE BOTONES VACIAR Y FINALIZAR COMPRA */

//1. Vaciar Carrito:
const btnVaciar = document.querySelector(".btn-vaciar-carrito");

if (btnVaciar) {
    btnVaciar.addEventListener("click", () => {
        //vaciado del array del carrito
        carrito = [];
        pintarCarrito();
    });
}

//2. Boton Finalizar Compra
const btnFinalizar = document.querySelector(".btn-finalizar-compra");

if(btnFinalizar){
    btnFinalizar.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("Tu carrito está vacio. Añade algun producto para realizar una compra")
        } else {
            alert("¡Muchas gracias por su compra!, Tu pedido se ha realizado con exito")
            carrito = [];
            pintarCarrito();
        }
    });

}


    