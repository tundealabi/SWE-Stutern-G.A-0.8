require("dotenv").config();
const config = require("../config").configuration;
const {Client} = require("pg");

const client = new Client({...config});

client.connect()
    .then(()=>console.log("Database is hot"))
    .catch(err=>console.log("Something broke...",err.message));


module.exports = client;