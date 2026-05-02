let llave = document.getElementById("llave");
let candado = document.getElementById("candado");

llave.addEventListener("dragend", () => {
  abrirLibro();
});

function abrirLibro() {
  document.getElementById("pantallaInicio").style.display = "none";
  document.getElementById("libroAbierto").classList.remove("hidden");

  document.getElementById("musica").play();
}

/* PAGINAS */
let pages = document.querySelectorAll(".page");
let current = 0;

function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    showPage(current);
  }
}
