const puppeteer = require("puppeteer");
// puppeteer has promisified function
//by default headless = true;
const id = "burkupirdu@biyac.com";
const pw = "123456789";
let tab;

let browseropenpromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
console.log(browseropenpromise);
browseropenpromise.then(function(browser){
    console.log("browser is openend");
    return browser.pages()
}).then(function(pages){
    tab = pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");
}).then(function(){
    console.log("on hackerrank login");
}).then(function(){
    return tab.type("#input-1",id);
}).then(function(){
    return tab.type("#input-2",pw);
}).then(function(){
    return tab.click("button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled")// clicked on login button
}).then(function () {
    return waitAndClick("#base-card-1-link");
  })
  .then(function () {
    return waitAndClick('a[data-attr1="warmup"]');
  }) .then(function () {
    return tab.waitForSelector(".js-track-click.challenge-list-item", {
      visible: true,
    });
  })
  .then(function () {
    // tab.$() // document.querySelector;
    return tab.$$(".js-track-click.challenge-list-item"); // it will run document.querySelectorAll in the browser and gives you array of all the elements
  })
  .then(function (allQuesArray) {
    // [<a /> , <a /> , <a /> , <a />];
    let allPendingPromises = [];
    for (let i = 0; i < allQuesArray.length; i++) {
      let oneATag = allQuesArray[i];
      let pendingPromise = tab.evaluate(function (element) { return element.getAttribute("href");}  , oneATag);
      allPendingPromises.push(pendingPromise);
    }
    // [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
    let allPromisesCombined = Promise.all(allPendingPromises);
    // Promise<Pending>
    return allPromisesCombined;
  }).then(function(getAllLinks){
      console.log(getAllLinks);
  })
  .catch(function(err){
    console.log (err);
})


function waitAndClick(selector){
    return new Promise(function(scb,fcb){
        let waitPromise = tab.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = tab.click(selector);
return clickPromise;
        }).then(function(){
            scb();
        }).catch(function(){
            fcb();
        })
    })
}