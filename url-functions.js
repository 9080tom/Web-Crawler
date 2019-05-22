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

module.exports = parseUrls;
