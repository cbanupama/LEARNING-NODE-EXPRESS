const { Module } = require("module");

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;
