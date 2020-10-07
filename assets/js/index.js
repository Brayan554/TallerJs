// function strnRev(str) {
//   let palabra = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     palabra = palabra + str.charAt(i);
//   }
//   return palabra;
// }

let strnRev = (str) => str.split('').reverse().join('');
console.log(strnRev('Brayan Zanabria'));

var nombre = 'Brayan Zanabria';
console.log(nombre.length);

function dividirCadena(cadenaADividir, separador) {
  var arrayDeCadenas = cadenaADividir.split(separador);
  document.write('<p>La cadena original es: "' + cadenaADividir + '"');
  document.write('<br>El separador es: "' + separador + '"');
  document.write(
    '<br>El array tiene ' + arrayDeCadenas.length + ' elementos: '
  );

  for (var i = 0; i < arrayDeCadenas.length; i++) {
    document.write(arrayDeCadenas[i] + ' - ');
  }
}

var cadenaVerso = 'Brayan Zanabria';
var cadenaMeses = 'Brayan,Zanabria,Rubio';

var espacio = ' ';
var coma = ',';

dividirCadena(cadenaVerso, espacio);
dividirCadena(cadenaVerso);
dividirCadena(cadenaMeses, coma);
