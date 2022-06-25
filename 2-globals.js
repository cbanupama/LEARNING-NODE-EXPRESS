//Globals - No Windows

//__dirname - path to current directory
//__filename - filename
//require - function to use modules(CommonJS)
//module - Info about current module (file)
//process - Info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("Hello NodeJs");
}, 1000);
console.log(__filename);
