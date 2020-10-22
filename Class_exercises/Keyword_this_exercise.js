//1.
//The value of this is the window object.

//2.
/*The function returns the window object because the function was called in the global environment which by defalut refers 
to window object. This is known as defalut binding. 
*/
//3.
/*The function returns "Hello! Tim" because "this" refers to the object "instructor". This is known as implicit binding
where a function wrapping the "this" keyword is being called as a method on an object. So, here the call-site has some
parent object which is instructor. E.g. instructor.sayHi().
*/
//4.
/*The function returns "Cat owner? undefined". Still using question 2 explanation. "This" refers to the instructor object
based on how the function was called - instructor.displayInfo(). Since, "this" refers to instructor object, we're trying
to access the property catOwner on instructor which does not exist. It only exist as a property on "info" which is a property
on instructor.
*/
//5.
/*The function returns "Oakland". The function was called by the object "info" so "this" refers to the info object which has
a property "data" which in turn as an object as a value with a property "location" and a value of Oakland.
*/
//6. 
/*The function throws a typeError because we are trying to call "undefined" as a function. So, "this" when used outside a 
function refers to the window object. So, in our example we have an object where one of it's properties has a value of "this"
and it refers to the window object. So, here - (logLocation: this.displayLocation) logLocation is equal to undefined because
there is no property on the window object with a displayLocation name.
*/

//PART 2
//7.
obj.person.sayHi.call(obj);
obj.person.sayHi.apply(obj);
obj.person.sayHi.bind(obj)();

//8.
/*i. The arguments keyword
ii. DOM node lists
iii. Strings
*/

//9. 
function sumEvenArguments(){
    return (
           [].slice.call(arguments)
           .reduce((acc,current) =>{
               if(current % 2 === 0){
                  acc = acc + current;
               }
               return acc;
           },0)
         )
}

//10.
function arrayFrom(args){
    return [].slice.apply(args);
}

//11.
function invokeMax(fn,maxAmt){
    let count = 0;
   return function(){
       count++;
       if(count > maxAmt){
           return "Maxed Out!";
       }
      return fn.apply(this,arguments);
   }
}


//12.
function guessingGame(amount){
    let answer = Math.floor(Math.random()*11);
    let guesses = 0;
  return function(guess){
      guesses++;
      if(guesses < amount){
         if(guess > answer){
          return "You're too high!";
      }else if(guess < answer){
          return "You're too low!";
      }
      guesses = amount;
      return "You got it!";  
      }else if(guesses === amount){
          return `No more guesses the answer was ${answer}`;
      }
     return "You are all done playing!";
  }
}
