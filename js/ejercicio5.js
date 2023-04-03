class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
      this.DNI = this.generaDNI();
    }
  
    mostrarGeneracion() {
      let generacion = "";
      if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        generacion = "Silent Generation";
        console.log(`${this.nombre} pertenece a la generación ${generacion}. Actualmente son una poblacion de 6.300.000, vivieron en un contexto historico de conflictos belicos y su ragos caracteristico es la austeridad`);
      } 
      else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        generacion = "Baby Boomer";
        console.log(`${this.nombre} pertenece a la generación ${generacion}.Actualmente son una poblacion de 12.200.000, vivieron en un contexto historico de paz y explosion demografica y su rasgo caracteristico es la ambición`);
      } 
      else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        generacion = "Generación X";
        console.log(`${this.nombre} pertenece a la generación ${generacion}. Actualmente son una poblacion de 9.300.000, vivieron en un contexto historico de crisis del 73 y transicion española y su rasgo caracteristico es la obsesion por el exito.`);
      } 
      else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = "Millennials";
        console.log(`${this.nombre} pertenece a la generación ${generacion}. Actualmente son una poblacion de 7.200.000, vivieron en un contexto historico del inicio de la digitalizacion y su rasgo caracteristico es la frustracion.`);
      } 
      else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = "Generación Z";
        console.log(`${this.nombre} pertenece a la generación ${generacion}. Actualmente son una poblacion de 7.800.000, vivieron en un contexto historico de expasion masiva del internet y su rasgo caracteristico es la irreverencia.`);
      } 
      else {
        console.log("No se puede determinar la generación.");
      }
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} es menor de edad.`);
      }
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`DNI: ${this.DNI}`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Peso: ${this.peso} kg`);
      console.log(`Altura: ${this.altura} m`);
      console.log(`Año de Nacimiento: ${this.anioNacimiento}`);
      
    }
  
    generaDNI() {
      return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
  }
  
  let nombre = prompt("Ingresa el nombre de la persona:");
  let edad = parseInt(prompt("Ingresa la edad de la persona:"));
  let dni = parseInt(prompt("Ingresa el DNI de la persona:"));
  let sexo = prompt("Ingresa el sexo de la persona (H para hombre, M para mujer):").toUpperCase();
  let peso = parseFloat(prompt("Ingresa el peso de la persona en kg:"));
  let altura = parseFloat(prompt("Ingresa la altura de la persona en cm:"));
  let anioNacimiento = parseInt(prompt("Ingresa el año de nacimiento de la persona:"));
  
  
  
  let persona = new Persona(nombre, edad, sexo, peso, altura, anioNacimiento,dni);
  
  persona.mostrarGeneracion();
  persona.esMayorDeEdad();
  persona.mostrarDatos();
  persona.generaDNI();
  