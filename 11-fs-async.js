const { readFile, writeFile } = require("fs");

console.log("Start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/resultasync.txt",
      `Here is the Result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("Starting next task");
