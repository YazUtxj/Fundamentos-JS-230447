 //OBJETOS
// const nombre ="tablet";
// const precio =300;
// const disponible =true;

//OBJETOS CON CSS
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`




// }
// console.warn("--OBJETOS--")
// console.log(producto);
// //Los objetos tambien pueden ser mostrador en forma de tabla
// //utilizando la funcion console.taBLE
// console.table(producto);
// //Acceder a las propiedades de un objeto
//  //console.warn("Leyendo las propiedades de un objeto y sus tipos de datos\n"+
//        //  `Nombre del producto ${nombre}`);
// console.log(  `Nombre del producto ${nombre} que es del tipo ${typeof(nombre)}`+
// `Nombre de la marca ${marca} que es del tipo ${typeof(marca)}` +
// `Nombre del modelo ${modelo} que es del tipo ${typeof(modelo)}`
//       + `Nombre del costo de la compra ${CostoVenta} que es del tipo ${typeof(CostoVenta)}`
      
//       +`Disponibilidad ${disponible} que es del tipo ${typeof(disponible)}` +
//       `SKU ${SKU} que es del tipo ${typeof(SKU)}` +
//       `cOLORES ${cOLORES} que es del tipo ${typeof(cOLORES)}`
      
      
      
      
      
// )
// console.log(producto.nombre)
// console.log(producto.precio)
// console.log(producto.disponible)

// //DESTRUCTUCTURING
// const {nombre ,precio ,disponible} = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)
// // OBJECT  LITERAL ENHACEMENT 
// const autenticado =true;
// const usuario ="juan"
// const nuevoObjeto = {
//     autenticado:autenticado,
//     usuario:usuario
// }
// console.table(nuevoObjeto)



//PRACTICA 05 
console.log("%c1.- Variables Independientes" , style_console);
let Producto_Nombre = "Telefono Samsung 4g\"";
let Producto_Marca = "SAMAUNG"
let Producto_Modelo = "4g 23pro"
let Producto_Precio = "14987.00"
let Producto_Disponibilidad = true;
let Producto_SKU =Symbol("478trhgtrghh")
let Producto_Stock = 100;
let Producto_Imagen = null ;
let Producto_Barcode;
let Producto_Categoria =["electrnoica", "computacion" , "gaming", "Promociones"];

console.log(  `Nombre del producto ${Producto_Nombre} que es del tipo ${typeof(Producto_Nombre)}`)
console.log(`Nombre de la marca ${Producto_Marca} que es del tipo ${typeof(Producto_Marca)}`)
console.log( `Nombre del modelo ${Producto_Modelo} que es del tipo ${typeof(Producto_Modelo)}`)
console.log( `Nombre del costo de la compra ${Producto_Precio} que es del tipo ${typeof(Producto_Precio)}`)
console.log(`Disponibilidad ${Producto_Disponibilidad} que es del tipo ${typeof(Producto_Disponibilidad)}`)
console.log(`La imagen del producto  ${Producto_Imagen} que es del tipo ${typeof(Producto_Imagen)}`)
console.log(` categorias : ${Producto_Categoria} , que es del tipo ${typeof(Producto_Categoria)}`)
console.log(`el codigo es :  ${Producto_Barcode} que es del tipo ${typeof(Producto_Barcode)}`)
console.log(` categorias : ${Producto_Stock} , que es del tipo ${typeof(Producto_Stock)}`)

console.log("EN CASO de  SKU al ser un Symbol  ,no se puede  concatenar la cadena  ")

console.log("%c2.- Objeto", style_console) ;
 let Producto  =
 {
  nombre: "gansito",
 marca: "marinela",
 modelo :"fbffbf",
disponibilidad :14,
 precio : 16.50,
 stock :10
}
//ahora leemops el objeto completo
console.log(Producto);
console.log("Accediento a propiedades especificas del prodcutpo")
console.log(`Nombre Completo del Prosducto: ${Producto.nombre} ${Producto.marca} ${Producto.modelo}`);
console.log(`Precio ${Producto.precio}`)
if(Producto.disponibilidad ==0)
    console.log(`Estatus :Agotado`)
else 
console.log(`Estatus ${Producto_Stock} unidades disponibles`)

let Producto2 =
{
    Clave :316,
    Nombre : "lentes para el sol",
    Marca :"Oakley",
    Modelo : "QNTM Kato ",
    Precio :6224.67,
    Disponibilidad :true ,
    Stock :5 ,
    SKU : "2783374RBB",
    Imagen:"",
    Barcode :4743665675,
    Categorias:["Deportes", "Lentes", "Vacaciones"] 
}
let Comprador =
{
    Clave :3016,
    Nombre : "Yazmin",
    Apellido :"Gutierrez Hernandez",
    Tipo : "Frecuente ",
    Correo :"yazmin230447@utxicotepec.edu.mx",
   PaisOrigen:"Mexico",
   SaldoActual: 23343.00
}

let Pedido ={
    Producto_Clave : 316,
    Comprador_Clave :3206,
    Cantidad :2,
    Estatus :"Carrito de compra",
    TipoPago:"Tarjeta de Credito"
}
//En base a los 3 objetos necesitamos calcular el costo de la compra y si te alcanza con el saldo disponible
let {Precio :Producto_Precio2} =Producto2;
let {Cantidad :Pedido_Cantidad} = Pedido;
let {SaldoActual :Cliente_SaldoActual} =Comprador;
let Costo_Compra = Producto_Precio2 *Pedido_Cantidad;


console.log("%c3.- Desestructuracion de datos" , style_console);
console.log(`El cliente ha agregadfoa su carrito de compras  ${Pedido_Cantidad} unidades , con un costo total $${Costo_Compra}`);
if(Costo_Compra < Cliente_SaldoActual)
    console.log("El cliente  tiene saldo suficiente")

// ACRTUALIZAR EL VALOR DE LOS OBJETOS
console.log(`El objeto actualmente  tiene los siguientes valores `)
console.log(JSON.stringify(pRODUCTO2 ,NULL,2))
//CONVIERTE EL OBJETIO A UNA CADENA PARA EVITAR PROBLEMAs con la refenrcias
console.log(`Por cuestiones de inflacion el costo del prodcuto ha cambiado  y debe ser actualizado .. de $ `)
//Para modificar el valor de un objeto  basta con igualar el nuevo valor de la propiedad deseada
