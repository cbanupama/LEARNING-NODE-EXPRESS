//commomjs, every file is module(by default)
//Modules - Encapsulated code(only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavors");
const add = require("./7-add");

console.log(data);
console.log(names);

sayHi("Anupama");
sayHi(names.anu);
sayHi(names.manu);
