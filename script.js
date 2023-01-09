window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

const hamburger = document.querySelector(".hamburger");
const navSection = document.querySelector(".nav-section");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navSection.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navSection.classList.remove("active");
}))