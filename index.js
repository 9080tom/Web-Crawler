const http = require("http");

const server = http.createServer((req, res) => {
  handlePost(req, ({ url }) => {});
});

const handlePost = (req, cb) => {
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });
  req.on("end", () => {
    cb(JSON.parse(body));
  });
};

module.exports = server;
