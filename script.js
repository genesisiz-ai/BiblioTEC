document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const portada = document.getElementById("modalPortada");
    const titulo = document.getElementById("modalTitulo");
    const grado = document.getElementById("modalGrado");
    const descripcion = document.getElementById("modalDescripcion");
    const autores = document.getElementById("modalAutores");
    const descargar = document.getElementById("modalDescargar");
    const closeBtn = document.querySelector(".close");

    // Evento para abrir el modal desde cualquier tarjeta
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            portada.src = card.dataset.portada || "";
            titulo.textContent = card.dataset.titulo || "Sin título";
            grado.textContent = card.dataset.grado || "";
            descripcion.textContent = card.dataset.descripcion || "";
            autores.textContent = card.dataset.autores || "";
            descargar.href = card.dataset.pdf || "#";

            modal.style.display = "flex";
        });
    });

    // Cerrar al hacer clic en el botón 'X'
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };
    }

    // Cerrar al hacer clic fuera del contenido del modal
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };
});
