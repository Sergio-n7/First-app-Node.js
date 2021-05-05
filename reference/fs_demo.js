const fs = require("fs");
const path = require("path");

//Create a folder
//fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//  if (err) throw err;
//  console.log("Folder created...");
//});

//Create and Write to file
//fs.writeFile(
//  path.join(__dirname, "/test", "/hello.txt"),
// "Hello World",
//  (err) => {
//  if (err) throw err;
//    console.log("File written to...");
//  }
//);

//File append
//fs.writeFile(
//  path.join(__dirname, "/test", "/hello.txt"),
//  "Hello World",
//  (err) => {
//    if (err) throw err;
//    console.log("File written to...");
//    //this is the file append
//    fs.appendFile(
//      path.join(__dirname, "/test", "hello.txt"),
//      " I love Node.js",
//      (err) => {
//        if (err) throw err;
//        console.log("Append File...");
//      }
//    );
//  }
//);

//Read File, I need to put utf8 as a second parametre and data as well with the error
//fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
// if (err) throw err;
//  console.log(data);
//});

//Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("Rename file...");
  }
);
