
//QUESTION 1

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
};

//a.
(function(){
  let {innerData:{numberData:{primeNumbers}}} = nestedData
  for(let i =0; i<primeNumbers.length;i+=1){
    console.log(primeNumbers[i])
  }
})();

//b.
(function(){
  let {innerData:{numberData:{fibonnaci}}} = nestedData
  for(let i =0; i<fibonnaci.length;i+=1){
    if(fibonnaci[i] % 2 == 0){
      console.log(fibonnaci[i])
    }
  }
})();

//c.
(function(){
  let {innerData:{order}} = nestedData
     console.log(order[1]);
})();

//d.
nestedData.innerData.addSnack("chocolate");
console.log(nestedData.innerData.snacks);

       The keyword "this" refers to where a value lives in(context) or what object it lives in


// QUESTION 2

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

//a.
function addSpeaker(speaker){
   nestedObject.speakers.push({name:speaker});
   return nestedObject.speakers;
}

//b.
function addLanguage(lang,key,value){
  nestedObject.data.languages[lang] = {[key]:value};
  return nestedObject.data.languages;
}

//c.
function addCountry(country,capital,population){
  nestedObject.data.continents.europe.countries[country] = {
      capital, population
  }
  return nestedObject.data.continents.europe.countries;
}

//QUESTION 3

function rotate(arr,count){
  for(let i =0; i < count; i+=1){
    arr.unshift(arr.pop());
  };
  return arr;
}
console.log(rotate([1,2,3],2));


//QUESTION 4

function makeXOGrid(rows,columns){
  let XO = [];
  let result = [];
  for(let i = 0; i < columns; i+=1){
      if(i % 2 == 0){
        XO.push("X")
      }else if(i%2 !=0){
        XO.push("O")
      }
  }
  for(let j = 0; j<rows;j++){
    result.push(XO)
  }
  return result;
}
console.log(makeXOGrid(1,4));
