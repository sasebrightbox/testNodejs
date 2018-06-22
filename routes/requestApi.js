var express = require('express');
var app = express();
var request = require('request');


// Get api route with 'request' library for getting a random quote
app.get('/', (req, res) => {

    request('https://random-quote-generator.herokuapp.com/api/quotes/random', function (error, response, body) {

        if (!error && response.statusCode == 200) {

            body = JSON.parse(body);

            res.json(body);
        }
    });

});


module.exports = app;