const fs = require("fs");

let functionkadat = fs.promises.readFile("./f1.txt");
functionkadat.then(function(data){
    console.log(data+"");
})
functionkadat.catch(function(error){
    console.log(error);
})
