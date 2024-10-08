// Repaso de Arreglo

//Declaración de Variables de Estilo
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prácitca 06: Arreglos en Java Script")

//DECLARACIÓN DE UN ARREGLO
console.log("%c1.- Declaración de un Arreglo (Array)", style_console);
//Para declarar un arreglo (array) de datos en JavaScript basta con  agregar [], y dentro los datos que contendra el arreglo.
const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
//Visualización de los elementos de un arreglo.
console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites establecidos.  siendo el límite inferior 0 y el superior tamaño -1 
console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`El úlitmo mes del año es: ${mesesAnio[mesesAnio.length-1]}`)

// No se pueden acceder a elementos con posiciones negativas o posiciones superiores al tamaño definido.
console.log(`El mes del año en la posición -1 es:  ${mesesAnio[-1]}`)
console.log(`El treceavo mes del año en la posición es:  ${mesesAnio[12]}`)
console.log(`¿Que tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)

//Al ser JavaScript un leguaje débilmente tipado podremos crear arreglos mixtos de tipos de Datos
console.log("Declarando un Arreglo Mixto")
const saludar =  function(nombre){return `Hola, ${nombre}!`}
let arregloMixto = ["String", 5,45.26,-200, -.16854, Symbol("MARH"), 'z', false, BigInt(1111222233334444555566667777), true, {latidud: "20° 18' 0\" N" , longitud: "97° 58' 00\" W", altitud: 796}, saludar, null ]

//Mostramos el contenido del objeto
console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posicion[0] = ${arregloMixto[0]} y es del tipo: ${(typeof(arregloMixto[0]))}`);
console.log(`El dato en la posicion[1] = ${arregloMixto[1]} y es del tipo: ${(typeof(arregloMixto[1]))}`);
console.log(`El dato en la posicion[2] = ${arregloMixto[2]} y es del tipo: ${(typeof(arregloMixto[2]))}`);
console.log(`El dato en la posicion[3] = ${arregloMixto[3]} y es del tipo: ${(typeof(arregloMixto[3]))}`);
console.log(`El dato en la posicion[4] = ${arregloMixto[4]} y es del tipo: ${(typeof(arregloMixto[4]))}`);
console.log(`El dato en la posicion[5] = ${arregloMixto[5].toString} y es del tipo: ${(typeof(arregloMixto[5]))}`);
console.log(`El dato en la posicion[6] = ${arregloMixto[6]} y es del tipo: ${(typeof(arregloMixto[6]))}`);
console.log(`El dato en la posicion[7] = ${arregloMixto[7]} y es del tipo: ${(typeof(arregloMixto[7]))}`);
console.log(`El dato en la posicion[8] = ${arregloMixto[8]} y es del tipo: ${(typeof(arregloMixto[8]))}`);
console.log(`El dato en la posicion[9] = ${arregloMixto[9]} y es del tipo: ${(typeof(arregloMixto[9]))}`);
console.log(`El dato en la posicion[10] = ${arregloMixto[10]} y es del tipo: ${(typeof(arregloMixto[10]))}`);
console.log(`El dato en la posicion[11] = ${arregloMixto[11]} y es del tipo: ${(typeof(arregloMixto[11]))}`);
console.log(`El dato en la posicion[12] = ${arregloMixto[12]} y es del tipo: ${(typeof(arregloMixto[12]))}`);

console.log("%c3.- Arreglos Multidimencionales (Matrices)", style_console);
console.log("Declarando una matriz regular.")
//Una matriz es una estructura de datos multidensional (tabla) de n columnas o m filas

let matriz = [[1,2,3,4],['a','b','c','d']]
//esta es una matríz regular de 4 x 4
console.log(matriz)
console.table(matriz)
console.log("Declarando una matriz irregular.")

const matrizIrregular= [["Juan", "Pedro", "María", "Inés"],
[true,false,null],
[9.2]]

console.log(matrizIrregular)
console.table(matrizIrregular)

