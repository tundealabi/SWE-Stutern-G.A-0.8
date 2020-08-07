PART 1
Question 1

function printEmails(){
  users.forEach(emails => console.log(emails.email));
 }
 printEmails();
 
 Question 2
 
 function printHobbies(){
  users.reduce((acc,current) =>{
    return acc = acc.concat(current.hobbies);
  },[]).forEach(hobby => console.log(hobby));
}
printHobbies();

Question 3

function findHometownByState(state){
  return users.find(hometowns => hometowns.hometown.state == state);
}
findHometownByState("CA");

Question 4

function allLanguages(){
  return users.reduce((acc,current)=>{
     return acc = acc.concat(current.favoriteLanguages);
  },[])
}
allLanguages();

Question 5

function hasFavouriteEditor(editor){
  return users.some(editors => editors.favoriteEditor == editor);
}
hasFavouriteEditor();

PART 2
Question 6

function vowelCount(vowel){
  vowel = vowel.split("");
  return vowel.reduce((acc,current) =>{
       if(["a","e","i","o","u"].indexOf(current) >= 0){
          !acc[current] ? acc[current] = 1 : ++acc[current];
       }
       return acc;
   },{})
}
vowelCount("incredible");

Question 7

function removeVowels(str){
  str = str.toLowerCase();
  let vowels = ['a',"e","i","o","u"];
  let result = [];
   for(let i = 0; i<str.length; i++){
     if(["a","e","i","o","u"].indexOf(str[i]) < 0){
         result.push(str[i]);
     }
   }     
return result;
}
removeVowels("silly");



