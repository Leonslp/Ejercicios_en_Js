//En el siguiente codigo se muestran dos mensajes con la etiqueta alert; esos mensajes se encuentran en un archivo Js que es llamado desde uno HTML con la etiqueta Script
/*
function mensajes() {
    let holaMundo = "Hola Mundo!";
    let primerScript = "Soy el primer script";
    
    return { holaMundo, primerScript };
}

let mensaje = mensajes();
document.write(mensaje.holaMundo, "<br>");
document.write(mensaje.primerScript, "<br>");
*/
/*
const mesesDelAnno = [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Agoosto","Septiembre","Octubre","Nomviembre","Diciembre"];

console.log (mesesDelAnno);
*/
/*
var valores = [true, 5, false, "hola", "adios", 2]; 

let strings = valores.filter(item => typeof item === 'string');

if (strings.length >= 2) {
    let textoMasLargo = strings.reduce((anterior, actual) => anterior.length > actual.length ? anterior : actual);
    document.write("El texto más largo es: " + textoMasLargo);
} else {
    document.write("Los textos tienen la misma longitud");
}
document.write ("El texto mas largo es:" + textoMasLargo, "<br>");


let booleano1 = valores [0];
let booleano2 = valores [2];

let resultadoTrue = booleano1 || booleano2;
console.log("True: " + resultadoTrue, "<br>");

let resultadoFalse = booleano1 && booleano2;
console.log(" False: " + resultadoFalse, "<br>");

let numero1 = valores[1];
let numero2 = valores[5];

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let potencia = numero1 ** numero2;

document.write("Suma:" + suma, "<br>");
document.write("Resta:" + resta, "<br>");
document.write("Multiplicacion: " + multiplicacion, "<br>");
document.write("Division: " + division, "<br>");
document.write("Potencia: " + potencia, "<br>");
*/
/*
var numero1 = 5; 
var numero2 = 8; 

if(numero1 > numero2) { 
  console.log("numero1 no es mayor que numero2"); 
}

if(numero2 > 0) { 
  console.log("numero2 es positivo"); 
} 

if(numero1 < 0 || numero1 !== 0) { 
  console.log("numero1 es negativo o distinto de cero"); 
} 

if(++numero <= numero2) { 
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"); 
} 
*/
/*
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 

var numero = prompt("Introduce el número de DNI");
var letra = prompt("Introduce la letra del DNI").toUpperCase();

if (numero < 0 || numero > 99999999) {
    document.writ("El número proporcionado no es válido.");
} else {
    var resto = numero % 23;
    var letraCalculada = letras[resto];

    if (letraCalculada !== letra) {
        document.write("La letra que has indicado no es correcta.");
    } else {
        document.write("El número y la letra del DNI son correctos.");
    }
}
*/
/*
function calcularFactorial(numero){
    if (numero <0 ){
        return("El numero que ingresate es negativo, porfavor ingresa uno positivo.")
    } else if (numero === 0 || numero === 1){
        return("el factorial del numero ingresado es 1")
    }else {
        let factorial = 1;
        for (let i = 2; i <= numero; i++){
            factorial *=i;
        }
        return factorial;
    }
}
const resultadoFactorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultadoFactorial}`);
*/