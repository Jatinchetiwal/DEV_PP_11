const fs = require("fs");
let f1kapromise = fs.promises.readFile("./f1.txt");
let f2kapromise = fs.promises.readFile("./f2.txt");
let f3kapromise = fs.promises.readFile("./f3.txt");

f1kapromise.then(function(data){
    console.log(data+"");
    f2kapromise.then(function(data){
        console.log(data+"");
        f3kapromise.then(function(data){
            console.log(data+"");
        })
    })
})




// promise hell

let f1KaPromise = fs.promises.readFile("./f1.txt");

f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    f2KaPromise.then(function(data){
        console.log(data+"");
        let f3KaPromise = fs.promises.readFile("./f3.txt");
        f3KaPromise.then(function(data){
            console.log(data+"");
        })
    })
})