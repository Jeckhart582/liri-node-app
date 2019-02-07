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
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response.tracks.items[0].album.name);
  })
  .catch(function(err) {
    console.log(err);
  });

//   spotify
//   .request('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist')
//   .then(function(data) {
//     console.log(data.artists.items.id); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });

var input1 = process.argv[2];
var input2 = process.argv[3];

var spotifySearch = function () {
    if (input1 = "spotify-this-song") {
        spotify.search({type: 'track', query: input2})
        console.log(data)
    }
    else {
        console.log("Please enter in a valid command");
    }
}
