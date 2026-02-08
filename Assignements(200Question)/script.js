// Part1. Basic Console Usage (10 Questions)
// {

//     //	1.	Log your name and favorite hobby to the console.
// // ans
// // console.log("Lucy")
// // console.log("Reading Novels and Books")

// // 2.	Perform and log the result of 45 * 2 - 10.
// // console.log( 45 * 2 - 10)

// // 3.	Use console.log() to display the current year.
// // const currentYear = new Date().getFullYear()
// // console.log(currentYear)

// // 4.	Create two variables for first and last name. Concatenate and log them.

// // const first = "shivam "
// // const last = "kumar"
// // console.log(first +  last)

// // 5. Track the value of a variable by logging it before and after updating.❌
// //     let count = 1;              // create variable
// // console.log(count);        // before update
// // count = 5;                 // update value
// // console.log(count);        // after update

// // 6.	Use console.error() to simulate an error message.
// // console.error("this is error")

// // 7.	Log the square of the number 12 to the console.
// // console.log(Math.sqrt(12))

// // 8.	Print the type of a variable holding the value true.
// // const logged = true;
// // console.log(typeof logged) //output boolean

// // 9.	Create a variable holding your age and log whether it’s greater than 18.
// // const age = 21;
// // console.log(age > 18)

// // 10.	Log the result of 100 / 0 and observe the output.
// // console.log(100/0) // output is infinity
// }

// Part2. Variables and Data Types (10 Questions)
// {

//     // 11.	Declare a variable using let and log its value.
//     // let name;
//     // console.log(name) // output:- undefined

// 	// 12.	Create a constant to store the value of PI and log it.
//     // const store = Math.PI;
//     // console.log(store) // output :- 3.141592653589793

// 	// 13.	Reassign a value to a variable declared with let and log the result.
//     // name = "change";
//     // console.log(name)

// 	// 14.	Check the type of null and log it.
//     // console.log(typeof null) // output:- object

// 	// 15.	Create a variable with a number as a string (e.g., "25") and log its type.'
//     // let age = "23";
//     // console.log(typeof age)   // output :- string

// 	// 16.	Use typeof to check the type of a boolean variable.
//     // let play = true
//     // console.log(typeof play)

// 	// 17.	Create three variables of types string, number, and boolean, and log their values.
//     // let str = "hello"
//     // let numb = 7
//     // let correct = true
//     // console.log(str)
//     // console.log(numb)
//     // console.log(correct)

// 	// 18.	Declare a variable without assigning a value. Log its type.
//     // let declare
//     // console.log(typeof declare)

// 	// 19.	Create a variable with undefined and log its type.
//     // let letter = undefined
//     // console.log(typeof letter)

// 	// 20.	Use const to create an array. Try reassigning the array and observe the error.
//     // const arr = [1,2,3,"letter",true]
//     //  arr = [1,233,5,"jfja",false]
//     // console.log(arr)
// }

// Part3. Loop
// {
// // 21.	Write a for loop to print numbers from 1 to 50.
// // for (let i = 0; i < 51; i++) {
// //     console.log(i)

// // }

// // 22.	Use a while loop to sum the numbers from 1 to 10.
// // let sum = 0;
// // let i = 1;
// // while (i <=10) {
// //     sum =sum + i;
// //     i++
// // }
// // console.log(sum)

// // 23.	Create a for...of loop to log each character of the string "JavaScript".
// // let name = "JavaScript";
// // for(let char of name){
// //     console.log(char)
// // }

// // 24.	Write a for loop that skips even numbers between 1 and 20.
// // let i = 0
// // for (let i = 0; i <=10 ; i++) {
// //     if(i%2 == 0){
// //         console.log(i)
// //     }
// // }

// // 25.	Use a do...while loop to log numbers from 5 to 1.
// // let i = 10;

// // do {
// //   console.log(i);
// //   i--;
// // } while (i >= 1);

// // 26.	Create a for loop that calculates the factorial of 5.
// // let fact = 1
// // for (let i = 5; i > 0; i--) {
// //     fact = fact * i;
// //      console.log("Step with i =", i, "=> factorial =", fact);

