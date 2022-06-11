//Dinamic Import, ya no carga el archivo de import desde que se abre la pagina sino solo cuando se llama

const button = document.getElementById("btn");

button.addEventListener("click",async function () {
    const module = await import("./file.js");
    module.hello()
})

//Metodo BigInt que nos permite trabajar con numeros mayores a 2 ELEVADO a la 53

const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise.allSettled() una promesa que no se efectua hasta que las otras promesas que se le dieron como parametro hayan terminado, sin importar el resultado de cada una

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response));

console.log(window);
console.log(globalThis);



