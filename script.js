function crearCorazones() {
  const contenedor = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    contenedor.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }, 200);
}

crearCorazones();
