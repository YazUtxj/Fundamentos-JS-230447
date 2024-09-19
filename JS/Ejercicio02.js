// Tipos de Datos en JS
// 1. Undefined
console.warn("--- Tipo de Dato UNDEFIEND");
let cliente;
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof cliente}`);
cliente = "Juan Romero";
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof cliente}`);
cliente = 19227;
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof cliente}`);
// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas
// 2. BOOLEAN
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/ False");
//console.log(`El cliente ha realizado ${NumCompras} en este mes.`);

let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log(
  `El tipo de dato de la variable esPrremium es: ${typeof esPremium}`
);
console.log('Asignando el valor "true" a la variable. ');
esPremium = "true";
console.log(
  `El tipo de dato de la variable esPrremium es: ${typeof esPremium}`
);
console.log("Asignando el valor true a la variable. ");
esPremium = true;
console.log(
  `El tipo de dato de la variable esPrremium es: ${typeof esPremium}`
);
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false");
esPremium = 0;
if (esPremium) console.log("El cliente pago por usar el servicio.");
else console.log("El cliente que recibe los servicios gratuitos");
// 3. NUMBER
var cantidad;
const costo_producto = 10.5;
let saldo_cuenta = -2500.4;
let monto_transaccion;
console.warn(
  "--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimleas , flotantes"
);
console.log(
  `Tu saldo al día de hoy es de: ${saldo_cuenta},  (Tipo de Dato = ${typeof saldo_cuenta})`
);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad = 8;
console.log(`Has elegido comprar:  ${cantidad} de productos.`);
console.log(`El importe total de la compra es: ${cantidad * costo_producto}`);
saldo_cuenta = saldo_cuenta - cantidad * costo_producto;
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion = 1500;
console.log(
  `Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${
    saldo_cuenta + monto_transaccion
  }`
);

// STRING (Cadena de Caractéres)
const alumno = "Marco A. Ramírez Hernández"
let producto;
console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto="MONITOR 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);
// Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas cómo convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);
// BIGINT (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere de una excelente precisión numérica.
console.warn("--- Tipo de Dato - BIGINT (Número Ampplio");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
const numeroGrande3 = 12345678901234567890123456789
const numeroGrande4 = 123456789012345678901234567891234567890
console.log(`El primero experimento de un numero grandre es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El primero experimento de un numero grandre es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El primero experimento de un numero grandre es: ${numeroGrande3}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El primero experimento de un numero grandre es: ${numeroGrande4}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande4)}`)
console.log()