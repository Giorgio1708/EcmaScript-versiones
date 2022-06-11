// operador de reposo
//extraer las propiedades de un  objeto que aun no se a construido
/*
const obj = {
    name: "jorge",
    age: 32,
    country: "CO"
};

let {country, ...all} = obj;

console.log(country, all);
*/

//juntar objetos con factor de propagación
const obj = {
    name: "jorge",
    age: 17
}

const obj2 = {
    ...obj,
    country: "CO"
}

console.log(obj2);

//---------------------------

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Hello World"),3000)
        :reject (new Error("Test error"))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.error(error))
.finally(() => console.log("Finalizó"))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2022-06-11");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(`Año:${year}, Mes: ${month}, Dia: ${day}`);