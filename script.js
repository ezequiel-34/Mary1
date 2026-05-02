/* CORAZONES */
setInterval(() => {
  let h = document.createElement("div");
  h.className = "heart";
  h.innerText = "💖";

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (Math.random() * 20 + 10) + "px";
  h.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.body.appendChild(h);

  setTimeout(() => h.remove(), 5000);
}, 200);

/* ABRIR LIBRO */
let llave = document.getElementById("llave");

llave.addEventListener("click", () => {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  let musica = document.getElementById("musica");
  musica.play().catch(()=>{});
});

/* PASAR PAGINAS */
let paginas = document.querySelectorAll(".page");
let i = 0;

document.addEventListener("click", () => {
  if (i < paginas.length) {
    paginas[i].classList.add("flipped");
    i++;
  }
});
