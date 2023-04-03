// Crear objeto cuenta
const cuenta = {
    titular: "Alex",
    saldo: 0,
    
    // Método para ingresar dinero a la cuenta
    ingresar: function(cantidad) {
      this.saldo += cantidad;
    },
    
    // Método para retirar dinero de la cuenta
    extraer: function(cantidad) {
      if (cantidad > this.saldo) {
        console.log("No se puede retirar más dinero del que hay en la cuenta");
      } else {
        this.saldo -= cantidad;
      }
    }
  };
  
  // Mostrar saldo actual de la cuenta
  alert(`El saldo actual de la cuenta es ${cuenta.saldo}`);
  
  // Solicitar al usuario la cantidad a depositar
  const deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  
  // Actualizar el saldo de la cuenta con la cantidad depositada
  cuenta.ingresar(deposito);
  
  // Mostrar el saldo actual de la cuenta
  alert(`El saldo actual de la cuenta es ${cuenta.saldo}`);
  
  // Solicitar al usuario la cantidad a retirar
  const retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
  
  // Actualizar el saldo de la cuenta con la cantidad retirada
  cuenta.extraer(retiro);
  
  // Mostrar el saldo actual de la cuenta
  alert(`El saldo actual de la cuenta es ${cuenta.saldo}`);