// // }
// // console.log(fact)

// // 27.	Write a nested loop to print a 3x3 grid of numbers.

// // 28.	Use a for loop to reverse an array [1, 2, 3, 4].

// // for (let i = 4; i > 0; i--) {
// //     console.log(i)
// // }

// // 29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
// // let i = 1;
// // while (i <= 100) {
// // if(i% 5 ==0){
// //   console.log(i)
// // }
// // i++;
// // }

// // 30.	Use a for...in loop to iterate over an object and log its keys.
// // let data = {
// //   name: "krishna",
// //   age: 23,
// //   gender: "Male",
// // };

// // for (const key in data) {
// //   console.log(key);
// // }
// }

// Part4. Arrays
// {
// 	// 31.	Create an array of your top 5 favorite movies and log it.
//   // let dataa = [1,2,3,4,"Hero","Villain"]
//   // console.log(dataa)

// 	// 32.	Find and log the second element of an array.
//   // console.log(dataa[1]);

// 	// 33.	Add two new elements to the start of an array using .unshift().
//   // dataa.unshift("marvel","IronMan")
//   // console.log(dataa)

// 	// 34.	Remove the last element of an array and log the updated array.
//   // dataa.pop()
//   // console.log(dataa)

// 	// 35.	Use .slice() to extract the first three elements of an array.
//   // var dats = [1,2,3,4,"Hero","Villain"]

//   // console.log(dats.slice(1, 4))

// 	// 36.	Find the index of a specific element in an array using .indexOf().
//   // let arraydataa = [1,2,3,4,"Hero","Villain"]
//   // console.log(arraydataa.indexOf("Hero"))

// 	// 37.	Check if a value exists in an array using .includes().
//   // let arraydataa = [1,2,3,4,"Hero","Villain"]
//   // console.log(arraydataa.includes("Hero"))

// 	// 38.	Combine two arrays [1, 2] and [3, 4] using .concat().
//   // let arr1 = [1,2]
//   // let arr2 = [3,4]
//   // console.log(arr1.concat(arr2))

// 	// 39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
//   // let sortnumb = [5,2,9,11]
//   // console.log(sortnumb.sort((a,b)=> a-b ))

// 	// 40.	Write a program that creates a copy of an array without mutating the original.
//   // let arr =[2,3,4,5]
//   // arr.push(34)
//   // console.log(arr)
// }

// // Part5. Functions
// {
// // 41.	Write a function to check if a number is even or odd.

// // function checkNumb(numb){
// //   if(numb % 2 == 0){
// //     console.log("this is a even numb.")
// //   }
// //   else{
// //     console.log("this is odd numb.")
// //   }
// // }

// // checkNumb(7)

// // 42.	Create a function to calculate the area of a circle with a given radius.
// // function circlearea(r){
// //   area = Math.PI *r *r
// //   return area
// // }
// // console.log(circlearea(2))

// // 43.	Write a function that accepts an array and returns the sum of its elements.
// //   function arraySum(arr){
// //      let blankarr = arr
// //      let sum = 0
// //      for (let i = 0; i < blankarr.length; i++) {
// //       sum = sum + blankarr[i]
// //     }
// //     console.log(sum)
// //   }
// // arraySum([2,3,4,5])

// // 44.	Create a function that checks if a string starts with a specific character.
// // function symbolChecker(str) {
// //   if (!str) {
// //     console.log("Empty string");
// //     return;
// //   }

// //   const firstChar = str[0];

// //   if (/[^a-zA-Z0-9]/.test(firstChar)) {
// //     console.log("The string starts with a symbol.");
// //   } else {
// //     console.log("The string does not start with a symbol.");
// //   }
// // }

// // symbolChecker("@@@jfd"); // The string starts with a symbol.
// // symbolChecker("hello@"); // The string does not start with a symbol.

