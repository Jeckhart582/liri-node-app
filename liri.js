require("dotenv").config();
require('dotenv').config()

var keys = require("./keys");
var axios = require("axios");
var moment = require('moment');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "a765383554464e08be57bd565192bf5a",
  secret: "5ab2b49008754a0fa79708411b90b9fc"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});




