const { expect } = require("chai");
const parseUrls = require("../url-functions");

describe("parseUrls()", () => {
  it("returns an Array of URLS from a HTML body", () => {
    const body =
      '<li><a href="/oranges.html">oranges</a></li><li><a href="/nec.html">nec</a></li>';
    expect(parseUrls(body)).to.eql(["/oranges.html", "/nec.html"]);
  });
  it("ignores id attribute and email links", () => {
    const body =
      '<li><a href="/oranges.html">oranges</a></li><li><a href="/nec.html">nec</a></li><a href="#page-top">Start</a><a href="mailto:your-email@emsil.com">HELGOS</a>';
    expect(parseUrls(body)).to.eql(["/oranges.html", "/nec.html"]);
  });
});