// 	// 45.	Write a function to find the maximum of two numbers.
//   // function maxfinder(a,b){
//   //   if(a>b){
//   //     console.log(a +" is the maximum of two number")
//   //   }
//   //   else{
//   //     console.log(b + " is the maximum of two number ")
//   //   }
//   // }
//   // maxfinder(5,2)

// 	// 46.	Create a function that takes a number and returns its factorial.
//   // function factorialfinder(n){
//   //   let fact = 1;
//   //   for (let i = n; i > 0; i--) {
//   //      fact = fact * i
//   //   }
//   //   console.log(fact)

//   // }
//   // factorialfinder(4)

// 	// 47.	Write a function that accepts a string and returns its reverse.
//   //  function reverseString(str){
//   //   let reverse = ""
//   //   for (let i = str.length - 1; i >= 0; i--) {
//   //     reverse += str[i]
//   //   }
//   //   console.log(reverse)
//   //  }

//   //  reverseString("hello")

// 	// 48.	Create a function to find the largest number in an array.
// //   function largnumbfinder(arr) {
// //   let largest = arr[0];

// //   for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > largest) {
// //       largest = arr[i];
// //     }
// //   }

// //   return largest;
// // }
// // console.log(largnumbfinder([1, 2, 3]));

// 	// 49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").

//   // function stringConvert(str){
//   //   return str.toLowerCase().split(" ").join("-")
//   // }

//   // console.log(stringConvert("Hello World"))

// 	// 50.	Create a function that logs "Hello, World!" every time it is called.
//   // function greeting(){
//   //   console.log("Hello, World!")
//   // }
//   // greeting()

// }

// Part6. Conditionals
// {
// // 51.	Write a program to check if a number is positive, negative, or zero.

// // function numbcheck(input) {
// //   if (input > 0) {
// //     console.log("this is postive number", input);
// //   } else if (input < 0) {
// //     console.log("this is negative number", input);
// //   } else if (input == 0) {
// //     console.log("this number is zero", input);
// //   } else {
// //     console.log("this is string",input);
// //   }
// // }
// //  numbcheck("str");

// // 52.	Create a program to check if a year is a leap year.
// // function isleap(numb) {
// //   if ((numb % 100 !== 0 && numb % 4 === 0) || numb % 400 === 0) {
// //     console.log("This is a leap year", numb);
// //   } else {
// //     console.log("This is not a leap year", numb);
// //   }
// // }

// // isleap(2014);

// // 53.	Write an if...else statement to determine if a person can vote based on their age.

// // function vote(numb){
// //   if(numb >= 18){
// //     console.log("You are eligible for vote")
// //   }
// //   else{
// //     console.log("Your are not eligible for vote")
// //   }
// // }
// // vote(18)

// // 54.	Use a switch statement to log the name of the day based on its number (1 = Monday).

// // function daycheck(numb){

// //   let dayName;
// //   switch (numb) {
// //     case 1:
// //     dayName = "Monday";
// //     break;
// //   case 2:
// //     dayName = "Tuesday";
// //     break;
// //   case 3:
// //     dayName = "Wednesday";
// //     break;
// //   case 4:
// //     dayName = "Thursday";
// //     break;
// //   case 5:
// //     dayName = "Friday";
// //     break;
// //   case 6:
// //     dayName = "Saturday"
// // }
// // console.log(dayName)

// // }

// // daycheck(3)

// // 55.	Write a program to check if a number is divisible by 3 and 5.
// // function checkdivide(numb) {
// //   if (numb % 3 == 0 && numb % 5 == 0) {
// //     console.log(numb + " is completely divisible by both 3 and 5");
// //   } else if (numb % 3 == 0) {
// //     console.log(numb + " is completely divisible by 3");
// //   } else if (numb % 5 == 0) {
// //     console.log(numb + " is completely divisible by 5");
// //   } else {
// //     console.log(numb + " is not divisible by 3 or 5");
// //   }
// // }

// // checkdivide(2)

// // 56.	Create a program to check the grade of a student based on marks.
// //   function checkGrade(marks) {
// //   let grade;

