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
            logo.style.left = "50%";
            logo.style.transform = "translateX(-50%)";
        }
});

menu.addEventListener("click", () => { 
    container.style.display = "flex"; 
    container.style.animation = "fadeIn 0.5s forwards";
})

closer.addEventListener("click", () => {
    container.style.animation = "fadeOut 0.5s forwards";
    container.style.display = "none";
}) 

document.addEventListener("click", (Event) => {
    if (!container.contains(Event.target) && !closer.contains(Event.target)) {
        container.style.display = 'none';
        container.style.animation = "fadeOut 0.5s forwards";
    }
});