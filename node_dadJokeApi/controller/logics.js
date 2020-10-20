const request = require("request");
const fs = require("fs");

const addLeaderBoard = (info) =>{
    fs.readFile("./model/leaderboard.txt",(err,data)=>{
        let highest = 0;
        let result = JSON.parse(data.toString());
        if(result[info.id]){
            result[info.id]++;
        }else {
            result[info.id] = 1;
        }
        if(result[info.id]>=highest){
            result["leader"] = info.joke;
        }
        result = JSON.stringify(result);
        fs.writeFile("./model/leaderboard.txt",result,(err)=>{
            if(err) {
                throw err;
            }
            console.log("added to leaderboard");
        });
    });
}

const jokesStore = (data) =>{
    fs.appendFile("jokes.txt",`${data.joke}\n`,(err)=>{
        console.log("added to joke store");
    })
}

const jokeFunc = (data) => {
    let result = JSON.parse(data).results;
    if(result.length >=1){
        let rand = Math.floor(Math.random()*result.length);
        console.log(result[rand].joke);
        addLeaderBoard(result[rand]);
        jokesStore(result[rand]);
    }else {
        console.log(`No jokes were found for search term - ${JSON.parse(data).search_term}`);
    }
}

const callApi = (term) => {
    request({
        url: `https://icanhazdadjoke.com/search?term=${term}`,
        headers: {'Accept':'application/json'}
    }, function(error, response, body) {
        if(error || response.statusCode != 200) {
            console.log("Sorry, request could not made at this moment. Please try again.")
        }else if (!error && response.statusCode == 200) {
            jokeFunc(body); // Show the JSON for the Star Wars Character
  }
    });
}; 

module.exports = callApi;