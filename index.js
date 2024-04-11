//fs modules enables  reading and writing to the file system
const fs = require("fs");

// http modules  allows us to create a server that listens for incoming requests on a specific port. It also provides
const http = require("http");

/*========================================================================== READ & WRITE FILES SYNCHRONOUS

//READ FILE
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

//TO WRITE FILE

const textOut = `This is what is said about avocado: ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written");


==========================================================================*/

//======================================================================= READ & WRITE FILES ASYNCHRONOUSLY
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      //WRITE TO A FILE
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your files has been written");
      });
    });
  });
});
console.log("Will read files");
