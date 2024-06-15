// Alterar cargos no h2
const texts = ["Estudante de TI", "Desenvolvedora", "Backend"];
let currentIndex = 0;
const span = document.getElementById("dynamic-text");
function changeText() {
    currentIndex = (currentIndex + 1) % texts.length;
    span.textContent = texts[currentIndex];
}

setInterval(changeText, 2000);