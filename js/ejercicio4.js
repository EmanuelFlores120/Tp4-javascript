class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      return `<p>Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}</p>`;
    }
  }
  
  const producto1 = new Producto(1, "Lápiz", 0.5);
  const producto2 = new Producto(2, "Libreta", 2.5);
  const producto3 = new Producto(3, "Borrador", 0.2);
  
  const productos = [producto1, producto2, producto3];
  
  const productosContainer = document.getElementById("productos-container");
  
  for (let producto of productos) {
    productosContainer.innerHTML += producto.imprimeDatos();
  }
  
