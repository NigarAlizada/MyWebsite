// Getting elements

const btnMoon = document.querySelector(".header_moon")
const btnMobileMenu = document.querySelector(".header_mobmenu")

btnMoon.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("is_black");
})

btnMobileMenu.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("is_active");
})


