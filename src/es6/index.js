//antes de ES6
//dar valores por defecto

function newFunction(name, age, country){
    var name = name || "Jorge";
    var age = age ||  17;
    var country = country || "Colombia";
    console.log(name, age, country);
}

//DESPUES DE ES6

function newFunction2(name = "Jorge", age = 17, country = "Colombia") {
    console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo",23, "Mexico");

//antes de ES6
//unir elementos 

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//DESPUES DE ES6
//unir elementos con templates literals o comillas francesas --->`` con ALT+96

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//antes de ES6
//multilinea o saltos de linea en los strings

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet a mi eu ornare. Cras nec suscipit eros.\n" + "Vestibulum lacinia odio vel mauris venenatis scelerisque. Proin ultrices hendrerit enim quis blandit. Donec accumsan, lacus ut maximus cursus "

//DESPUES DE ES6
//multilinea o saltos de linea en los strings con template literals

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet a mi eu ornare. Cras nec suscipit eros.
Vestibulum lacinia odio vel mauris venenatis scelerisque. Proin ultrices hendrerit enim quis blandit. Donec accumsan, lacus ut maximus cursus`

console.log(lorem);
console.log(" ");
console.log(lorem2);

//antes de ES6
// para desestructurar objetos o manipularlos

let person = {
    "name":"oscar",
    "age": 32,
    "country": "MX"
}

console.log(person.name, person.age);

//DESPUES DE ES6

let {name} = person;
console.log(name);


//---------------------------------------------------
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

//antes de ES6
let educationViejo = ["Jorge", "Oscar", "Julian", "Ricardo","Valeria", "Yesica", "Camila"];


//DESPUES DE ES6
//unir arreglos con valor de propagación o los tres puntos ...

let education = ["Jorge", ...team1, ...team2];

console.log(education);

//antes de ES6
// para una variable se usaba var y tenia alcance para todo el documento

{
    var globalVar = "Global Var"
}
console.log(globalVar);

//DESPUES DE ES6
//se usa let para las variables y estas solo tienen alcance del scope

{
    let globalLet = "Global Let"
    console.log(globalLet);
}

//en ES6 se metio el const, variable que es constante, el cual no se le puede asignar valor despues de haber sido asignado

//----------------------------------------------------

let nombre = "jorge";
let edad = 17;

obj = {name: nombre, age: edad}

obj2= {nombre, edad};
console.log(obj2);

//arrow functions =>

const names =[
    {name: "Jorge", age: 32},
    {name: "Yesica", age: 27}
];

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 =(name, age, country) => {

};

const listOfNames4 = name => {

};

const square = num => num * num;

//las promesas para el asincronismo para evitar el callback hell

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Hey!")
        }else {
            reject("Ups!!")
        }
    })
}


helloPromise()
.then(response => console.log(response,"Hola soy un .then"))
.catch( error => console.error(error));


//clases

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// el import y export (trabajar con modulos)

const hello = require("./module")

console.log(hello());