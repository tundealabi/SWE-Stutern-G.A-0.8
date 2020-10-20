const prompt = require("prompt");
const fs = require("fs");
const schema = require("./model/data")
const apiCall = require("./controller/logics");

(function leaderBoard () {
    if(process.argv[2] === "leaderboard") {
        fs.readFile("model/leaderboard.txt",(err,data)=>{
            let result = JSON.parse(data.toString(),(key,value)=>{
                if(key === "leader"){
                    console.log(value);
                }
            });
        })
    }else {
        prompt.start();
        prompt.get(schema,(err,result)=>{
            if(result){
                apiCall(result.search);
         }
    });
   }
})();

