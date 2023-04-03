class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log("Soy un animal y estoy emitiendo un sonido.");
    }
  }
  
  class Perro extends Animal {
    emitirSonido() {
      console.log("Soy un perro y estoy ladrando.");
    }
  }
  
  class Gato extends Animal {
    emitirSonido() {
      console.log("Soy un gato y estoy maullando.");
    }
  }
  
  const miPerro = new Perro("Toby", 3);
  const miGato = new Gato("Garfield", 5);
  
  miPerro.emitirSonido(); // output: "Soy un perro y estoy ladrando."
  miGato.emitirSonido(); // output: "Soy un gato y estoy maullando."