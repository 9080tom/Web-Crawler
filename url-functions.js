const https = require("https");

const parseUrls = body => {
  const matches = body
    .match(/href=".*?"/g)
    .map(match => match.split('"')[1])
    .filter(link => {
      return !link.startsWith("#") && !link.startsWith("mailto");
    });
  return matches;
};

const fetchPage = (url, cb) => {
  https
    .get(url, res => {
      let body = "";
      res.on("data", chunk => {
        body += chunk;
      });
      res.on("end", () => {
        cb(parseUrls(body));
      });
    })
    .on("error", e => {
      console.log(e);
    });
};

module.exports = (parseUrls, fetchPage);
