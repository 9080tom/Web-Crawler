const http = require("http");

const server = http.createServer((req, res) => {
  res.end("its working");
});

module.exports = server;
