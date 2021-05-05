const http = require("http");
const path = require("path");
const fs = require("fs");

//I want to create a new server object
const server = http.createServer((req, res) => {
  console.log(req.url);
  //  if (req.url === "/") {
  //    fs.readFile(
  //      path.join(__dirname, "public", "index.html"),
  //      (err, content) => {
  //        if (err) throw err;
  //        res.writeHead(200, { "Content-Type": "text/html" });
  //        res.end(content);
  //      }
  //    );
  //  }
  //  if (req.url === "/about") {
  //    fs.readFile(
  //      path.join(__dirname, "public", "about.html"),
  //      (err, content) => {
  //        if (err) throw err;
  //        res.writeHead(200, { "Content-Type": "text/html" });
  //        res.end(content);
  //      }
  //    );
  //  }
  //  //to built a REST API or mikroservice
  //  if (req.url === "/api/users") {
  //    const users = [
  //      { name: "Sergio Salguero", age: 39 },
  //      { name: "Javier Girón", age: 35 },
  //    ];
  //    res.writeHead(200, { "Content-Type": "application/json" });
  //    res.end(JSON.stringify(users));
  //  }

  //this in not really eficient so let's Built a file path Dinamic
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Extension of file
  let extname = path.extname(filePath);

  //Initial content type
  let contentType = "text/html";

  //Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //PAGE NOT FOUND
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        //Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      //Succes
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));