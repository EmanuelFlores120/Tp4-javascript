class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.pasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.pasajeros.length < this.capacidad) {
        this.pasajeros.push(pasajero);
        console.log(`${pasajero} ha abordado el avión ${this.nombre}`);
      } else {
        console.log(`Lo siento, el avión ${this.nombre} está lleno`);
      }
    }
  }
  
  class Aeropuerto {
    constructor(nombre) {
      this.nombreAeropuerto = nombre;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
      console.log(`El avión ${avion.nombre} ha sido agregado al aeropuerto`);
    }
  
    buscarAvion(nombre) {
      for (let i = 0; i < this.listaAviones.length; i++) {
        if (this.listaAviones[i].nombre === nombre) {
          console.log(`Avión ${nombre}: capacidad ${this.listaAviones[i].capacidad}, destino ${this.listaAviones[i].destino}`);
          return;
        }
      }
      console.log(`No se encontró el avión ${nombre}`);
    }
  }
  
  // Crear objeto Aeropuerto Internacional
  const aeropuerto = new Aeropuerto("Aeropuerto Internacional");
  
  // Crear 3 objetos Avion con diferentes destinos
  const avion1 = new Avion("AV01", 100, "Londres");
  const avion2 = new Avion("AV02", 80, "Nueva York");
  const avion3 = new Avion("AV03", 120, "Tokio");
  
  // Agregar los 3 aviones al aeropuerto
  aeropuerto.agregarAvion(avion1);
  aeropuerto.agregarAvion(avion2);
  aeropuerto.agregarAvion(avion3);
  
  // Buscar un avión y usar el método abordar
  aeropuerto.buscarAvion("AV02");
  avion2.abordar("Juan");
  avion2.abordar("María");
  