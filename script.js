let index = 0;
const spreads = document.querySelectorAll(".spread");
const musica = document.getElementById("musica");

function startBook() {
  document.querySelector(".start").style.display = "none";
  document.getElementById("book").style.display = "block";
  document.querySelector(".controls").style.display = "flex";
  spreads[index].classList.add("active");
  musica.play();
}

function next() {
  if (index < spreads.length - 1) {
    spreads[index].classList.remove("active");
    index++;
    spreads[index].classList.add("active");
  }
}

function prev() {
  if (index > 0) {
    spreads[index].classList.remove("active");
    index--;
    spreads[index].classList.add("active");
  }
}
