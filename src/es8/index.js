// el el ES8 se agrega el object.entries

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
};

//para transformar este objeto a matriz, usamos el object.entries
//en pocas palabras, object.entries, coje los valores de un object y los convierte en arrays
//para soltar un array de arrays

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

//con el object.values nos devuelve un array pero solo con los valores de los objetos

const data1 =  {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
};

const values = Object.values(data1);
console.log(values);
console.log(values.length);


const string = "Hello";
console.log(string.padStart(8,"hi "));
console.log(string.padEnd(12, " ------"));
console.log("food".padEnd(12, " ------"));

// async y await viene con la version de EcmaScript 8 