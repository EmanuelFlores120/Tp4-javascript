class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Métodos para modificar y mostrar propiedades
    setAlto(alto) {
      this.alto = alto;
    }
  
    setAncho(ancho) {
      this.ancho = ancho;
    }
  
    getAlto() {
      return this.alto;
    }
  
    getAncho() {
      return this.ancho;
    }
  
    // Métodos para calcular el perímetro y el área
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  // Pedir al usuario que ingrese los valores de alto y ancho
  const alto = parseInt(prompt("Ingrese el alto del rectángulo:"));
  const ancho = parseInt(prompt("Ingrese el ancho del rectángulo:"));
  
  // Crear un objeto rectángulo con los valores de alto y ancho ingresados
  const miRectangulo = new Rectangulo(alto, ancho);
  
  // Mostrar el área y el perímetro del rectángulo en la página web
  document.write(`El área del rectángulo es: ${miRectangulo.calcularArea()}<br>`);
  document.write(`El perímetro del rectángulo es: ${miRectangulo.calcularPerimetro()}`);
  