// //   if (marks >= 90) {
// //     grade = "A+";
// //   } else if (marks >= 80) {
// //     grade = "A";
// //   } else if (marks >= 70) {
// //     grade = "B";
// //   } else if (marks >= 60) {
// //     grade = "C";
// //   } else if (marks >= 50) {
// //     grade = "D";
// //   } else {
// //     grade = "F";
// //   }

// //   console.log("Marks:", marks, "→ Grade:", grade);
// // }

// // // Example usage:
// // checkGrade(95);
// // checkGrade(72);

// // 57.	Write an if condition to compare two strings and log if they are equal.
// // function stringCompare(a,b){
// //   if(a == b){
// //     console.log("Both strings are equal")
// //   }else{
// //     console.log("Both strings are not equal")
// //   }
// // }

// // stringCompare("Reshmi", "Reshmi")

// // 58.	Use a ternary operator to check if a number is even or odd.
// //    function ternaryCheck(num){
// //   console.log(num % 2 === 0 ? "Even" : "Odd");
// // }
// // ternaryCheck(22);

// // 59.	Write a program to find the largest of three numbers using if...else.
// function largestOfThree(a, b, c) {
//   if (a >= b && a >= c) {
//     console.log("Largest number is:", a);
//   } else if (b >= a && b >= c) {
//     console.log("Largest number is:", b);
//   } else {
//     console.log("Largest number is:", c);
//   }
// }

// largestOfThree(10, 25, 15);

// // 60.	Create a program to calculate the discount based on the price of an item.

// function calculateDiscount(price) {
//   let discount = 0;

//   if (price >= 500) {
//     discount = price * 0.2;
//   } else if (price >= 200) {
//     discount = price * 0.1;
//   } else {
//     discount = 0;
//   }

//   let finalPrice = price - discount;

//   console.log("Original Price:", price);
//   console.log("Discount:", discount);
//   console.log("Final Price:", finalPrice);
// }

// calculateDiscount(600);
// }

// Part7. Object Basics
// {
// 	// 61.	Create an object with properties name, age, and city. Log the object.
// //   let person = {
// //   name: "Nirman",
// //   age: 35,
// //   city: "New Delhi"
// // };

// // console.log(person);

// 	// 62.	Add a new property isStudent to the object above and set it to true.
// //   person.isStudent = true
// // console.log(person);

// 	// 63.	Access and log the value of the city property using bracket notation.
//   // console.log(person["city"]);

// 	// 64.	Delete the age property from an object and log the updated object.
// //   delete person.age;
// // console.log(person);

// 	// 65.	Write a function that accepts an object and logs all its keys.
// //   function logKeys(obj) {
// //   for (let key in obj) {
// //     console.log(key);
// //   }
// // }

// // logKeys(person);

// 	// 66.	Create an array of objects representing books with title and author properties.
// //   let books = [
// //   { title: "Book One", author: "Ramsethi" },
// //   { title: "Book Two", author: "Anirudhi" },
// //   { title: "Book Three", author: "Menjara" }
// // ];
// // console.log(books)

// 	// 67.	Access and log the author of the second book in the array.
//   // console.log(books[1].author);

// 	// 68.	Write a program to check if a specific key exists in an object.
// //   function hasKey(obj, key) {
// //   return key in obj;
// // }

// // console.log(hasKey(person, "name"));
// // console.log(hasKey(person, "age"));

// 	// 69.	Create a function to count the number of keys in an object.
// //   let people = {
// //   name: "Nirman",
// //   age: 35,
// //   city: "New Delhi"
// // };
// // function countKeys(obj) {
// //   return Object.keys(obj).length;
// // }

// // console.log(countKeys(people));

// 	// 70.	Use Object.assign() to merge two objects.
// //   let obj1 = { a: 1, b: 2 };
// // let obj2 = { c: 3, d: 4 };

// // let merged = Object.assign({}, obj1, obj2);

// // console.log(merged);

// }

// Part8. String Manipulation
// {
// 	 71.	Create a string and log its length.
// //   let string = "Hello";
// // console.log(string.length);

