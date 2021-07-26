const fs = require("fs");

    let f1kadata = fs.readFileSync("./f1.txt","utf-8");
  //  console.log(f1kadata);
function applyScommand(f1kadata){
    let emptyincluded = false;
    let removedspaces = [];


    let splitteddata = f1kadata.split("\r\n");
    //console.log(splitteddata);
    for(i = 0; i < splitteddata.length;i++){
        if(splitteddata[i] == "" && emptyincluded == false){
            removedspaces.push(splitteddata[i]);
            emptyincluded  = true;
        }else{
            removedspaces.push(splitteddata[i])
            if(i < splitteddata.length-2){
                emptyincluded = false;
            }
        }
    }
    //console.log(removedspaces);
    let removedspacesstring = removedspaces.join("\r\n");
    return removedspacesstring;
}
let removedspacesstring = applyScommand(f1kadata);
console.log(removedspacesstring);