// Accediendo a los valores de una matriz
console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elemento en la posicion [0][0]: ${matriz[0][0]}`)
console.log(`Elemento en la posicion [1][2]: ${matriz[1][2]}`)

// Accediendo a los valores de una matriz irregular
console.log("Leyendo las Propiedades de una Matriz Irregular")
console.log(`Elemento en la posicion [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elemento en la posicion [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`)
console.log(`Elemento en la posicion [1][2] (¿Es María mayor de edad?): ${matrizIrregular[1]
[2]}`)

// Funciones y Métodos de Arreglos
// Los metodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un método sino una propiedad
console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methods or Array Functions", style_console);
console.log("¿Como saber cual es el tamaño de un arrego?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`¿Qué pasa con los multidimensionales ?`)
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`)
console.log("mmm, eso me da el tamaño de número de filas de la matriz, pero cómo saber el numero de columnas?")
console.log(`la matriz regular tiene un número de ${matriz[0].length}`)
console.log("Y para las irregulares?")
// Para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
let numeroFilas = matrizIrregular.length
for (let i = 0;i<numeroFilas; i++)
console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`)


console.log("$c5.- Agregar un nuevo elemento a un arreglo (PUSH)",style_console);
let estudiantes = [ "Al Farías", "Jesús Artiaga", "Teresa Vargas","Sayurid Bautista","Derek Sesni"]
console.log("Los elementos actuales del arreglo son: ")
console.table(estudiantes);
console.log(`Agregamos a un nuevo estudiante llamado: Obed Gúzman`)
estudiantes.push("Obed Gúzman")
console.log(`Después de agregarlo los elementos del arreglo son: `)
console.table(estudiantes);
console.log("¿Qué pasa con los Mixtos?")
console.log("El arregloMixto actualmente tiene los siguientes elementos: ")
console.table(arregloMixto);
console.log("Agregamos la palabra: \"Hola\", como nuevo elemento")
arregloMixto.push("Hola");
console.log("Y también agregamos el numero -3218817875487448415.23597518864, siendo este un BigInt")
arregloMixto.push(BigInt(-3218817875487448415.23597518864))
console.log("Después de esta dos operaciones el arreglo queda con los siguientes elementos: ")
console.table(arregloMixto)


console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posición inicial",style_console)
console.table(estudiantes)
console.log("Ahora agregamos a Yazmin Gutierrez, al comienzo del arreglo.")
estudiantes.unshift("Yazmin Gutierrez")
console.log("La lista atual es:")
console.table(estudiantes)

console.log("%c7.- Eliminar el elemento de un arreglo en la última posición (POP)",style_console)
console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Obed Gúzman, en la última posición. ")
console.log("Después de eliminar el elemento el arreglo quedo de la siguiente manera:")
estudiantes.pop();
console.table(estudiantes)

console.log("%c8.- Eliminar el elemento de un arreglo en la primera posición (SHIFT)",style_console)
console.log("El arreglo tiene los siguientes elementos:")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Raúl Pasos, en la primera posición.")
estudiantes.shift();
console.log("Después de eliminar el elemento del arreglo quedo de la siguiente manera: ")
console.table(estudiantes);

// Sirve para modificar , reemplazar o eliminar
// splice.[posicion,cantidad,cosa a cambiar]
console.log("%c9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console)
console.log("El arreglo original tiene los elementos:")
console.table(estudiantes);
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posicion ");
estudiantes.splice(2);
console.table(estudiantes);
//Cuando la funcion SPLICE recibe dos parametros se eliminan los elementos que no esten en ese rango
estudiantes.push("Citlalli Dionisio");
estudiantes.push("Jenny");
estudiantes.push("Diego Miguel");
estudiantes.push("Marcos Hernandez");
estudiantes.push("Raul Vasos");
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es")
console.table(estudiantes)
console.log("Ahora ya tenemos los elementos suficientes para aplicar el splice con dos parametros 3,5")
estudiantes.splice(3,5);
console.log(" resultado en ;")
console.table(estudiantes)
console.log("Ahora vamos a insertar a \Jesus Potter \  en los elementos de la posicion 0 y 1 ")
estudiantes.splice(0,1,"Jesus  H .Potter")
console.log(" resultado en ;")
console.table(estudiantes)
//tambien splice sirve para reemplzar elementos por otros
console.log("Ahora vamos a insertar  a ")
estudiantes.splice(0,1,"Brisa Nayeli")
console.log(" resultado en ;")
console.table(estudiantes)



console.log("%c10.- Metodos para la manipulacion de Areglos INMUTABLES", style_console)

let signosZodiacales=["Aries" ,"Tauro" , "Geminis", "Cancer" , "Leo", "Virgo" , "Libra" 
, "Escorpio" , "Sagitario" ,"Capricornio","Acuario", "Piscis"];
Object.freeze(signosZodiacales);
//signosZodiacales.push("Ofiuco")
//signosZodiacales.unshift()
//signosZodiacales.splice(6,2)

let [signo1,,signo3,,,,signo7,,,,,] =signosZodiacales;
console.log(`El primer  signo zodiacal es ${signo1}`)
console.log(`El  tercer  signo zodiacal es ${signo3}`)
console.log(`El septimo signo zodiacal es ${signo7}`)


console.log("%c11.- Filtrado de Elementos  dentro de un arreglo utilizando el metodo FILTER", style_console)
estudiantes.push("Citlalli Dionisio");
estudiantes.push("Jenny");
estudiantes.push("Diego Miguel");
estudiantes.push("Marcos Hernandez");
estudiantes.push("Raul Vasos");
console.table(estudiantes)
Object.freeze(estudiantes)
//Filter es un metodo que recorre los elementos de un arreglo haciendo alguna tarea en especifico
// lo que tenemos que considerar es que este neuvo areglo resultante es un objeto nuevo que puede ser mutabler
console.log("Filtrando los primeros 5 elementos")
let nuevoEstudiantes = estudiantes.filter((estudiante,index) => index < 5)
console.table(nuevoEstudiantes
)
console.table(filtraPrimeros5(estudiantes));
//filtrar  a los estudiantes que su nombre tenga mas de 15 caracteres
let nuevoEstudiantesNombre= estudiantes.filter((estudiante)  => estudiante.length>15);
console.table(nuevoEstudiantesNombre);

// Intentemos modificar el arreglo inmutable
/* estudiantes.pop
*/
//Intentemos modificar el nuevo arreglo que no ha sido congelado
nuevoEstudiantes.unshift("Teresa Vargas");
console.table(nuevoEstudiantes)
function filtraPrimeros5(arregloEstudiantes){
    let listaFiltrada =[]
    for(let i=0;i<5;i++){
        listaFiltrada.push(arregloEstudiantes[i]);
        }
        return listaFiltrada;
}


console.log("%c12.- Filtrado de Elementos  dentro de un arreglo utilizando el metodo MAP , en el que necesitemos transfromarlos ", style_console)
console.log("Imorimimos los elementos actuales de signosZodiacales")
console.table(signosZodiacales)
//que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letras MAYUSCULAS
console.table(signosZodiacales.map(signoZodiacal => signoZodiacal.toUpperCase()));

//reduccion de elementos de un arreglo , se usa cuando debemos hacer operaciones matematicas o cuantitativas a un areglo , como obtener totales , la idea es reducir la lista a un valor 
//mas simplificado
//let costosListasCompras: Number[]; // Para TypeScript
costosListasCompras = [15, 52.50, 16.90, 32.50, 28, 105, 42, 2, 94, 10];
// como podemso calcular el total de una lista de costos de un carrito de compras
console.log(`El total de la compras es: ${costosListasCompras.reduce((total,precio) =>total +precio ,0).toFixed(2)}`);