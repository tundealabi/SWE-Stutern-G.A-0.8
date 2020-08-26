//Convert the following es5 code blocks into es2015 code:

//1
const person = {
    fullName: "Harry Potter",
    sayHi(){
        setTimeout(()=> console.log("Your name is " + this.fullName),1000)
    }
}

//2
let name = "Josie"
console.log(`When ${name} comes home, so good`);

//3
const DO_NOT_CHANGE = 42;

//4
let arr = [1,2]
  let [a,b] =  arr;
  arr = [b,a];

 //5
 const double = arr => arr.map(val => val*2);

 //6
 const obj = {
     numbers: {
        a: 1,
        b: 2
    } 
  }

let {numbers:{a,b}} = obj;

//7
const add = (a = 10, b = 10) => a+b;

//8
/*
i.Array.from() lets you create Arrays from:
a. array-like objects (objects with a length property and indexed elements); or
b. iterable objects (objects such as Map and Set).

ii.The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
   It returns the target object.

iii. The includes() method determines whether an array includes a certain value among its entries, 
     returning true or false as appropriate.

iv. The startsWith() method determines whether a string begins with the characters of a specified string, 
    returning true or false as appropriate.
    */
