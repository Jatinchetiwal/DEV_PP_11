//It works on both arrays and objects 
//It takes two arrays or two objects as an input 
//It adds the two arrays or two objects and give the resultant array or object as output

let a = [1,2,3];
let b = [4,6];
let c = [...a,...b];
console.log(c);
//-------------------
//slice and spread
let x = [1,2,4,5];
let y = [...x.slice(0,2),3,...x.slice(2,5)];
console.log(y);


//-------------------
//spread operation on objects

let o1 = {
    a : 1, b : 2
}
let o2 = {
    c : 3
}
let o3 = {...o1,...o2,...o1,...o2

}
console.log(o3);