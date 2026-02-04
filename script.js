const boton = document.getElementById("jugar");
const imagen = document.getElementById("moneda");
const texto = document.getElementById("texto");

boton.addEventListener("click", function () {

    const eleccion = document.querySelector('input[name="eleccion"]:checked');

    if (!eleccion) {
        texto.textContent = "Elige cara o cruz";
        return;
    }

    texto.textContent = "Lanzando moneda...";

   
    setTimeout(function () {

        const resultado = Math.random() < 0.5 ? "cara" : "cruz";
        imagen.src = resultado + ".png";

        if (resultado === eleccion.value) {
            texto.textContent = "Has ganado. Ha salido " + resultado;
        } else {
            texto.textContent = "Has perdido. Ha salido " + resultado;
        }

    }, 1000);
});
