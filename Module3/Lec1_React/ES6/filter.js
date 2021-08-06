
//It works on an array
// It takes an array and a function
//It place a loop on every element and check the condtion on function
//If the element passes the condtion it places it an arry
//It returns the output as an array

let a = [1, 2, 3, 4, 5];

function isEven(x) {
  return x % 2 == 0;
}

let filteredArr = a.filter(isEven);

console.log("Original filter function:");
console.log(a);
console.log(filteredArr);

// --------------------------

// myFilter

function myFilter(arr, f) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

console.log("Created filter function:");
console.log(a);
console.log(myFilter(a, isEven));