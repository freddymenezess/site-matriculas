const menu = document.getElementById("menu-icon");
const container = document.getElementById("container-menu");
const closer = document.getElementById("close-icon");
const logo = document.getElementById("logo");
const navEscondida = document.getElementById("nav-escondida");

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
        if (window.scrollY > 0) {
            header.style.position = "fixed";
            header.style.width = "100%";
            header.style.top = "0";
            header.style.backdropFilter = "blur(10px)";
            header.style.transition = "all 0.3s linear";
        } else {
            header.style.position = "static";
            header.style.top = "0";
        }
});

function closeMenu() {
    navEscondida.style.animation = "fadeOut 0.3s linear forwards";
    setTimeout(() => {
        container.style.display = "none";
    }, 500);
}

menu.addEventListener("click", () => { 
    container.style.display = "flex";
    navEscondida.style.animation = "fadeIn .3s linear forwards";
    closer.style.animation = "rodar .3s .3s linear forwards";
})

closer.addEventListener("click", closeMenu);

container.addEventListener("click", closeMenu)