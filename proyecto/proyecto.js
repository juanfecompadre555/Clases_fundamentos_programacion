// aqui es donde va toda la entrada
const edad = 30;
const tienecupon = true;
const cuponconbendicion = 10; 
const tienecarnet = false;
const preciobase = 5000;

// aqui es donde se calcula el precio final del tiquetillo
let precio = preciobase;

// aqui va el primer if y es que los chiquillos de 12 años no pagan nada
if (edad < 12) {
    precio = 0; 
} else {

    // esta lista es para guardar todos los descuentos 
    let cupon = [];

    if (edad > 65) {
        // guardamos el descuento
        cupon.push(40);
    }

    if (tienecarnet) {
        cupon.push(25);
    }

    if (tienecupon) {
        cupon.push(cuponconbendicion);
    }

    // aplicamos el mejor descuento
    if (cupon.length > 0) {
        let maxDiscount = Math.max(...cupon);

        precio = preciobase - (preciobase * maxDiscount / 100);
    }
}

// resultado final
console.log('El precio de su tiquete es: ', precio);