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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});



