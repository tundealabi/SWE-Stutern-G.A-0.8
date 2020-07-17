const div = document.getElementById('main');

let buttonArray = [];

for(let i = 0;i<3;i++){
    const button = document.createElement("button");
    button.textContent = "Question " + (i+1);
    div.appendChild(button);
    buttonArray.push(button);
}

 const multiples = num => {
     let number = 0;
     for (let i = 1; i < num; i++) {
         if (i % 3 == 0 || i % 5 == 0) {
             number += i;
         }
     }
     alert(`The sum of the mutiples of 3 and 5 under ${num} is ${number}.`);
     return true;
 };

const even = num =>{
   let result = num[0];
   for(let i = 1; i < num.length; i++){
         if(num[i-1] % 2 == 0 && num[i] % 2 == 0){
            result += `-${num[i]}`;
         }else{
             result += num[i];
         }
   }
   alert(result);
   return true;
};

const mostOccur = (arr) =>{
    let state = JSON.parse(arr);
    let item, count = 0, initial = 1, i =0, length = state.length;
        for (; i < length;) {
            i++;
            for (let j = 0; j < length; j ++) {
                if (state[i] === state[j]) {
                    count++;
                }
                if (count > initial) {
                    initial = count;
                    item = state[i];
                }
            }
            count = 0;
        }
        alert(`${item} (${initial} times)`);
    
     return true;
};

buttonArray.forEach(item =>{
    item.addEventListener('click',()=>{
        let userResponse;
        if(item.textContent === "Question 1"){
            userResponse = prompt("Enter any number of your choice that is less than or equal to 1000");
            userResponse = userResponse ? Number(userResponse) : null;
            if(userResponse <= 1000 && userResponse){
                 multiples(userResponse);
            }      
        } else if (item.textContent === "Question 2") {
            userResponse = prompt("Enter your set of digits");
            if(!isNaN(userResponse) && userResponse){
                even(userResponse.toString());
            }
        }else{
            userResponse = prompt("Enter your array item",'[3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]');
               if(userResponse){
                   mostOccur(userResponse);
               }
        }
    });
});