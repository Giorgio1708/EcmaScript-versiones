const string ="Javascript es maravilloso, con Javascript puedo crear el futuro de la web";

const replacedString = string.replace("Javascript","Python");

console.log(replacedString);

//usando .replaceAll() podemos todas las palabras que coincidan y no solo la primero

const replacedString2 = string.replaceAll("Javascript", "Python");

console.log(replacedString2);



class Message {
    #show(val) {
        console.log(val);
    }

}

const message = new Message();
message.show("Hola");


const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response));


