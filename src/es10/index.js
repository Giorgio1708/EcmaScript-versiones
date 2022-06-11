let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(1));

let array2 = [1,2,3,4,5];

//flatMap para cojer cada elemento del array y modificarlo uno por uno 

console.log(array2.flatMap(value => [value, value * 2]));


// .trimStart y .trimEnd para borrar espacios al inicio y al final del string
let hello = "       hello world";

console.log(hello)
console.log(hello.trimStart())


let hello2 = "hello world         ";

console.log(hello2);
console.log(hello2.trimEnd());

try {

} catch {
    error
}

//ya los arrays debidamente organizados se pueden volver objetos con el Object.fromEntries(variable con los dos o mas arrays agrupados en un array[[],[],[]])

let val1 =["name","oscar"];
let val2 = ["age",32]

let entries = [val1,val2];

console.log(Object.fromEntries(entries));

let mySymbl = "my Symbol";
let symbol = Symbol(mySymbl);
console.log(symbol.description);