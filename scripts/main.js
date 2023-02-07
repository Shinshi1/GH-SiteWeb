// menu-mobile
const navToggle = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".nav__list")

navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav__visible")
})

// Typelt efect (maquina de escribir)
new TypeIt(".hero__type-efect", {
    strings: ["I'm <strong> Gabriel </strong> Hidalgo", "I'm <strong> Frontend Developer </strong>"],
    breakLines: false,
    loop: true,
}).go(); 