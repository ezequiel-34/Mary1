/* CORAZONES */
setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 200);


/* ARRASTRAR LLAVE (TACTIL) */
let llave = document.getElementById("llave");
let candado = document.getElementById("candado");

llave.addEventListener("touchmove", (e) => {
  let touch = e.touches[0];
  llave.style.left = touch.clientX - 20 + "px";
  llave.style.top = touch.clientY - 20 + "px";
});

llave.addEventListener("touchend", () => {
  let c = candado.getBoundingClientRect();
  let l = llave.getBoundingClientRect();

  if (
    l.left < c.right &&
    l.right > c.left &&
    l.top < c.bottom &&
    l.bottom > c.top
  ) {
    abrirLibro();
  }
});

/* ABRIR */
function abrirLibro() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  let musica = document.getElementById("musica");
  musica.play().catch(()=>{});
}

/* SWIPE PAGINAS */
let paginas = document.querySelectorAll(".pagina");
let index = 0;

let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX > endX + 50) next();
  if (startX < endX - 50) prev();
});

function show(i) {
  paginas.forEach(p => p.classList.remove("active"));
  paginas[i].classList.add("active");
}

function next() {
  if (index < paginas.length - 1) {
    index++;
    show(index);
  }
}

function prev() {
  if (index > 0) {
    index--;
    show(index);
  }
      }
let paginas = document.querySelectorAll(".page");
let actual = 0;

document.addEventListener("click", () => {
  if (actual < paginas.length) {
    paginas[actual].classList.add("flipped");
    actual++;
  }
});
