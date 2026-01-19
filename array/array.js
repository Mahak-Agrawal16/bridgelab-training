// array:- An array is a special variable that can store multiple values in a single variable.
let arr = [10, 20, 30, 40];
let arr1 = [50, 60, 70, 80];

// indexOf():- indexOf() returns the first index of a specified element and if not founds it returns -1.
console.log(arr.indexOf("20"));

// includes():- includes() checks whether an element exists in an array and it returns true or false.
console.log(arr.includes(30));

// concat():- concat() is used to merge two or more arrays into a new array and it does not change the original arrays.
let result = arr.concat(arr1);
console.log(result);

// join:- join() is used to convert an array into a string by joining elements with a separator.
let join = arr.join(" ");
console.log(join);
//joined by comma
console.log(arr.join(","));

// slice():- slice() is used to extract a portion of an array and return it as a new array and it does not modify the original array.
let result1 = arr.slice(1, 4);
console.log(result1);

// map():- map() is used to create a new array by applying a function to each element of an existing array.
let result3 = arr.map(num => num * 2);
console.log(result3);

let result4 = arr.map(num => num * num);
console.log(result4);

// filter():- filter() is used to create a new array containing only those elements that satisfy a given condition and it does not modify the original array.
let result5 = arr.find(num => num % 2 === 0);
console.log(result5);

// some():- some() is used to check whether AT LEAST ONE element in an array satisfies a given condition and it returns a Boolean value:
//   true:- if any one element matches
//   false:-if no element matches
let result6 = arr.some(num => num % 2 === 0);
console.log(result6);


// every():- every() is used to check whether ALL elements in an array satisfy a given condition and it returns a Boolean value:
//   true:- if all elements satisfy the condition
//   false:- if any one element fails the condition
let result7 = arr.every(num => num > 0);
console.log(result7);

// isArray   is used to check whether a value is an array or not.
let resultB = Array.isArray(arr);
console.log(resultB);

// array.form is an array method used to loop through each element of an array.
let numbersA = [10, 20, 30];
numbersA.forEach(function(num) {
    console.log(num);
});

const data = [
  { _id: 2, quantity: 5, price: 25, targetPrice: 100 },
  { _id: 1, quantity: 10, price: 15, targetPrice: 120 },
  { _id: 3, quantity: 6, price: 35, targetPrice: 100 },
  { _id: 4, quantity: 5, price: 55, targetPrice: 150 },
  { _id: 5, quantity: 5, price: 55, targetPrice: 150 }
];
const result8 = data.map(item => {
    if (
      item.quantity > 5 &&
      item.price < 50 &&
      item.targetPrice > 50
    ) {
      return item;
    }
    return null;
  })
  .filter(item => item !== null);
console.log(result8);
