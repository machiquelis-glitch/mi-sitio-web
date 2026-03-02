// Variable para llevar la cuenta de los puntos
let puntosTotales = 0;
let nivel1Completado = false;
let nivel2Completado = false;

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

// 3. Puzzle 1: El Gym
function verificarRespuesta(opcion, botonPresionado) {
    if (nivel1Completado) return; // Si ya lo pasó, no puede volver a sumar puntos

    const resultado = document.getElementById("resultado-test");
    
    if (opcion === 'gym') { 
        resultado.innerText = "¡Correcto! 💪 +10 puntos. ✅";
        resultado.style.color = "#00C853";
        botonPresionado.style.backgroundColor = "#E8F5E9"; // Se pone verdecito
        botonPresionado.style.color = "#00C853";
        sumarPuntos(10);
        nivel1Completado = true;
    } else {
        resultado.innerText = "Uy, casi. Pero no. Inténtalo de nuevo. ❌";
        resultado.style.color = "#FF1744";
    }
}

// 4. Puzzle 2: La Palabra Secreta
function verificarPalabra() {
    if (nivel2Completado) return; // Si ya lo pasó, no suma más puntos

    const input = document.getElementById("input-palabra").value.toLowerCase().trim();
    const resultado = document.getElementById("resultado-palabra");
    
    // CAMBIA 'shrek' POR LA PELÍCULA REAL DE JHOAN (escríbela toda en minúsculas)
    if (input === 'Airon man') {
        resultado.innerText = "¡Excelente! Conoces sus gustos. 🎬 +20 puntos. ✅";
        resultado.style.color = "#00C853";
        sumarPuntos(20);
        nivel2Completado = true;
    } else {
        resultado.innerText = "Esa no es... ¡Piensa bien! ❌";
        resultado.style.color = "#FF1744";
    }
}

// 5. Función para sumar puntos y mostrarlos arriba
function sumarPuntos(cantidad) {
    puntosTotales = puntosTotales + cantidad;
    document.getElementById("puntos").innerText = puntosTotales;
    
    // Pequeño efecto visual al ganar puntos
    document.getElementById("marcador-puntos").style.transform = "scale(1.2)";
    setTimeout(() => {
        document.getElementById("marcador-puntos").style.transform = "scale(1)";
    }, 300);
}
