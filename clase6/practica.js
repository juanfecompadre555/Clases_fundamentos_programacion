const lunes = "lunes";
const martes = "martes";
const miercoles = "miercoles";
const jueves = "jueves";
const viernes = "viernes";
const sabado = "sabado";
const domingo = "domingo";

const hoy = "miercoles";
let pregunta1 = "hoy es lunes"
let pregunta2 = "hoy es miercoles"
let pregunta3 = "hoy es martes o miercoles"
let pregunta4 = "hoy es miercoles y jueves?"

console.log(pregunta1, hoy == lunes);
console.log(pregunta2, hoy == miercoles)
console.log(pregunta3, hoy == martes || miercoles )
