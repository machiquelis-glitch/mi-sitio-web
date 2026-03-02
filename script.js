let puntosTotales = 0;
// Esta lista nos ayuda a saber qué preguntas ya respondió bien para no darle puntos infinitos
let preguntasResueltas = [false, false, false, false, false, false, false, false, false]; 

// 1. Mostrar la foto de Jhoan
function mostrarFoto() {
    document.getElementById("locked-placeholder").style.display = "none";
    document.getElementById("foto-secreta").style.display = "block";
    document.getElementById("btn-revelar").style.display = "none";
}

// 2. Navegar entre el Menú y los Puzzles
function cambiarPantalla(pantalla) {
    const vistaPerfil = document.getElementById("pantalla-perfil");
    const vistaPuzzles = document.getElementById("pantalla-puzzles");
    const btnPerfil = document.getElementById("btn-nav-perfil");
    const btnPuzzles = document.getElementById("btn-nav-puzzles");

    if (pantalla === 'perfil') {
        vistaPerfil.style.display = "block";
        vistaPuzzles.style.display = "none";
        btnPerfil.classList.add("active");
        btnPuzzles.classList.remove("active");
    } else if (pantalla === 'puzzles') {
        vistaPerfil.style.display = "none";
        vistaPuzzles.style.display = "block";
        btnPerfil.classList.remove("active");
        btnPuzzles.classList.add("active");
    }
}

// 3. ¡LA SÚPER FUNCIÓN PARA TODAS LAS PREGUNTAS!
function responder(numPregunta, seleccion, correcta, puntos, boton) {
    // Si ya acertó esta pregunta antes, no hacemos nada
    if (preguntasResueltas[numPregunta]) return;

    const resultado = document.getElementById("res-" + numPregunta);

    if (seleccion === correcta) {
        resultado.innerText = "¡Correcto! +" + puntos + " puntos. ✅";
        resultado.style.color = "#00C853";
        boton.style.backgroundColor = "#E8F5E9"; 
        boton.style.color = "#00C853";
        
        sumarPuntos(puntos);
        preguntasResueltas[numPregunta] = true; // Bloquea la pregunta para que no sume más
    } else {
        resultado.innerText = "Uy, no. ¡Sigue intentando! ❌";
        resultado.style.color = "#FF1744";
    }
}

// 4. Sumar puntos y actualizar el marcador
function sumarPuntos(cantidad) {
    puntosTotales = puntosTotales + cantidad;
    document.getElementById("puntos").innerText = puntosTotales;
    
    // Efecto visual de rebote
    document.getElementById("marcador-puntos").style.transform = "scale(1.2)";
    setTimeout(() => {
        document.getElementById("marcador-puntos").style.transform = "scale(1)";
    }, 300);

    // Si llega a 200 puntos...
    if (puntosTotales === 200) {
        setTimeout(() => {
            alert("¡INCREÍBLE! Obtuviste los 200 puntos. ¡Eres la candidata perfecta para Jhoan! 🎉🔥");
        }, 500);
    }
}
