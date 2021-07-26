const fs = require("fs");
let f2kadata = fs.readFileSync("./f2.txt","utf-8");
//console.log(f2kadata);
function applysflag(f2kadata){
let splitteddata = f2kadata.split("\r\n");
//console.log(splitteddata);
let emptyincluded = false;
let removedspaces = [];
for(i = 0; i < splitteddata.length; i++){
    if(splitteddata[i]=='' && emptyincluded == false){
        removedspaces.push(splitteddata[i]);
        emptyincluded = true;
    }else if(splitteddata[i] != ''){
        removedspaces.push(splitteddata[i]);
        if(i < splitteddata.length-2) emptyincluded = false;
    }
}let removedspacesstring = removedspaces.join("\r\n");
return removedspacesstring;


}
//let removedspacesstring = applysflag(f2kadata);
//console.log(removedspacesstring);


function applybflag(f2kadata){
    let count = 1;
    let splitteddata = f2kadata.split("\r\n");
    for(let i = 0; i < splitteddata.length;i++){
        if(splitteddata[i] != ''){
            splitteddata[i] = `${count}.${splitteddata[i]}`;
            count++;
        }
    }
    let splitteddatastring = splitteddata.join("\r\n");
    return splitteddatastring;
}
//let splitteddatastring = applybflag(f2kadata);
//console.log(splitteddatastring);

function applyNflag(f2kadata){
    let count = 1;
    let splitteddata = f2kadata.split("\r\n");
    for(let i = 0; i < splitteddata.length;i++){
        
            splitteddata[i] = `${count}.${splitteddata[i]}`;
            count++;
        
    }
    let splitteddatastring = splitteddata.join("\r\n");
    return splitteddatastring;
}
let splitteddatastring = applyNflag(f2kadata);
console.log(splitteddatastring);