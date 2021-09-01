const puppeteer = require("puppeteer");
// puppeteer has promisified function
//by default headless = true;

let browseropenpromise = puppeteer.launch();
console.log(browseropenpromise);
browseropenpromise.then(function(browser){
    console.log("browser is openend");
    return browser.pages()
}).then(function(pages){
    let tab = pages[0];
    return tab.goto("https://www.google.com/");
}).then(function(){
    console.log("on google homepage");
})