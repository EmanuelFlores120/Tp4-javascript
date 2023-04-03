// Crear objeto auto
const auto = {
    color: 'rojo',
    marca: 'Toyota',
    modelo: 'Corolla',
    encendido: false,
    
    // Método para encender el auto
    encender: function() {
      this.encendido = true;
      console.log('Auto encendido');
    },
    
    // Método para apagar el auto
    apagar: function() {
      this.encendido = false;
      console.log('El auto se apagó');
    }
  };
  
  // Ejecutar los métodos
  auto.encender(); // "Auto encendido"
  auto.apagar(); // "El auto se apagó"
  