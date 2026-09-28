function obtenerCantidad() {
    // 1. Buscamos el tbody por su ID
    const tabla = document.getElementById("lista-carrito");
    
    // Si no existe la tabla, salimos
    if (!tabla) return 0;

    // 2. Buscamos todas las filas <tr> usando getElementsByTagName
    const filas = tabla.getElementsByTagName("tr");
    let total = 0;

    // 3. Convertimos las filas a un Array para poder recorrerlas con forEach
    Array.from(filas).forEach(fila => {
        // Buscamos los span con la clase "cantidad" en esa fila
        const spans = fila.getElementsByClassName("cantidad");
        
        if (spans.length > 0) {
            total += Number(spans[0].textContent);
        }
    });

    // 3. Convertimos las filas a un Array para poder recorrerlas con forEach
    Array.from(filas).forEach(fila => {
        // Buscamos los span con la clase "cantidad" en esa fila
        const spans = fila.getElementsByClassName("cantidad");
        
        if (spans.length > 0) {
            total += Number(spans[0].textContent);
        }
    });

    return total;
}

// Función para insertar el HTML y mostrar el resultado
function mostrarCantidadEnResumen() {
    const envioTotal = document.getElementById("subtotal-total");
    if (!envioTotal) return;

    // Localizamos el contenedor de Gastos de envío
    const lineaEnvio = envioTotal.closest(".resumen-linea");
    if (!lineaEnvio) return;

    // Comprobamos si la línea ya fue insertada previamente
    let lineaCantidad = document.getElementById("linea-cantidad-productos");

    if (!lineaCantidad) {
        // Creamos la estructura HTML desde JS
        lineaCantidad = document.createElement("div");
        lineaCantidad.id = "linea-cantidad-productos";
        lineaCantidad.className = "resumen-linea";
        lineaCantidad.innerHTML = `
            <span>Cantidad de productos:</span>
            <span id="cantidad-total">0</span>
        `;
        
        // Insertamos antes de Gastos de envío
        lineaEnvio.parentNode.insertBefore(lineaCantidad, lineaEnvio);
    }

    // Actualizamos el número llamando a tu función
    const spanCantidad = document.getElementById("cantidad-total");
    if (spanCantidad) {
        spanCantidad.textContent = obtenerCantidad();
    }
}

// Ejecución al cargar el documento
document.addEventListener("DOMContentLoaded", mostrarCantidadEnResumen);

// Observador para actualizar el total si el carrito cambia dinámicamente
const tablaCarrito = document.getElementById("lista-carrito");
if (tablaCarrito) {
    const observador = new MutationObserver(mostrarCantidadEnResumen);
    observador.observe(tablaCarrito, { childList: true, subtree: true, characterData: true });
}
