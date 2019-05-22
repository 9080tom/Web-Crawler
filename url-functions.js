const https = require("https");

const parseUrls = (body, baseUrl) => {
  const matches = body
    .replace(/"/g, "")
    .match(/(?<=href=)([^ >]+)/g)
    .filter(link => {
      return !link.startsWith("#") && !link.startsWith("mailto");
    })
    .map(link => {
      if (link.startsWith("img")) link = link.slice(3);
      return link.startsWith("/") ? baseUrl + link : link;
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
        cb(parseUrls(body, url));
      });
    })
    .on("error", e => {
      console.log(e);
    });
};

module.exports = { parseUrls, fetchPage };