// 	// 72.	Extract the last 4 characters of a string.
// //   let text = "Language";
// // console.log(text.slice(-4));

// 	// 73.	Convert a string to lowercase and log it.
// // let word = "HELLO";
// // console.log(word.toLowerCase());

// 	// 74.	Split a sentence into words using .split() and log the result.
//   let sentence = "Hello world duniya";
// let duniya = sentence.split(" ");
// console.log(duniya);

// 	// 75.	Find the position of the first occurrence of "a" in a string.
//   let sample = "JavaScript";
// console.log(sample.indexOf("c"));

// 	// 76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
// //   let msg = "I love JavaScript";
// // console.log(msg.replace("JavaScript", "JS"));

// 	// 77.	Repeat a string 3 times using .repeat().
// // let greet = "Hi ";
// // console.log(greet.repeat(3));

// 	// 78.	Create a function that checks if a string contains a specific word.
// //   function containsWord(str, word) {
// //   return str.includes(word);
// // }
// // console.log(containsWord("I love coding", "love"));
// // console.log(containsWord("I love coding", "harry"));

// 	// 79.	Write a program to remove whitespace from both ends of a string.
// // let name = "   John   ";
// // console.log(name.trim());

// 	// 80.	Create a function to count the number of vowels in a string.
// //   function countVowelsRegex(str) {
// //   const matches = str.match(/[aeiou]/gi);
// //   return matches ? matches.length : 0;
// // }
// // console.log(countVowelsRegex("Hello World"));

// }

// Part9. Mixed
// 81. Write a function that accepts an array of numbers and returns only the even numbers.
// function getEvenNumbers(arr) {
//   let result = [];

//   for (let num of arr) {
//     if (num % 2 === 0) {
//       result.push(num);
//     }
//   }
//   return result;
// }
// console.log(getEvenNumbers([1,2,3,4,5,6]));

// 82.Create a program to count the occurrences of a specific value in an array.
// function OccurValue(arr, target) {
//   let count = 0;

//   for (let num of arr) {
//     if (num === target) {
//       count++;
//     }
//   }
//   return count;
// }

// // Example
// console.log(OccurValue([1,2,3,2,4,2], 2));
// // Output: 3

// 83.	Write a function that accepts a string and returns whether it’s a palindrome.

//     function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false

// 84.	Create a program to log a pattern:
// *
// **
// ***
// ****

// function printPattern(n) {
//   let stars = "";

//   for (let i = 1; i <= n; i++) {
//     stars += "*";
//     console.log(stars);
//   }
// }

// printPattern(4);

	// 85.	Write a function that returns the square of each number in an array.
//   function squareNumbers(arr) {
//   let result = [];
//   for (let num of arr) {
//     result.push(num * num);
//   }
//   return result;
// }

// console.log(squareNumbers([2,3,4])); 

	// 86.	Use a for loop to sum all odd numbers between 1 and 50.
    // let sum = 0 
    // for (let index = 1; index < 50; index++) {
    //     if(index % 2 != 0){
    //         sum = index + sum
    //     }
    // }
    // console.log (sum)

	// 87.	Create an object representing a person and log their full name.
//     const person = {
//   firstName: "Lucy",
//   lastName: "Jana"
// };
// console.log(person.firstName + " " + person.lastName); 

// 88.	Write a program to convert the string "10" to a number and add 5 to it.

// let str = "39"
// let numb = Number(str)

// let result = numb + 5
// console.log(result)

	// 89.	Write a program to reverse an array without using .reverse().

    // function reversArr(arr){
    //     let value = []
    //     for (let i = arr.length - 1; i >=0; i--) {
    //         value.push(arr[i])   
    // }
    // return value
    // }

    // console.log(reversArr([2,3,4]))

	// 90.	Create a program to check if an array is empty.
 
    // function arrayCheck(arr){
    //     return arr.length === 0
    // }
    // console.log(arrayCheck([]))
    // console.log(arrayCheck([1,2,3,4]))

    // 91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
    function currentdate(){
        let date = new date()
        console.log(date)
    }
    console.log(currentdate())


