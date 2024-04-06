/*
* Variables, Data Types, and Typing

*variable wordData
let wordData;

wordData = "Word list";

*console.log is a function that prints data to the screen (helps with debugging and seeing the value of variables)
console.log(wordData);

* keep variables names short and meaningful
let subTotal = 100;
let tax  = subTotal * 0.07;
let totalWithTax = tax + subTotal;

* Data Types in JavaScript
* 6 major types
* 5 primitive types boolean (2 values t/f); null (value set to nothing by the user); undefined (value set to nothing by javascript - never set this value ourselves);
* number (all numbers were math can be performed); strings (alphanumeric characters and coach in "", zipcodes)
* 1 composite type - types comprised of several other types. Single composite type is known as an object. To define an object in JavaScript we create a variable. Objects can
* be comprised of many different types like string, number and boolean. You can even objects inside of other objects. Objects can nest within eachother.

* * object key = variable include COMMA , javascript will throw an error.
let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
    obj2Key1: "Internal Object Value",
    }
};

console.log(obj.key1);


let obj = {
    key1: "Value 1",
    key2: 3,
    obj2:{
        obj2Key1: "value of inner object",
    },
};

console.log(obj.obj2.obj2Key1);


Typing Systems below - JavaScript is a dynamic language so the type of value is determined at the time the program is ran vs. a compiler language where the languages
* need to go through a step that converts what the programmer types to what the computer reads
let variable: = "string";

*in a strong typed language this operation would fail as we are mixing data types; however JavaScript is a weakly typed language it will try to convert one of these
* types to match the type of the other.

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

let add=1+2;
let sub: 2-1;
let mult = 2*4;
let division = 4/2;
let mod = 5% 2;

 */

let string = "Monica " + "Mendez";

console.log(string);

