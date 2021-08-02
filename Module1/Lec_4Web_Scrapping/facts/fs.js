const fs = require("fs");
const cheerio = require("cheerio");
let htmlkadata = fs.readFileSync("./index.html","utf-8");
let mydocument = cheerio.load(htmlkadata);
let hikadata = mydocument("h1").text();
//console.log(hikadata);
let secondptag = mydocument("ul>a").text();
console.log(secondptag);