// Haz una función que aplique 3 colores aleatorios al azar.

// o Verde, Azul y Rojo.

// · Cuando alguien haga clic en cualquier etiqueta h5, haga que cambie a alguno de los 3 colores aleatorios.

// o Verde, Azul y Rojo.
const h5 = document.querySelectorAll("h5");


function color() {
    let colores = ["red", "blue", "green"];
    let randomColor = colores[Math.floor(Math.random() * colores.length)];
    return randomColor
}

h5.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.color = color();
    });
});

