function verificarRespuesta(opcion) {
    const resultado = document.getElementById("resultado-test");
    
    if (opcion === 'videojuegos') {
        resultado.innerText = "¡Correcto! Ya tienes 10 puntos de novia. ✅";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Mmm... no. Inténtalo de nuevo. ❌";
        resultado.style.color = "red";
    }
}
function mostrarFoto() {
    // Buscamos la foto y el botón en el HTML
    const foto = document.getElementById("foto-secreta");
    const boton = document.getElementById("btn-revelar");
    
    // Hacemos que la foto aparezca y el botón desaparezca
    foto.style.display = "inline-block";
    boton.style.display = "none";
}
