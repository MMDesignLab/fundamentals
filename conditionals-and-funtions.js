/*
*Conditionals, Functions, Scopes and Loops

* conditionals are a piece of code that evaluated to a true or false - boolean
// Equals == ignore data types; === doesn’t ignore data types
let equals = 1 === 1;

// Greater than
Let greaterThan = 5 >1;

//Less than
let lessThan = 2 < 10;

//Greater than or equals to
let greaterThanEq = 5 >= 5;

//Less than or equals to
let lessThanEq = 4 <= 9;

//Not Equals – only returns true if the values aren’t the same
let notEquals = 5 !== 2;


let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;

control statement if block - however nothing will display if store A had a higher price
else and else if blocks - if we want to say or check for something else
else if statements allow us to append comparisons to the IF block, but it also needs a new comparison

* if(storeAIsLower){
    console.log("Store A has a lower price.");
} else if (storeB < storeA) {
    console.log("Store B has a lower price.");
} else{
    console.log("Their prices are equal");
}

console.log(storeAIsLower);



if we wanted to reuse the code or change what the messages said we'd have to change them in every place that we copy & pasted them which can get out of hand. Why we need functions!
Functions are ways that we can encapsulate our code in a way that is reusable. Visually it is similar to an IF block except that it is named.
functions have 2 main features - parameters and the code that they excecute!
parameters allow us to pass variables into our code


let storeA = 4.40;
let storeB = 4.40;
function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if(storeAIsLower){
        console.log("Store A has a lower price.");
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.");
    } else{
        console.log("Their prices are equal");
    }
}
to run the function we call it by its name followee by parentheses - and inside the parentheses we pass the value
compareStorePrices(10,5);
we can call this code multiple times
compareStorePrices(7, 10);


functions can also give us values - lets create a function that squares a number
function  squareNum (number) {
    return number * number; //to have a function give us a value we need a RETURN statement
}

set a variable squaredNumber to the return value of this function squareNum and console log that we get the answer we are expecting
as long as the logic inside the function is true it will return the correct answer
let squaredNumber = squareNum(100);
console.log(squaredNumber);
functions should not be longer than 20 lines of code and should only do 1 thing = test if you are using the word AND



//SCOPE is the idea that certain values or variables are only accessible within certain levels of your code
let x = 10; //on the GLOBAL SCOPE - highest level of scope we can have
function addNumbers (n,m, x) { //if we call an x inside of our function it will overide the X and the global scope
    //lexically scoped which means the scopes cascade down so we do have access to the global scope within the function
    console.log(x); //we do have access to the global scope within the function
    let b; // if we want to use the value of b, we'll have to declare the variable outside of the scope of the IF block
    if (1===1) {
        let b = 8;
    }
    console.log(b);
    return n + m; //function scope - scope of addNumbers which means we can't access them outside of this function
}

addNumbers(1, 2, 10);
//console.log(x);

//JavaScript has 3 levels of scopes - global scope, function scope and block scope (if blocks have their own scope)



//Arrays are a type of data structure. Arrays in JS are a special type of object. But rather than setting the keys the language itself or JS sets the keys for us.
//These special keys are called indexes. These indexes reference positions within the array.
//Data structures are simply a way that organizes pieces of our data, similar to objects

//indexes start at 0 and increment by 1
//square brackets, within these square brackets we add a list of our values separated by commas
//                0,1,2,3,4
//let ourArray = [1,2,3,4,5];
//console.log(ourArray[3]); //to access these values we simply console.log and give the name of the array, followed by bracket and then we put the index that we want to get the value for

//it's also possible to nest objects or more arrays inside of itself much like we talked about with objects
//                0,1,2,3,4
//                          4/0, 4/1, 4/2
//let ourArray = [1,2,3,4,['a', 'b', 'c']];
//console.log(ourArray[4][0]);


//let ourArray = [1,2,3,4,5];
let ourArray = [1, 2, 3, 4, 5];

ourArray[1];
ourArray[2];
ourArray[3];



//loops are structure much like an IF  block that repeat a certain section of code until a certain condition is met
//a few times of loops
//for loop - 3 elements of a for loop (a counter; comparison; incrermenter) = (let i=0; i<5; i++) ++ means adds 1 each time the loop completes
//i is just a variable that equals a number


//                        0,1,2,3,4, 5, 6
//let ourArray = [1,2,3,4,5, 6, 7]

//for(let i=0; i<ourArray.length; i++){
    //console.log("i is equal to: " + i);
    //console.log(ourArray[i]); }

//get the length of the array outside of the for loop and then substitute the value that i is compared against with the array that is set to our length
//this could be a better way to do this because we've already set the value and the loop is not having to check this function every single time
let arrLen = ourArray.length; //the loop doesn't check this function ever single time which can save on code execution time as the value is already calculated before the loop starts
for(let i=0; i<arrLen; i++){
    console.log(ourArray[i]);
}


//nesting loops - the inner loop will do its loops for every time the outer loop executes
//display the 1 the inner loops runs 10 times, display 2 inner loop runs 10 ***be careful putting loops within loops
//                        0 1 2 3 4 5 6
let ourArray = [1,2,3,4,5,6,7];

let arrLen = ourArray.length;
for(let i=0; i<arrLen; i++){
    console.log(ourArray[i]);
    for(let j=0; j<10; j++){
        console.log('j is equal to: ' + j);
    }
}
*/

//while loop -runs until a conditional is false
//be careful when using while loops because it's easy to create an infinite loop which will cause your program to crash

let x = 0;
while (x < 10){
    console.log('Ran');
    x = x + 1;
}

