/*
### 1. Declare an array 
1. Declare an array with 5 elements containing fruits
2. console log the 3rd index element
3. change the value of the 2nd index element to jambura
4. console log the final array
*/

const fruits = ["Apple", "Pineapple", "Grape", "Watermelon", "Banana"];
console.log(fruits[2]);
fruits[1] = "Jambura";
console.log(fruits);
/*
### 2. Add or remove elements
1. Declare an array of 3 tourist destinations
2. Add a new tourist destination to your tourist array
3. Add two more to your array
4. Remove the last tourist destination you have added
5. display the final array as output
*/

const destination = ["cox", "Bandarban", "Bali"];
destination.push("Pataya");
destination.push("fifi", "poching");
destination.pop();
console.log(destination);

/*
### 3. Checking Array Membership with ‘includes’

**Instructions:**

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.
*/

const book = ["html", "css", "javascript", "python"];
const available = book.includes("javascript");
console.log(available);

/*
### 4. Checking if it's an Array

**Instructions:**

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
*/

const arr = [1, 2, 3, 4, 5];
const text = "hello mama";
const result1 = Array.isArray(arr);
const result2 = Array.isArray(text);

console.log(result1, result2);

/*

### 5. Combining Arrays

**Instructions:**

1. Create two arrays of your choice.
2. Use the concat method to combine the two arrays into a new array.
3. Print both the original arrays and the combined array using console.log().
*/

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ["a", "b", "c", "d"];
console.log(arr1, arr2);
const output = arr1.concat(arr2);
console.log(output);
