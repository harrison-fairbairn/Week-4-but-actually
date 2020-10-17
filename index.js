// 1) Using template literals instead of concatenation, write a function that takes 
// firstName and lastName and returns ‘firstName lastName’

function templateLiteral(firstName, lastName) {
    console.log(firstName, ' ' + lastName);
}
templateLiteral('Tom', 'Hardy');

// 2) Write the same function as above as an arrow function with a different name.

let createFullName = (firstName, lastName) => firstName + ' ' + lastName;
console.log (createFullName('Willie', 'Nelson'));

// You could also do it this way with no concatenation
let createWholeName = (firstname, lastName) => `${firstname} ${lastName}`;
 
console.log(createWholeName('Wiley ', 'Coyote'));

// 3) Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a. Using setTimeout, write an inline, anonymous (has no named assigned to it) arrow function in the callback
// parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.

function consoleLog() {
    console.log(delay [2000], 'Time is up!');           
}
setTimeout = ('Time is up');

// b. Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass 
// askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.

var questionB3 = window.setInterval(askAreWeThereYet, 20000, 'Are we there yet?');

function askAreWeThereYet(a, b) {
    console.log(a);
    console.log(b);
}
    clearInterval(askAreWeThereYet);

// 4) In this step you are going to write a function that takes a callback to better understand how callbacks work.
// a. Write a function named processSplicedValue that takes 3 parameters – an array, the index of the element to be 
// spliced from the array, and a callback that will process the sliced element.

var thisArray = ['Dwight', 'Pam', 'Jim', 'Harrison', 'Michael'];
// function processSplicedValue1(array, [i], callback) {
// }

// b. Inside the function, use the first two parameters to splice an element from the array.

const removed = thisArray.splice(3, 1);
function processSplicedValue1(array, [i], callback) {
   console.log(removed);
}
console.log(removed);  // so in my debugger it shows that I got Harrison from the array... but it won't log.

// c. Call the callback function and pass the spliced value into it.

let callBack = thisArray(thisArray[4], removed)
thisArray.splice(0, 1, 'Harrison');

// d. Outside of your function, create an array of strings, called processSplicedValue, and pass the array, an index number,
// and console.log into it. For example: processSplicedValue(arrayName, 2, console.log);

var processSplicedValue = ['I', 'Struggle', 'A', 'Lot', 'With', 'This', 'Stuff'];
processSplicedValue.splice(processSplicedValue, 3, console.log);

// e. Call the processSplicedValue function again but this time pass in the alert method instead of console.log.

window.alert(processSplicedValue1);

// f. Call the processSplicedValue function again, but this time pass in an anonymous
//  arrow function that alerts the spliced value.

console.log(processSplicedValue1) => `${processSplicedValue}`;

// g. Call the processSplicedValue function one more time, but this time, 
// pass in a custom function of your choice that you should create and name.

function myCreatedFunctionG(); {
    window.alert(processSplicedValue1);
}


