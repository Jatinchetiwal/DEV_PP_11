//It takes a function and an array as an input
// It apply the operation given in functgion on elements of array
//It return a single value ans after applying the operator on all elements of array
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