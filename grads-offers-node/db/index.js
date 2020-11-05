require("dotenv").config();
const config = require("../config");
const {Client} = require("pg");

const client = new Client(config);

client.connect();

module.exports = client;