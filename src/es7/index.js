// en el ES7  se conoce el .include, que nos sirve para saber si un array incluye x valor

let numbers = [1,2,3,7,8];

if (numbers.includes(9)) {
    console.log("Si se encuentra el valor 7");
} else {
    console.log("No se encuentra.");
};

// en esta versión se incluyó la forma de trabajar con potencias, con los **

let base = 8;
let exponent = 8;
let result = base ** exponent;

console.log(result);