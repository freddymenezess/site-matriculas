const menu = document.getElementById("menu-icon");
const container = document.getElementById("container-menu");
const closer = document.getElementById("close-icon");
const logo = document.getElementById("logo");

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
        if (window.scrollY > 280) {
            header.style.backgroundColor = "#80CED8";
            header.style.position = "fixed";
            header.style.width = "100%";
            header.style.top = "-1";
            header.style.transition = "position 0.5s linear, background-color 0.3s linear";
            logo.style.position = "static";
            logo.style.top = "-1";
            logo.style.left = "0";
            logo.style.transform = "translateX(0)";
        } else {
            header.style.backgroundColor = "white";
            header.style.position = "relative";
            logo.style.position = "absolute";
            if (menu.style.display == "block") {
                logo.style.left = "50%";
                logo.style.transform = "translateX(-50%)";
            } else {
                logo.style.left = "0";
                logo.style.transform = "translateX(-0)";
            }
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

