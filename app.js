//Karen Antonella Gimenez - Clúster2

// 1 ) -------------------------------------------------------------------- 

let numeroIngresado = prompt("Ingrese el numero de filas para la construccion de la piramide :\n");

function piramideNumerica(filas) {
    let numeroIngresado = " ";
    for (let i = 1; i <= filas; i++){
        
        console.log(numeroIngresado += i + " ");
    }
}
piramideNumerica (numeroIngresado);


// 2 ) -------------------------------------------------------------------- 


const arrayColores=['rojo', 'azul', 'amarillo','negro','verde'];
const arrayColoresDos=['blanco', 'negro', 'rojo','negro'];

console.log('-----------arrays--------');

function filtroCoincidenciaDeArray(arregloUno,arregloDos){
    let arrayCoincidentesFiltrados=[];

    for(let indice=0; indice< arregloUno.length; indice++){
    
        if(arregloDos.indexOf(arregloUno[indice])>=0){

            arrayCoincidentesFiltrados.push(arregloUno[indice]);
        }
    }
    return console.log(arrayCoincidentesFiltrados);
}

filtroCoincidenciaDeArray(arrayColores,arrayColoresDos);




// 3 ) -------------------------------------------------------------------- 

let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}


class Carrito { 
    constructor(montoTotal = 0, producto = []) // carrito formateado (carrito vacio sin productos)
    {
        this.producto = producto;
        this.montoTotal = montoTotal;
    }
    
    agregarProducto(nombre, precio, unidades)
    {           
            let precioTotalProducto= precio*unidades;
        
            if ( this.producto.indexOf(nombre) >= 0)
            {                
                console.log(`Este producto :¡${nombre} ya existe en el carrito con ${unidades} unidades!`);
            }else{                
                this.producto.push( nombre, precio, unidades);
                this.montoTotal += precioTotalProducto;
            }     
        };
    }

const carrito2 = new Carrito(); 
carrito2.agregarProducto("Dulce de Leche", 450, 5);
carrito2.agregarProducto("Chocolinas", 525, 2); 
carrito2.agregarProducto("Dulce de Leche", 450, 1); 
carrito2.agregarProducto("molde para torta", 2750, 1); 
carrito2.agregarProducto("Queso Crema", 650, 3);

console.log(`Productos en carrito: ${carrito2.producto} `);
console.log(`Monto total: $ ${carrito2.montoTotal}`);
console.log(`Gracias por su compra, vuelva pronto!`);