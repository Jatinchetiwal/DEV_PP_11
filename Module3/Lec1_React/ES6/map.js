//It takes an array input
//it takes a function as an input
//It runs a loop and generate output theough the function using every value of array
// It produces the output and place it in an array
//It return the output as an array

let a = [1, 2, 3, 4, 5];
function double(x){
    return 2*x;
}

let ans = a.map(double);




//---------------
//Mymap

function myMap(arr, f) {
    let ans = [];
  
    for (let i = 0; i < arr.length; i++) {
      ans.push(f(arr[i]));
    }
  
    return ans;
  }
  
  console.log("Created Map function:");
  console.log(a);
  console.log(myMap(a, double));