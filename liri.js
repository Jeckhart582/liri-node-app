require("dotenv").config();
require('dotenv').config()

var keys = require("./keys");
var axios = require("axios");
var moment = require('moment');
var bandsintown = require('bandsintown');
var omdb = require('omdb');

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "a765383554464e08be57bd565192bf5a",
  secret: "5ab2b49008754a0fa79708411b90b9fc"
});

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function (response) {
  })
  .catch(function (err) {
    console.log(err);
  });

var input1 = process.argv[2];
var input2 = process.argv.slice(3).join(" ");

var spotifySearch = function () {
  if (input1 === "spotify-this-song") {
    spotify.search({ type: 'track', query: input2 })
      .then(function (response) {
        var artist = response.tracks.items[0];
        console.log("\n" + "-----------------------------------" + "\n" + "Artist: " + artist.artists[0].name + "\n" + "Song Name: " + input2 + "\n" + "Preview (link): " + artist.href + "\n" + "Album: " + artist.name + "\n");
      });
  }
};

var omdbSearch = function () {
  if (input1 === "movie-this") {

    var URL = "http://www.omdbapi.com/?t=" + input2 + "&apikey=142f2014";

    axios.get(URL).then(
      function (response) {
        var movie = response.data
        console.log("\n" + "-----------------------------------" + "\n" + "Artist: " + movie.Title+ "\n" + "Release Year: " + movie.Year + "\n" + "IMDB Rating: " + movie.imdbRating + "\n" + "Rotten Tomatoes Rating: " + movie.Metascore + "\n" + "Produced in :" + movie.Country + "\n" + "Language: " + movie.Language +  "\n" + "Plot Synopsis: " + movie.Plot + "\n" + "Actors: " + movie.Actors + "\n" );
      });
  }
}

// bandsintown
//   .getArtistEventList('Skrillex')
//   .then(function(events) {
//     // return array of events
//   });

// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

spotifySearch();
omdbSearch();

