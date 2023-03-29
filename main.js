// menu bars ouverture
const a = document.querySelector(".bars");
const b = document.querySelector(".nav-link");

a.addEventListener("click", () => {
  b.classList.toggle("mobile-menu");
});

const c = document.querySelector(".images");
a.addEventListener("click", () => {
  c.classList.toggle("flou");
});

const aa = document.querySelector(".toogle");
a.addEventListener("click", () => {
  aa.classList.toggle("switch");
});

// menu close fermeture
const d = document.querySelector(".close");
d.addEventListener("click", () => {
  b.classList.toggle("fermer");
});
