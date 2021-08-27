let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";
const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
// request is a high order function

request( matchLink , cb );

 function cb(error , response , data){
//     //console.log("got the data !!!");
        
//         //console.log(data);
// //console.log(fs.writeFileSync("./match.html",data))
 getHighestWicketTaker(data);
 }
//fs.readFileSync("./match.html","utf-8")
 function getHighestWicketTaker(data){
   // let data = fs.readFileSync("./match.html","utf-8");


    let myDocument = cheerio.load(data);
    //let matchinfo = myDocument(".status-text span").text();
    //console.log(matchinfo);
     let bothBowlingTables = myDocument(".table.bowler");
    //fs.writeFileSync("./bowlingTables.html",bothBowlingTables+"");
    //console.log(bothBowlingTables);
    let highestWicketTakenName;
    let highestWicketsTaken;
    let economyOfHighestWicketTaker;
    for(let i=0 ; i<bothBowlingTables.length ; i++){
        let bowlingTable = myDocument(bothBowlingTables[i]);
        let allTableRows = bowlingTable.find("tbody tr");
        // {
        //     "0" : {tr},
        //     "1" : {tr},
        //     "2" : {tr}
        // }
        for(let j=0 ; j<allTableRows.length ; j++){
             // wicket "4"
            // name "0"
            // economy "5"
            let allTds = myDocument(allTableRows[j]).find("td");
            // {  0 : {} , 1: {} , 2: {}  ,3:{}  }
            if(i==0 && j==0){
                highestWicketTakenName = myDocument(allTds[0]).find("a").text();
                highestWicketsTaken = myDocument(allTds[4]).text();
                economyOfHighestWicketTaker = myDocument(allTds[5]).text();
            }
            else{
                let currentWickets = myDocument(allTds[4]).text();
                let currentEconomy = myDocument(allTds[5]).text();
                 if(currentWickets > highestWicketsTaken  || (currentWickets == highestWicketsTaken && currentEconomy < economyOfHighestWicketTaker)){
                    // update if current bowler have high wickets !!
                   
                 }
                highestWicketTakenName = myDocument(allTds[0]).find("a").text();
                highestWicketsTaken = currentWickets;
                economyOfHighestWicketTaker = currentEconomy;
            }
        }
    }
    console.log(highestWicketTakenName);
console.log(highestWicketsTaken);
console.log(economyOfHighestWicketTaker);

 }

