const images = [
    "img/votar1.jpg",
    "img/votar2.jpg"
];

let current = 0;
const voteImg = document.getElementById("voteImage");
const flash = document.querySelector(".flash");

setInterval(() => {
    // flash
    flash.style.opacity = "0.8";

    setTimeout(() => {
        current = (current + 1) % images.length;
        voteImg.src = images[current];
        flash.style.opacity = "0";
    }, 120);

}, 3000);
