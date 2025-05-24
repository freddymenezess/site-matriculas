const menu = document.getElementById("menu-icon");
const container = document.getElementById("container-menu");
const closer = document.getElementById("close-icon");
const logo = document.getElementById("logo");

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#219EBC";
            header.style.position = "fixed";
            header.style.width = "100%";
            header.style.top = "0";
            header.style.transition = "position 0.2s linear, background-color 0.3s linear";
        } else {
            header.style.backgroundColor = "white";
            header.style.position = "static";
            header.style.top = "0";
        }
});

function closeMenu() {
    container.style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => {
        container.style.display = "none";
    }, 500);
}

menu.addEventListener("click", () => { 
    container.style.display = "flex"; 
    container.style.animation = "fadeIn 0.5s forwards";
})

closer.addEventListener("click", closeMenu);

container.addEventListener("click", closeMenu)

