function verificarRespuesta(opcion) {
    const resultado = document.getElementById("resultado-test");
    
    // Mantenemos 'gym' como la respuesta correcta
    if (opcion === 'gym') { 
        resultado.innerText = "¡Correcto! 💪 Ya tienes +10 puntos. ✅";
        resultado.style.color = "#00C853"; // Verde brillante moderno
    } else {
        resultado.innerText = "Uy, casi. Pero no. Inténtalo de nuevo. ❌";
        resultado.style.color = "#FF1744"; // Rojo brillante moderno
    }
}

function mostrarFoto() {
    // Buscamos la foto, el candado y el botón en el HTML
    const foto = document.getElementById("foto-secreta");
    const placeholder = document.getElementById("locked-placeholder");
    const boton = document.getElementById("btn-revelar");
    
    // 1. Ocultamos el candado (placeholder)
    placeholder.style.display = "none";
    
    // 2. Mostramos la foto real con estilo cover
    foto.style.display = "block";
    
    // 3. Ocultamos el botón para que ya no se pueda clickear
    boton.style.display = "none";
}
