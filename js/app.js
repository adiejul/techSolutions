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

function agregarAlCarrito(nombreProducto) {
    alert("¡Has hecho clic en el " + nombreProducto + " y se ha añadido al carrito!");
}

cargarProductos();