const menu = document.getElementById("menu-icon");
const container = document.getElementById("container-menu");
const close = document.getElementById("close-icon");

menu.addEventListener("click", () => { 
    container.style.display = "flex"; 
    container.style.animation = "fadeIn 0.5s forwards";
})

close.addEventListener("click", () => {
    container.style.animation = "fadeOut 0.5s forwards";
    container.style.display = "none";
})



