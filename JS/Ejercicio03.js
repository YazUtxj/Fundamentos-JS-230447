// Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);
//Declaramos valores independientes relacionadas a un PRODUCTO
let Producto_Nombre = "Laptop\n";
let Producto_Marca = "Huawei"
let Producto_Modelo = "D16"
let Producto_Precio = 15000.50;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("535N1")
let Producto_Stock = 23;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias = ["Electrónicos", "Computación", "Bonita"];


// Accedemos a los valores de las carácterísticas del producto de manera indepentiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof (Producto_Nombre)}>
    Marca:  ${Producto_Marca}, Tipo de Dato <${typeof (Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof (Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof (Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof (Producto_Disponibilidad)}>   
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof (Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof (Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof (Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof (Producto_Categorias)}>`);

console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);
console.log(typeof (Producto_SKU));

// Declaramos ahora estas variables pero dentro de un objeto
console.log("%c2.- Objeto", style_console);
let Producto =
{
    Nombre: "Celular",
    Marca: "Phone",
    Modelo: "16PROMAX",
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 2,
    SKU: "OPHO1NE16MAX",
    Imagen: "../assets/phone.jpeg",
    Barcode: null,
    Categorias: ["Gama Alta", "Bonito"]
}
// Ahora leemos el objeto completo
console.table(Producto)

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if (Producto.Disponibilidad == 0)
    console.log(`Estatus: Agotado`)
else
    console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);


// Desestructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{
    Clave: 316,
    Nombre: "Celular",
    Marca: "SAMSUNG",
    Modelo: "24PROMAX",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "24PRO5G",
    Imagen: "../ASSETS/telefono.jpeg",
    Barcode: 888392491626,
    Categorias: ["Bonito", "Gama-Alta", "Celular"]
}


let Comprador =
{
    Clave: 3216,
    Nombre: "Yazmin",
    Apellidos: "Gutierrez Hernandeaz",
    Tipo: "Poco Frecuete",
    Correo: "yazmin411@gmail.com",
    PaisOrigen: "México",
    SaldoActual: 12000.00
}

let Pedido = {
    Producto_Clave: 316,
    Comprador_Clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let { Precio: Producto_Precio2 } = Producto2;
let { Cantidad: Pedido_Cantidad } = Pedido;
let { SaldoActual: Cliente_SaldoActual } = Comprador;
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} undidades, con un costo total de: $${Costo_Compra}`);
if (Costo_Compra < Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");

// Actualizar el valor de los Objetos
console.log("%c4.- Actualización de los valores de las propiedades de un Objeto", style_console);

console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2));
//console.log(Producto2);
// Convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflación el costo del producto ha  cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)
// Para podificiar el valor de un objeto basta con igualar el nuevo valor de la proppiedad deseada
Producto2.Precio = 6915.50;
console.log(`Los nuevos valores del Prodcuto son:  `)
console.log(Producto2);

// Puedo cambiar no solo el valor , sino el tipo de dato de un Objeto en JavaScript?
console.log(`----------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
let tipoDisponibilidad = typeof (Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2));    // Disponiblidad Booleano
Producto2.Disponibilidad = "Sí";
let nuevoTipoDisponibilidad = typeof (Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)
// si!! 


//  Agregar nuevas propiedades a un objeto existente 
console.log("%c5.- Agregacicion y Actualizacion de las propiedades de un Objeto(MUTACION)", style_console);
console.log("Objeto antes de ser modificado")
//console.log(JSON.stringify(Comprador));
console.table(Comprador)
//Agregando  propiedades 
Comprador[`Direcccion`] = "Av.05 de Mayo #25 ,Interior 04 ,Xicotepec de Juarez,Puebla,Mexico";
Comprador[`Tipo`] = "Premium"
Comprador[`Estatus`] = "Inactivo"
Comprador[`TotalCompras`] = 50000.00
console.log("Objeto despues  de ser modificado")
console.table(Comprador)


// Eliminar nuevas propiedades a un objeto existente 
console.log("%c6.- Eliminacion de las propiedades de un Objeto(MUTACION)", style_console);
console.log("Objeto antes de ser modificado")
//console.log(JSON.stringify(Comprador));
console.table(Pedido)
//Eliminamos la propiedad de tipo de pago
delete Pedido[`TipoPago`];
//Tambien funciona de esta manera : (delete Pedido.TipoPago)
console.log("Objeto despues de ser modificado")
console.table(Pedido);




console.log("%c7.- Metodos para controlar la mutabilidad de los Objetos , Congelacion (FREEZE)", style_console);
// Si deseamos no permitir que los objetos sean modificados ni en estructura , ni en valor ,utilizaremos el metod FREEZE (congelar)
console.log(`La estructura actual del objeto COMPRADOR  es :`)
console.table(Comprador)
Object.freeze(Comprador);
//Intentaremos agregar , eliminar o modificar los valores de las propiedades
Comprador.FechaUltimaCompra = "05/08/2024 10:14:23"
delete Comprador.Tipo;
Comprador.Direcccion = "Calle 21 de Marzo #28 , Col,Centro ,Xicoteped de Juarez ,Puebla"
console.log(`Verificamos si se realizaron `)
console.table(Comprador);


console.log("%c8.- Metodos para controlar la mutabilidad de los Objetos , Sellado(SEAL)", style_console);
//Sin embargo , en caso de que deseemos poder modificar los valores de las propiedades  del Objeto , pero no su estructura ,usaremos SEAL
console.log("Objeto antes de ser modificado")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido);
// Intentemos modificar su estructura
Pedido[`FechaPedido`] = "23/09/2023  34:00:00 ";
delete Pedido[`Cantidad`]
console.log(`Verificamos si se realizaron los cambios en el objeto PEDIDO `)
console.table(Pedido);
// Ahora intentemos modificar su estructura
Pedido.Cantidad = 5
console.log(`Verificaremos si se realizaron los cambios en el objeto PEDIDO`)
console.table(Pedido)

// Desustructuracion de 2 o mas objetos
console.log("%c9.- Desustructuracion de 2 o mas Objetos", style_console);
let { Precio: productoPrecio,  Marca: productoMarca } = Producto
let { Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo } = Comprador

//Tranforma valores cuantitavios a cualitativos
if (productoPrecio > 2000)
    productoPrecio = "Caro"
else
    productoPrecio = "Barato";
//
if (clienteSaldo > 0)
    clienteSaldo = "A favor"
else if (clienteSaldo < 0)
    clienteSaldo = "En contra "
else
    clienteSaldo = "Sin deudas";

//Transformar valores cualitativos a cuantitativos
let clienteNivel;
if(clienteTipo =="Premiun")
    clienteNivel =1 
if(clienteTipo == "Freenium")
    clienteNivel =2
if(clienteTipo =="No identificado")
    clienteNivel = 3;

//Clasificamos al client4e por su Pais de Origen
if(clientePais =="Mexico")
    clientePais = "Nacional"
else
clientePais ="Extranjero"

// OLE - Object Literal Enhacemenhn
let datosClientePromociones = {clienteCorreo,clientePais,clienteNivel,productoMarca,productoPrecio}
// El nuevo objeto que creamos , seria un nuevo ejemplo de la informacion que enviariamos al area de Marketing para la difusion de promociones
console.log(`Los datos del cliente   y sus habitos de comprar son`)
console.table(datosClientePromociones)






// Operaciones sobre Onjetos 
// UNION DE OBJETOS
console.log("%c10.- Metodos para controlar la mutabilidad de los Objetos , Sellado(SEAL)", style_console);

