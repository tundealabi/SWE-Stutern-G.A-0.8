QUESTION 1

function countdown(num){
    let cancelTimeinterval = setInterval(() => {
    num == 0 ? console.log("DONE!") : console.log(num);   
      --num;
      if(num < 0){
        clearInterval(cancelTimeinterval);
    };    
    },1000);
}


QUESTION 2

function randomGame(){
    let count = 0;
    let cancelTimeinterval = setInterval(()=>{
        count++;
        if(Math.random() > .75){
            clearInterval(cancelTimeinterval);
            console.log(count);
        }
    },1000);
}


QUESTION 3

function isEven(num){
    return num % 2 == 0;
}


Question 4

function isOdd(num){
    return num % 2 != 0;
}


QUESTION 5

function isPrime(num){
    if(num <= 1){
        return false;
    }

   for(let i = 2; i < num; i+=1){
       if(num % i == 0){
           return false;
       }
   }
   return true;
}


QUESTION 6

function numberFact(num,fn){
    return fn(num);
}


QUESTION 7

function find(arr,fn){
    for(let i = 0; i < arr.length; i+=1){
      if(fn(arr[i])){
          return arr[i];
      }
    }
}


QUESTION 8

function findIndex(arr,fn){
    for(let i = 0; i < arr.length; i+=1){
        if(fn(arr[i])){
            return i;
        }
    }
}


QUESTION 9

function specialMultiply(a,b){
    if(arguments.length == 2){
        return a * b;
    }
    return function multiply(b){
        return a * b;
    }
}
