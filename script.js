let puntosTotales = 0;
let preguntasResueltas = [false, false, false, false, false, false, false, false, false]; 

// 1. Mostrar la foto
function mostrarFoto() {
    document.getElementById("locked-placeholder").style.display = "none";
    document.getElementById("foto-secreta").style.display = "block";
    document.getElementById("btn-revelar").style.display = "none";
}

// 2. Navegar entre las 3 Pantallas
function cambiarPantalla(pantalla) {
    const vistaPerfil = document.getElementById("pantalla-perfil");
    const vistaPuzzles = document.getElementById("pantalla-puzzles");
    const vistaChat = document.getElementById("pantalla-chat");
    
    const btnPerfil = document.getElementById("btn-nav-perfil");
    const btnPuzzles = document.getElementById("btn-nav-puzzles");
    const btnChat = document.getElementById("btn-nav-chat");

    // Ocultar todo primero
    vistaPerfil.style.display = "none";
    vistaPuzzles.style.display = "none";
    vistaChat.style.display = "none";
    
    btnPerfil.classList.remove("active");
    btnPuzzles.classList.remove("active");
    btnChat.classList.remove("active");

    // Mostrar solo lo que se tocó
    if (pantalla === 'perfil') {
        vistaPerfil.style.display = "block";
        btnPerfil.classList.add("active");
    } else if (pantalla === 'puzzles') {
        vistaPuzzles.style.display = "block";
        btnPuzzles.classList.add("active");
    } else if (pantalla === 'chat') {
        vistaChat.style.display = "block";
        btnChat.classList.add("active");
    }
}

// 3. Responder Preguntas
function responder(numPregunta, seleccion, correcta, puntos, boton) {
    if (preguntasResueltas[numPregunta]) return;

    const resultado = document.getElementById("res-" + numPregunta);

    if (seleccion === correcta) {
        resultado.innerText = "¡Correcto! +" + puntos + " puntos. ✅";
        resultado.style.color = "#00C853";
        boton.style.backgroundColor = "#E8F5E9"; 
        boton.style.color = "#00C853";
        
        sumarPuntos(puntos);
        preguntasResueltas[numPregunta] = true; 
    } else {
        resultado.innerText = "Uy, no. ¡Sigue intentando! ❌";
        resultado.style.color = "#FF1744";
    }
}

// 4. Sumar puntos y lanzar confeti
function sumarPuntos(cantidad) {
    puntosTotales = puntosTotales + cantidad;
    document.getElementById("puntos").innerText = puntosTotales;
    
    document.getElementById("marcador-puntos").style.transform = "scale(1.2)";
    setTimeout(() => {
        document.getElementById("marcador-puntos").style.transform = "scale(1)";
    }, 300);

    // Si llega a 200 puntos ¡MAGIA!
    if (puntosTotales === 200) {
        // Lanzamos el confeti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        setTimeout(() => {
            alert("¡INCREÍBLE! Obtuviste los 200 puntos. 🎉🔥 Ahora ve a la pestaña de CHAT y mándale un mensaje.");
        }, 1500);
    }
}
