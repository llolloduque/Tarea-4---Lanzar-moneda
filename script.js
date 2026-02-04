const boton = document.getElementById("jugar");
const imagen = document.getElementById("moneda");
const texto = document.getElementById("texto");

boton.addEventListener("click", function () {

    const eleccion = document.querySelector('input[name="eleccion"]:checked');

    if (!eleccion) {
        texto.textContent = "Tienes que elegir cara o cruz";
        return;
    }

    texto.textContent = "Lanzando la moneda...";

    const duracion = Math.floor(Math.random() * 1000) + 1000;

    let estado = true;

    const intervalo = setInterval(() => {
        imagen.src = estado ? "cara.png" : "cruz.png";
        estado = !estado;
    }, 200);

    setTimeout(() => {
        clearInterval(intervalo);

       
        const resultado = Math.random() < 0.5 ? "cara" : "cruz";
        imagen.src = resultado + ".png";

      
        if (resultado === eleccion.value) {
            texto.textContent = "¡Has ganado! Ha salido " + resultado;
        } else {
            texto.textContent = "Has perdido. Ha salido " + resultado;
        }

    }, duracion);
});
