// buenas profe en este otro codigo implemente el uso del if edad (numero) && (numero pero de descuento) para que no se realicen solo el descuento solo si es mayor al descuento que ya tengo
// aqui esta la entrada donde van los valores costantes
const edad = 30;
const tienecupon = true;
const cuponconbendicion = 10; 
const tienecarnet = false;
const preciobase = 5000;

let precio;

// aqui el if es para que los niños menores de 12 años que no paguen nada
if (edad < 12) {
    precio = 0;
} else {

 // aqui es para guardar el descuento
    let descuento = 0;

    // aqui como podemos ver si la persona es mayor de 65 años y si el 40% es mejor que el descuento actual pues se deja el mejor descuento
    if (edad > 65 && 40 > descuento) {
        descuento = 40;
    }
//el descuento que se guarda siempre va a ser el mayor de todos los descuentos


    // aqui mas de lo mismo pero con el carnet de estudiante
    if (tienecarnet && 25 > descuento) {
        descuento = 25;
    }

    // aqui mas de lo mismo pero con un true por la constante que dice tienecupon y pos si tiene cupon
    if (tienecupon && cuponconbendicion > descuento) {
        descuento = cuponconbendicion;
    }

    // aqui seria 5000 - (preciobase* descuento / 100) para aplicar el descuento al precio base
    precio = preciobase - (preciobase * descuento / 100);
}

console.log('El precio de su tiquete es: ', precio);