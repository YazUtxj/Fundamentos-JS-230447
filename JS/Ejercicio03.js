 //OBJETOS
// const nombre ="tablet";
// const precio =300;
// const disponible =true;

const producto ={
    "nombre":"tablet 9\"", 
    "Marca":"Mac",
    "Modelo":"iPad",
    "Costo Compra": 11500.25,
    CostoVenta: 12323,
    Disponible : true,
    SKU: Symbol("55AF"),
    cOLORES :["Blanco","Negro","Rosa","Azul"]
}
console.warn("--OBJETOS--")
console.log(producto);
//Los objetos tambien pueden ser mostrador en forma de tabla
//utilizando la funcion console.taBLE
console.table(producto);
//Acceder a las propiedades de un objeto
console.warn("Leyendo las propiedades de un objeto y sus tipos de datos\n"+
     `Nombre del producto ${nombre}`
     
    )
console.log(  `Nombre del producto ${nombre} que es del tipo ${typeof(nombre)}`+
`Nombre de la marca ${marca} que es del tipo ${typeof(marca)}` +
`Nombre del modelo ${modelo} que es del tipo ${typeof(modelo)}`
      + `Nombre del costo de la compra ${CostoVenta} que es del tipo ${typeof(CostoVenta)}`
      
      +`Disponibilidad ${disponible} que es del tipo ${typeof(disponible)}` +
      `SKU ${SKU} que es del tipo ${typeof(SKU)}` +
      `cOLORES ${cOLORES} que es del tipo ${typeof(cOLORES)}`
      
      
      
      
      
)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//DESTRUCTUCTURING
const {nombre ,precio ,disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)
// OBJECT  LITERAL ENHACEMENT 
const autenticado =true;
const usuario ="juan"
const nuevoObjeto = {
    autenticado:autenticado,
    usuario:usuario
}
console.table(nuevoObjeto)