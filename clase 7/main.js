/*
const hasLicense = true;

function answerYes() {    
    if(age >= 18){ 
        console.log("bendito dios si se puede ir a matar en carro")
    }
    else{ 
        console.log("diay chito salaoh")
    }
}

answerYes()

*/

const usuarioCorrecto = "chayote";
const contraseñaCorrecta = "jesucristoesmipastornadamefaltara";

const usuario = prompt("Ingrese su nombre de usuario:");
const contraseña = prompt("Ingresa su contraseña:");

if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
  console.log("BIENVENIDO");
} else {
  console.log("NO BIENVENIDO");
}

