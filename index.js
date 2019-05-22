const http = require("http");
const fetchPage = require("./url-functions");

const server = http.createServer((req, res) => {
  handlePost(req, ({ url }) => {
    fetchPage(url, matches => res.end(JSON.stringify(matches)));
  });
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
