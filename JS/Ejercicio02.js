// // Tipos de Datos en JS
// // 1. Undefined
// console.warn("--- Tipo de Dato UNDEFIEND");
// let cliente;
// console.log(`El cliente es:  ${cliente}`);
// console.log(`El tipo de dato de la variable cliente es: ${typeof cliente}`);
// cliente = "Juan Romero";
// console.log(`El cliente es:  ${cliente}`);
// console.log(`El tipo de dato de la variable cliente es: ${typeof cliente}`);
// cliente = 19227;
// console.log(`El cliente es:  ${cliente}`);
// console.log(`El tipo de dato de la variable cliente es: ${typeof cliente}`);
// // Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas
// // 2. BOOLEAN
// console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/ False");
// let esPremium = "No lo sé";
// console.log(`¿Es el cliente Premium? : ${esPremium}`);
// console.log(
//   `El tipo de dato de la variable esPrremium es: ${typeof esPremium}`
// );
// console.log('Asignando el valor "true" a la variable. ');
// esPremium = "true";
// console.log(
//   `El tipo de dato de la variable esPrremium es: ${typeof esPremium}`
// );
// console.log("Asignando el valor true a la variable. ");
// esPremium = true;
// console.log(
//   `El tipo de dato de la variable esPrremium es: ${typeof esPremium}`
// );
// console.log(`¿Es el cliente Premium? : ${esPremium}`);
// console.log("Cambiando el valor de esPremium a false");
// esPremium = 0;
// if (esPremium) console.log("El cliente pago por usar el servicio.");
// else console.log("El cliente que recibe los servicios gratuitos");
// // 3. NUMBER
// var cantidad;
// const costo_producto = 10.5;
// let saldo_cuenta = -2500.4;
// let monto_transaccion;
// console.warn(
//   "--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimleas , flotantes"
// );
// console.log(
//   `Tu saldo al día de hoy es de: ${saldo_cuenta},  (Tipo de Dato = ${typeof saldo_cuenta})`
// );
// console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
// cantidad = 8;
// console.log(`Has elegido comprar:  ${cantidad} de productos.`);
// console.log(`El importe total de la compra es: ${cantidad * costo_producto}`);
// saldo_cuenta = saldo_cuenta - cantidad * costo_producto;
// console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// // El cliente realiza un abono de 1500
// monto_transaccion = 1500;
// console.log(
//   `Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${
//     saldo_cuenta + monto_transaccion
//   }`
// );
//4. STRING (Cadena de Caractéres)
const alumno = "Marco A. Ramírez Hernández"
let producto;
console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto="MONITOR 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);
// Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas cómo convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);
// 5. BIGINT (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere de una excelente precisión numérica.
console.warn("--- Tipo de Dato - BIGINT (Número Ampplio)");
console.warn("--- Tipo de Dato - BIGINT (Número Ampplio");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
const numeroGrande3 = 12345678901234567890123456789
const numeroGrande4 = 123456789012345678901234567891234567890
console.log(`El primero experimento de un numero grandre es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El segundo experimento de un numero grandre es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El tercero experimento de un numero grandre es: ${numeroGrande3}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El cuarto experimento de un numero grandre es: ${numeroGrande4}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande4)}`)

// Para definir el tipo de dato BigInt debemos invocar la función BigInt o usar un la letra "n" al final del número en la asignación de valor.
console.log("Declaramos los valores númericos gran tamaño...")
//numeroGrande3 = BigInt(12345678901234567890123456789);
//numeroGrande4 = 123456789012345678901234567891234567890n;
console.log(`El segundo experimento de un numero grandre es: ${numeroGrande3}, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El segundo experimento de un numero grandre es: ${numeroGrande4}, y su tipo de dato es: ${typeof(numeroGrande4)}`)
// Hay que considerar que los tipos de datos declarados cómo BigInt no son operables con los de tipo number
let numero = 238;
// Si intentamos realizar una operación matemática entre estos dos tipos de datos, obtendremos un error crítico de operación.
//console.log(`El resultado de la operación de: numeroGrande4/ numero es = a : ${numeroGrande4/BigInt(numero)}` );
// 6. SYMBOL
console.warn("--- Tipo de Dato - SYMBOL (Simbolo o Forzar la Unicidad)");
// Declaramos diferentes variables con valores similares o iguales?
const numero1 = 2;
const numero2 = 2.0;
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");
const numero9 = Symbol(2);
// Prueba de comparación 1 
console.log("Prueba de comparación 1: ¿es 2 = 2.0?")
if(numero1 == numero2)
   console.log(`Se han comparado los valores de  numero1 y numero2, confirmado que tienen el mismo valor.`)
else
    console.log(`Se han comparado los valores de  numero1 y numero2, detectando que NO tienen el mismo valor.`)
// Prueba de comparación 2
console.log("Prueba de comparación 2: ¿es 2 = \"2\"?")
if(numero1 == numero3)
    console.log(`Se han comparado los valores de  numero1 y numero3, confirmado que tienen el mismo valor.`)
 else
     console.log(`Se han comparado los valores de  numero1 y numero3, detectando que NO tienen el mismo valor.`)
 
