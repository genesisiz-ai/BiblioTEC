/* Tarjetas */
.cards-container{
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    justify-content:center;
    margin-top:30px;
}

.card{
    width:260px;
    background:#fff;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 5px 15px rgba(0,0,0,.2);
    transition:.3s;
    cursor:pointer;
}

.card:hover{
    transform:translateY(-8px);
}

.card img{
    width:100%;
    height:320px;
    object-fit:cover;
}

.card-body{
    padding:15px;
}

.card-body h3{
    margin-bottom:10px;
}

.card-body p{
    color:#555;
    font-size:14px;
}

/* Modal */

.modal{
    display:none;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.6);
    justify-content:center;
    align-items:center;
    z-index:999;
}

.modal-content{
    background:#fff;
    width:420px;
    border-radius:15px;
    padding:20px;
    position:relative;
    text-align:center;
}

.modal-content img{
    width:180px;
    margin-bottom:15px;
}

.close{
    position:absolute;
    top:10px;
    right:15px;
    font-size:28px;
    cursor:pointer;
}

.btn{
    display:inline-block;
    margin-top:15px;
    padding:10px 18px;
    background:#0d6efd;
    color:white;
    text-decoration:none;
    border-radius:8px;
}const modal = document.getElementById("modal");
const portada = document.getElementById("modalPortada");
const titulo = document.getElementById("modalTitulo");
const grado = document.getElementById("modalGrado");
const descripcion = document.getElementById("modalDescripcion");
const autores = document.getElementById("modalAutores");
const descargar = document.getElementById("modalDescargar");

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("click",()=>{

        portada.src = card.dataset.portada;
        titulo.textContent = card.dataset.titulo;
        grado.textContent = card.dataset.grado;
        descripcion.textContent = card.dataset.descripcion;
        autores.textContent = card.dataset.autores;
        descargar.href = card.dataset.pdf;

        modal.style.display="flex";
    });

});

document.querySelector(".close").onclick=()=>{
    modal.style.display="none";
}

window.onclick=(e)=>{
    if(e.target==modal){
        modal.style.display="none";
    }
}
<div class="card"
data-portada="img/seguridad.jpg"
data-titulo="Seguridad Digital"
data-grado="Primero Básico"
data-descripcion="Aprende a navegar de forma segura por Internet, proteger tus datos personales y reconocer los riesgos digitales."
data-autores="Andrea Sagastume, María López y Sofía Pérez"
data-pdf="pdf/seguridad_digital.pdf">

    <img src="img/seguridad.jpg">

    <div class="card-body">
        <h3>Seguridad Digital</h3>
        <p>Revista Digital</p>
    </div>

</div>
 <img id="modalPortada">

        <h2 id="modalTitulo"></h2>

        <h4 id="modalGrado"></h4>

        <p id="modalDescripcion"></p>

        <p>
            <strong>Autores:</strong>
            <span id="modalAutores"></span>
        </p>

        <a id="modalDescargar" class="btn" target="_blank">
            Descargar PDF
        </a>

    </div>

</div>
