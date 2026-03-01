function verificarRespuesta(opcion) {
    const resultado = document.getElementById("resultado-test");
    
    if (opcion === 'Ir al Gym') {
        resultado.innerText = "¡Correcto! Ya tienes 10 puntos de novia. ✅";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Mmm... no. Inténtalo de nuevo. ❌";
        resultado.style.color = "red";
    }
}
