class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
  
    despedirse() {
      console.log(`Adiós, hasta pronto.`);
    }
  }
  
  const persona1 = new Persona("Juan", 25, "Ingeniero, todo piola y vos?");
  const persona2 = new Persona("María", 30, "Abogada, flaco toca paya");
  
  persona1.saludar(); // Hola, mi nombre es Juan, tengo 25 años y soy Ingeniero.
  persona2.saludar(); // Hola, mi nombre es María, tengo 30 años y soy Abogada.
  
  persona1.despedirse(); // Adiós, hasta pronto.
  persona2.despedirse(); // Adiós, hasta pronto.
  