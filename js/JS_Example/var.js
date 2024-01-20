// var, let, const

// var firstName = 'SFI';
// console.log(firstName);


// // Init var
// var greeting;
// console.log(greeting);


// let
// let firstName;
// firstName = 'hasan';
// console.log(firstName);
// firstName = 'Ali';
// console.log(firstName);


// // const
// const firstName = 'hasan';
// console.log(firstName);
// // can not reassign
// firstName = 'Ali';

// const person = {
//     firstName: 'Ali',
//     age: 35
// }

// person.firstName = 'hasan';
// person.age = '55';

// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// numbers.shift();
// console.log(numbers);



// Functions

// Function Declaration

// function add() {
//     console.log('add function');
// }

// add()



// console.log(add(7,9));

// function add(x,y){
//     return (x+y)
// }

// console.log(add(1,6));


// function expression

// console.log(add(7));

// const add = function(x){
//     return x
// }

// console.log(add(2));


//Arrow Function (ES6)

// const add = (x,y) => x+y;
// console.log(add(6,4));


//Immediatley invokable function expression - IIFEs

// (function(){
//     console.log('IIFEs Run ...');
// }
// )()


// (function(firstName){
//     console.log('Hi '+ firstName);
// }
// )('ali')



// Global Scope

// var a = 1;
// let b = 2;
// var a = 3;
// const c = 3;

// function test(){
//     var  a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope:', a, b, c);
// }
 
// test();
// console.log('Global Scope:', a, b, c);


// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('IF Scope:', a, b, c);
// }

// console.log('Global Scope:', a, b, c);


// for(let b = 0; b < 10; b++){
//     console.log('Loop:', b);
// }

// console.log('Global Scope:', a, b, c);