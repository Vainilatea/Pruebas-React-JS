console.log ("hola mundo" + "!")

const number1 = 6
console.log (number1)

let number2 = 9
console.log (typeof number2)

const namePet = "Yassito"
console.log (typeof namePet)

let victory = false
console.log (typeof victory)

let yaoi = null
console.log (typeof yaoi)

console.log (typeof coco)

let cosilla = null
console.log (cosilla)

var arraysample = [1,0,1,3]
console.log (typeof arraysample)

/*
number: + - * / -- (% <-resto)
string: + concatenar
boolean: and or not
and-> ampersand && solo true si todas las variables son true, either false
or -> || (alt gr + 1) solo es falso si ambas son falsas , either true
not-> ! ( !A es lo contrario a A)
condicion: dato operador
*/

if (number1 < 5) /*<-condicion*/ {
    console.log ("sigue jugando")
}
else {
    console.log ("has ganado")
}

let steps = 0
while ( steps < 3) {
    console.log ("estoy en el paso " + steps)
//bucle debe tener una condicion para que pare
    steps = steps + 1
}

//array siempre se declara con const, no let ni var, el espacio o lugar de memoria no cambia de donde se guardan los datos, por eso es const
//bucles con arrays players.map

const players = ["jhon", "mary", "anonymous"]
//para cada elemento del array players
players.map ( player => {console.log (player)

    if (player === "mary"){
        console.log ("hola, Mary")
    } 
})


/////////////

/*ej 1.1*/
const pi = 3.14159
let contador = 0
while (contador < 3) {
    console.log (contador)
    contador = contador + 1
}
const nombreApp = "Mi App React"

/* ej 1.2 */

const edad = 25;
let puntos = 100;

//const edad = 26; // deberia salir error
//let puntos = 150 // deberia dejar

/* ej 2.1 */

const numero1 = 6
console.log (numero1)

let numero2 = 9
console.log (typeof numero2)

const namePe = "mascota"
console.log (typeof namePe)

let victori = false
console.log (typeof victori)


let yaois = null
console.log (typeof yaois)

console.log (typeof cocoa)

let cosillo = null
console.log (cosillo)

var arraysimple = [1,0,1,3]
console.log (typeof arraysimple)

/* ej 2.2 */
const estudiante = {"nombre": "Nana", "edad": 15, "materias": ["mates", "lengua", "fisica"], "activo": true}
console.log(estudiante)

/* ej 3.1 */

function clasificarEdad(edad) {
  if (edad >= 0 && edad <= 12) {
    console.log("Niño");
  } else if (edad >= 13 && edad <= 17) {
    console.log("Adolescente");
  } else if (edad >= 18 && edad <= 64) {
    console.log("Adulto");
  } else {
    console.log("Adulto mayor");
  }
}
    console.log(clasificarEdad (10));
    console.log(clasificarEdad (15));
    console.log(clasificarEdad (20));
    console.log(clasificarEdad (70))


/* ej 3.2 */

function obtenerLetra(calificacion) {
  if (calificacion >= 0 && calificacion <= 59) {
    return("F");
  } else if (calificacion >= 60 && calificacion <= 69) {
    return("D");
  } else if (calificacion >= 70 && calificacion <= 79) {
    return("C");
  } else if (calificacion >= 80 && calificacion <= 89) {
    return("B");
  } else {
    return("A");
  }
}

console.log(obtenerLetra(95));   
console.log(obtenerLetra(83)); 
console.log(obtenerLetra(72));   
console.log(obtenerLetra(65)); 
console.log(obtenerLetra(45)); 

/* 3.3*/

function puedeAcceder(edad, cuentaActiva, estaBloqueado) {
  if (edad > 18 && cuentaActiva == true && estaBloqueado == false) {
    return("Puede acceder")
  } else if (edad <= 18 && cuentaActiva == true && estaBloqueado == false) {
    return("menor de edad")
  } else if (edad > 18 && cuentaActiva == false && estaBloqueado == false) {
    return("cuenta inactiva")
  } else if (edad > 18 && cuentaActiva == true && estaBloqueado == true) {
    return("esta bloqueado")
  } else {
    return("?")
}}

console.log(puedeAcceder(20, true, false));   // true
console.log(puedeAcceder(17, true, false));   // false (menor de edad)
console.log(puedeAcceder(25, false, false));  // false (cuenta inactiva)
console.log(puedeAcceder(30, true, true));    // false (está bloqueado)

/* 4.1 */

function contarHastaDiez() {
  let i = 1;
  while (i < 11) {
    console.log (i)
    i = i + 1
}}
contarHastaDiez()

/*4.2 ------------------------------------------------*/

function sumaAcumulativa(limite) {
  let suma = 0;

  suma = (limite * (limite + 1))/2
              
  return suma;
}

console.log(sumaAcumulativa(5));   // 15 (1+2+3+4+5)
console.log(sumaAcumulativa(10));  // 55 (1+2+3+...+10)

/* ej 4.3 */

