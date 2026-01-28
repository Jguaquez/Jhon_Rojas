const container = document.querySelector(".floating-logos");

// lista de logos
const logos = [
    "img/logomira.jpg",
    "img/logofuerza.png"
];

function createLogo() {
    const logo = document.createElement("img");

    // elegir logo aleatorio
    const randomLogo = logos[Math.floor(Math.random() * logos.length)];
    logo.src = randomLogo;

    // posición horizontal aleatoria
    logo.style.left = Math.random() * 100 + "%";

    // duración aleatoria
    const duration = Math.random() * 10 + 10;
    logo.style.animationDuration = duration + "s";

    container.appendChild(logo);

    // eliminar al terminar
    setTimeout(() => {
        logo.remove();
    }, duration * 8000);
}

// crear logos cada cierto tiempo
setInterval(createLogo, 1000);
