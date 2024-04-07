/*
Objects, Interfaces and API's

Object-oriented programming is a way to represent data and functionality in an encapsulated way.
It makes it easier to represent real-world objects in code
2 key features in Objects - they contain state or the current data and information that describes the object and
functionality - which is actions or changes that the object can make to itself or the outside world


let dog = {

    name: "Steve",
    color: "brown",
    breed: "pug",
    size: "Small",
    //set functions key as the name of the function and then define the function block by calling function with the
    // parentheses we don't need the name of the function following the function keyword
    bark: function(){
        console.log("Bark!");
    },
};
//to call our objects functions we call the object and access the function like it's any other value
//except we need to include the parentheses like we would calling a function
dog.bark();



//another key concept in OOP is interface vs implementation this has to do with the functions of the object
//the interface is the functions signature bark:function() {} ** the signature is the name bark and the parameters

let dog = {
    name: "Steve",
    color: "brown",
    breed: "pug",
    size: "Small",
    bark: function (typeOfBark) {
        console.log("Bark!");
    },
};

dog.bark();



API = Application programming interface...these are interfaces written into software to be used by other programmers to interact
with the code.

REST API - same idea, they allow us to interact with other people's code except rather than using functions they use URLs as they
are a way to interact with web applications rather than

Passing data by value means that inside of the function only the value of the data is imported meaning that the data is copied for use inside of the function

Passing data by reference means the parameter being passed in only points to the original data
**if you pass in data by reference and change it in some way the original piece of data is affected too - THIS IS IMPORTANT TO KEEP IN MIND if you expect nothing to be changed
you may encounter errors

*/

//here we pass in a number y and add 5 to y
function x(y){

    y.num = y.num + 5; //
    console.log(y); //we console.log the value of y
}
//let's define a variable outside of the function called y and set it to 5
let y = {
    name: "Tom",
    num:10,
};

x(y); //call function x with y
console.log(y);//then console.log