// Prueba de comparación 3
console.log("Prueba de comparación 3: ¿es 2 estrictamente = \"2\"?")
if(numero1 === numero3)
    console.log(`Se han comparado los valores de  numero1 y numero3, confirmado que tienen el mismo valor.`)
 else
     console.log(`Se han comparado los valores de  numero1 y numero3, detectando que NO tienen el mismo valor.`)
 
// Prueba de comparación 4
console.log("Prueba de comparación 4: ¿es 2 = \"2.0\"?")
if(numero1 == numero4)
    console.log(`Se han comparado los valores de  numero1 y numero4, confirmado que tienen el mismo valor.`)
 else
     console.log(`Se han comparado los valores de  numero1 y numero4, detectando que NO tienen el mismo valor.`)
// Prueba de comparación 5
console.log("Prueba de comparación 5: ¿es 2 = \"2.0\"?")
if(numero1 === numero4)
    console.log(`Se han comparado los valores de  numero1 y numero4, confirmado que tienen el mismo valor.`)
 else
     console.log(`Se han comparado los valores de  numero1 y numero4, detectando que NO tienen el mismo valor.`)
// Prueba de comparación 6
console.log("Prueba de comparación 6: ¿es 2 = Symbol(2)?")
if(numero1 === numero5)
    console.log(`Se han comparado los valores de  numero1 y numero5, confirmado que tienen el mismo valor.`)
 else
     console.log(`Se han comparado los valores de  numero1 y numero5, detectando que NO tienen el mismo valor.`)
     // Prueba de comparación 7
console.log("Prueba de comparación 7: ¿es Symbol(2) = Symbol(\"2\")?")
if(numero5 == numero7)
    console.log(`Se han comparado los valores de  numero5 y numero7, confirmado que tienen el mismo valor.`)
 else
     console.log(`Se han comparado los valores de  numero5 y numero7, detectando que NO tienen el mismo valor.`)
// Prueba de comparación 8
console.log("Prueba de comparación 8: ¿es Symbol(2) = Symbol(2)?")
if(numero5 == numero9)
    console.log(`Se han comparado los valores de  numero5 y numero9, confirmado que tienen el mismo valor.`)
 else
     console.log(`Se han comparado los valores de  numero5 y numero9, detectando que NO tienen el mismo valor.`)
// 7. NULL 
console.warn("--- Tipo de Dato - NULL (Nulo o Vacío)");
// El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacío , bajo su consentimiento, a diferencia de UNDEFIEND que es un valor desconocido asignado por DEFAULT por JS.
let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental= null;
let fecha_ultimoPost;
// Supongamos que estamos programando una Red Social, tipo Facebook, en la que parte de la información se publicará en el perfil del usuario.
// Si el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicacion web, puede explorar contenido de acceso publico. y no existira información para mostrar.
// En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su numbero telefónico o correo electrónico y una contraseña que deberemos guardar en las variables previamente declaradas. 
// Supongamos que el usuario: Marco R. con correo electrónico marco.ram@gmail.com desea ingresar con su contraseña: pas1234
nombreUsuario = "marco.ram@gmail.com";
passUsuario = "pass123";
// en este momento de ejecución del sistema no sabemos su género , ni su estatus de relación sentimental.
console.log(`El usuario: ${nombreUsuario} esta intentado logearse con una contraseña de: ${passUsuario}`);
// Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzará la sesión en la plataforma actualizando estos valores.
// Dado que Marco es del genero Másculino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado esto generar la actualización de los valores de las variables
generoUsuario="M"
estatusRelacionSentimental=null
console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su información de perfil 
  podemos deducir que es del género ${generoUsuario} y que su estatus de relación es: 
  ${estatusRelacionSentimental} y su última publicación la realizó el: ${fecha_ultimoPost}`);

  //Comparando NULL VS UNDEFINED
  // si bien UNDEFINED y NULL tienen el mismo valor , no tienen el mismo tipo de dato
  console.log("COMPARACION DE LA EQUIDAD ENTRE UNDEFINED Y NULL :");
  (fecha_ultimoPost==estatusRelacionSentimental)?
  console.log("ambas variables tienen el mismo valor"):
  console.log("la variable no tiene el mismo valor ");

  console.log("COMPARACION DE LA IDENTIDAD ENTRE UNDEFINED :");
    (fecha_ultimoPost===estatusRelacionSentimental)?
    console.log("ambas variables tienen el mismo valor y el mismo tipo de datos"):
    console.log("la variables tienen el mismo valor , pero no el mismo tipo de dato ");

    // 8:FUNTION (fUNCIONES)
    console.warn("---Tipo de dato FUNCTION (function)")
    //declaramos una funcion que nos permite recibir un parametro en este caso el nombre
    // de la persona a saludar y le enviamos un saludo , esta funcion la asignamos a una constante.
    const saludar = function(nombre){
      return `Hola , ${nombre} !`
    }
    //invocamos a la funcion declarada
    console.log(saludar(`Yazmin`));

    //Y Tipo de dato que tiene la constante
    console.log(`el tipo de dato de la constante saludar es :${typeof(saludar)}`)