// Comentarios de una sola línea
/* 
    Comentarios multi línea
*/
// EJERCICIO 01 : Declaración de Variables
// a) Var
var miNombre = "Marco A.";
var misApellidos;
var miEdad = 32;
//El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una función o método
console.warn("--- Declaración de variables usando:  VAR");
console.log("Intentando leer las variables: ", miNombre, misApellidos);
misApellidos = "Ramírez Hernández"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas: ", miNombre, misApellidos);
// Una variable puede cambiar en el proceso de ejecución del progama.
 //  b) Const
console.warn("--- Declaración de variables del tipo constante usando: CONST")
const miUniversidad ="UT Xicotepec";
const miMatricula=2399999
console.log("Hola, ", miNombre," ",misApellidos," se que estudias actualmente en: ", miUniversidad, " asignaron la matricula: ", miMatricula, " y tienes una edad de:", miEdad, "años.");
// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeOf()
console.log("Analizando los datos puedo deducir que: ")
console.log("miNombre es  del tipo:", typeof(miNombre))
console.log("misApellidos es  del tipo:", typeof(misApellidos))
console.log("miUniversidad es  del tipo:", typeof(miUniversidad))
console.log("miMatricula es  del tipo:", typeof(miMatricula))
console.log("miEdad es  del tipo:", typeof(miEdad))
// c) LET
let miFechaNacimiento= "1992-09-16";
let miColorFavorito;
console.warn("--- Declaración de Variable Locales usando : LET")
console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el: ", miFechaNacimiento," y tu colorFavorito es: mmmmmmmmm dejame pensar....")
miColorFavorito="Naranja";
console.log(`Creo que es ${miColorFavorito}, le atine?`)  // La manera de mezclar textos fijos con el valor actual de las variables se le conoce cómo: interpolación y deben iniciar  y finalizar on un backtic - tilde inversa
console.log("Analizando los datos puedo deducir que: ")
console.log("miColorFavorito es  del tipo:", typeof(miColorFavorito))
console.log("miFechaNacimiento es  del tipo:", typeof(miFechaNacimiento))