const http = require("http");

//Create server object
http
  .createServer((req, res) => {
    //Write response
    res.write("Hello World!");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));

//If you write localhost:5000 in the browser you will see Hello World
