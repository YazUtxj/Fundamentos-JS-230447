// Repaso de  Ciclo y Sentencias de Control

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(255,0,127,1) 0%, rgba(255,77,255,1) 33%, rgba(255,192,203,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;
//Personalización de las Salidas a Consola
console.warn("Práctica 07: Arreglos en Java Script")

// SENTENCIAS DE CONTROL
console.log("%c1.- Condicionales - Si/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba lógica de verdadero  o falso
let fechaActual = new Date();
/*let fechaActual = new Date("2025/06/05");*/
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días

if (fechaActual.getHours() < 12)
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);

// Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
if (fechaActual.getMonth() <= 6)
    console.log(`Estas en la primera mitad del año.`);
else
    console.log(`Estas en la segunda mitad del año.`);


// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();


let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);
let estacion;
let horarioVerano = false;

if (fechaActual >= inicioPrimavera && fechaActual < inicioVerano) {
    console.log("Estamos en PRIMAVERA...")
    console.log("Incia la floración de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas...")
    console.log("Muchos animales despiertan de la hibernación... ")
    estacion = "Primavera"
    horarioVerano = true;
}
else if (fechaActual >= inicioVerano && fechaActual < inicioOtonio) {
    console.log("Estamos en VERANO...")
    console.log("En esta temporada los abundan los días Soleados y Calurosos...")
    console.log("En esta temporada el indicé de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire ... ")
    estacion = "Verano"
    horarioVerano = true;
}
else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno) {
    console.log("Estamos en OTOÑO...")
    console.log("Los árboles suelen cambiar de follaje")
    console.log("Se registarán temperaturas más templadas")
    console.log("Los animales comienza con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
    estacion = "Verano"
    horarioVerano = true;
}
else {
    console.log("Estamos en INVIERNO..")
    console.log("En esta temporada los días son más cortos y las noches más largas...")
    console.log("En algunas regiones suele nevar ...")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse")
    estacion = "Invierno"
    horarioVerano = false;

}


console.log("%c2.- Operador Ternario ( validacion?cumple:no_cumple) ", style_console);
// En Java Script exista una operación simplicada que valida si una condición se cumple o no, y que hacer en cada caso

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayoriaEdad = (edad) =>
    edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad."

console.log("Evaluando la mayoría de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámmetro en la evalación.

evaluarMayoriaEdad = (edad, pais) =>
    (edad >= 18 && pais === "MX") ? `En ${pais} eres mayor de edad ` : `En ${pais} NO eres mayor de edad `;

console.log("Evaluando la mayoría de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("Evaluando la mayoría de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona, "US"));


console.log("%c3.- SwITCH - CASE ( Elección por valor definido) ", style_console);

// Calculando tu generación en base a tu edad

let asingaGeneracion = (anioNacimiento) => {
    switch (true) {
        case (anioNacimiento < 1968):   //Baby Boomers 
            return "Baby Boomers";

        case (anioNacimiento > 1968 && anioNacimiento <= 1980):
            return "Generación X";

        case (anioNacimiento > 1980 && anioNacimiento <= 1994):
            return "Milenials";

        case (anioNacimiento > 1994 && anioNacimiento <= 2010):
            return "Centenials";

        case (anioNacimiento > 2010):
            return "Krystal";
    }
}

console.log(`Dado que naci en el 2005 soy de la generación: ${asingaGeneracion(2005)}`);

console.log("%c4.- Manejo de excepciones (TRY  / CATCH)) ", style_console);
// EN ALGUNAS OCASIONES EXISTIran erroes que no son culpa del program
console.log("1: Intentemos dividir:0/10 , el resultado es:")

try {
    let result = 0 / 10;
    console.log(result)
}
catch (error) {
    console.log("Ocurio un error" + error.message)

}

console.log(" 2:Intentemos dividir:10/0 , el resultado es:")
try {
    let result = 10 / 0;
    console.log(result)
}
catch (error) {
    console.log("Ocurio un error" + error.message)
}
console.log(" 3:Intentemos dividir la letra a:a/10 , el resultado es:")
try { //intenta
    let result = "a" / 10; //dividir una variable no definida entre 0
    console.log(result)
}
catch (error) {
    console.log("Ocurio un error" + error.message)
}
console.log("4:Intentemos dividir la variable a:a/10 , el resultado es:")
try { //intenta
    let result = a / 10; //dividir una variable no definida entre 0
    console.log(result)
}
catch (error) {
    console.log("Ocurio un error" + error.message)
}
console.log("5:Intentemos dividir la vaRIABLE X/ entre el valor de la variable y  , el resultado es:")
try { //intenta
    let x = 8, y = 2, result = x / y//dividir una variable no definida entre 0
    console.log(result)
}
catch (error) {
    console.log("Ocurio un error" + error.message)
}



console.log("%c5.- Control de Ciclos (BREAK  / CONTINUE) ", style_console);
// EN ALGUAS OCSIONES  sera impiortante detwener un ciclo de manera abrupta  para controlar los casos especuiales en un ciclo..
console.log("Vamos a contar hasta 10");
for (let num = 1; num <= 10; num++) {
    console.log(num)
}
console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte ...");
for (let num = 1; num <= 10; num++) {
    if (num == 7)
        break;
    else
        console.log(num)
}

console.log("Ahora necesitamos que si llegas al 7 te saltes ese numero y continues ...");
for (let num = 1; num <= 10; num++) {
    if (num == 7) {
        continue;
    }
    console.log(num)
}

// CICLOS ITERATIVOS
console.log("%c6.- Ciclos Iterativo -(for)", style_console);
console.log("Los días de la semana son:");
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
for (let i = 0; i < dias.length; i++) {
    console.log(dias[i]);
}

console.log("Ahora vamos a imprimir los meses del año:");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (let i = meses.length - 1; i >= 0; i--) {
    console.log(meses[i]); // Cambié a meses[i] para imprimir cada mes
}

console.log("%c7.- Ciclos Condicionales (WHILE)", style_console);
let finDeSemana = false;
let mensaje = "";
let j = 0;

while (j < dias.length) {
    switch (j) {
        case 0:
            finDeSemana = true;
            mensaje = "Mormingo ...zzzzzzzz";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "San lunes de flojera";
            break;
        case 2:
            finDeSemana = false;
            mensaje = "Día para descansito";
            break;
        case 3:
            finDeSemana = false;
            mensaje = "Día fácil";
            break;
        case 4:
            finDeSemana = false;
            mensaje = "Ya se acerca el fin de los tiempos";
            break;
        case 5:
            finDeSemana = false;
            mensaje = "Viernes de descanso";
            break;
        case 6:
            finDeSemana = true; // Aquí debería ser fin de semana
            mensaje = "Sábado de películas";
            break;
    }
    if (finDeSemana) {
        console.log(`Mensaje del día: ${mensaje}`);
        console.log(`Día: ${dias[j]}`);
    }

    console.log(`Mensaje del día: ${mensaje}`);
    console.log(`Día: ${dias[j]}`);
    j++; // Aumentar j para evitar el bucle infinito
}

console.log("%c8  - Ciclo Condicionales , que se ejecuta al menos una vez - (DO- WHILE)", style_console);


let episodios = [

    "Episodio 1: El encuentro ",
    "Episodio 2: La atraccion",
    "Episodio 3: El  beso ",
    "Episodio 4: El secreto ",
    "Episodio 5: El amigo "
]
let indice = 0;
let continuarViendo = true; // aqui se simula la desicion del usuario para seguir viendo los episorios
do {
    console.log(`Reproduciendo ${episodios[indice]}`)
    //simulamos la reproduccion del episodio
    indice++;


    // simulamos una pregunta al usuario si desea seguir viendo
    if (indice < episodios.length) {
        continuarViendo = confirm("Deseas continuar con el siguiente episodio?");
    } else {
        continuarViendo = false; // cuando se acabe la lista de episodios 
    }
} while (continuarViendo && indice < episodios.length)
    ;
console.log("Fin de la reproduccion");

// ciclo para recorrer objetos iterables como mapas , arreglos , cademas y conjuntos de datos

console.log("%c9 .- Ciclos para rrecorrer elementos finitos (FOR ... OF))", style_console);
 let seriesTrinading =[
    { nombre: "The witcher ", temporadas:15 ,totalViews: "1.5M" , totalReproducciones:"3.0M"},
    { nombre : "Stranger Things", temporadas :4, totalViews:"6.5M" , totalReproducciones:"10m"},
    { nombre: "The Boys", temporadas:3, totalViews :"2.2M",totalReproducciones:"20m"},
    { nombre : "Loki", temporadas :2,totalViews: "250K" , totalReproducciones:"475k"},
    { nombre: "Succesion", temporadas: 3, totalViews:"122.0m" ,totalReproducciones :"3848L" },
 ]

 for(let serie of seriesTrinading){
    console.log(`Serie ${serie.nombre} , Temporadas : ${serie.temporadas}` )
 }
 //console.log(`La ultima serie leida fue ${serie.nombre}`)
 // no  va A FUNCIONAR POR LA VAriable serrie yA NO EXISTE YA QUE SU ALCANCE SOLO ESTUVO DURAnte el ciclo 
try{
    console.log(`La ultima serie leida fue ${serie.nombre}`)
}
catch (error)
{
    console.log("Mensaje de error   " +  error.mensaje)
}

console.log("%c10.- Ciclos para rrecorrer las propiedades  (FOR ... in))", style_console);
//usando ofr in par RECORRER CADA SERIE
for(let i in seriesTrinading){
    console.log(`Serie ${parseInt(i)+1}`);
    for(let propiedad in seriesTrinading[i]){
        console.log(`${propiedad}: ${seriesTrinading[i][propiedad]}`);
    }
    console.log(`--------------`)
}
console.log("%c11.- Ciclos ininterrumpidosn  para cada uno de los elementos (FOR ... in))", style_console)

 let seriesTrending2 =[
    { nombre: "The witcher ", temporadas:2,views: 6000000, reproducciones:300000},
    { nombre : "Stranger Things", temporadas :4,views:1200000, reproducciones:200000},
    { nombre: "The Boys", temporadas:3, views :12000,reproducciones:40000},
    { nombre : "Loki", temporadas :5,views: 900000, reproducciones:210000},
    { nombre: "Succesion", temporadas: 15, views:50000 ,reproducciones :35000},
    { nombre: "The Walking Dead", temporadas: 20, views:5000000 ,reproducciones :365000},

 ] 



 seriesTrending2.forEach((serie ,index) => {
 
    let calificacion = (serie.reproducciones /serie.views).toFixed(2);
    // calcula la calificacion y la redondea a 2 decimales
    console.log(`Serie ${index + 1}`);
    console.log(`Nombre: ${serie.nombre}`)
    console.log(`Temporadas : ${serie.temporadas}`)
    console.log(`Reproducciones ${serie.reproducciones}`)
    console.log(`Calificacion ${calificacion}`)
    console.log(`--------------`)


 });

// usando filter para filtrar y map para transformar la informacion
let serieDeseadas=[ "The Witcher" , "The Boys" , " Loki"] 
// usando map e includes para filtrar  y pbtener los nombres de series con 3 temporadas
let seriesConTresTemporadas = seriesTrending2
.filter(serie => serie.temporadas <= 3) // filtramos las series que tienen 3 twemporadass
.map(serie => serie.nombre) //Obtenemos solos los nombrtes de esas series
.filter(nombre => serieDeseadas.includes(nombre)); // Filtramos las que estan en la lista deseadas
//Mostar los resultaods
console.log("Serie con 3 temporadas que estan en la lista deseada")
console.table(seriesConTresTemporadas); 