// Para navegar por las diferentes páginas
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
    window.location.href = "../index.html";
});