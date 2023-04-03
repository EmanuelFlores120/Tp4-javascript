function jugar() {
    // Pedir al usuario que ingrese su jugada
    let jugador = prompt("Ingresa tu jugada: piedra, papel o tijera").toLowerCase();
  
    // Validar que la jugada del usuario sea válida
    while (jugador !== "piedra" && jugador !== "papel" && jugador !== "tijera") {
      jugador = prompt("Jugada no válida. Ingresa tu jugada: piedra, papel o tijera").toLowerCase();
    }
  
    // Generar la jugada aleatoria de la PC
    let pc = Math.floor(Math.random() * 3); // Generar un número aleatorio entre 0 y 2
    if (pc === 0) {
      pc = "piedra";
    } else if (pc === 1) {
      pc = "papel";
    } else {
      pc = "tijera";
    }
  
    // Mostrar las jugadas del usuario y la PC
    console.log(`Tu jugada: ${jugador}`);
    console.log(`Jugada de la PC: ${pc}`);
  
    // Determinar el ganador
    if (jugador === pc) {
      console.log("¡Empate!");
    } else if (
      (jugador === "piedra" && pc === "tijera") ||
      (jugador === "papel" && pc === "piedra") ||
      (jugador === "tijera" && pc === "papel")
    ) {
      console.log("¡Ganaste!");
    } else {
      console.log("¡Perdiste!");
    }
  
    // Preguntar si el usuario quiere jugar de nuevo
    let jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
    if (jugarDeNuevo) {
      jugar();
    } else {
      console.log("¡Gracias por jugar!");
    }
  }
  
  jugar(); // Llamar a la función para empezar el juego
  