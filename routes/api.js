var express = require('express');
var app = express();
var Record = require('../models/Record');
var customValidator = require('./customValidator');


// Post route for creating a record
app.post('/create', (req, res) => {

    customValidator.validate(req.body, function (result, error) {

       if(error){ throw error }

       if(result === true){
            var data = new Record(req.body);
            data.save().then(res.json({Status: "Inserted!"}));
        }
        if(result != true) {
          res.json(result);
        }

    });
});

// Get route for getting one record by id
app.get('/get/:id', (req, res) => {

   Record.findById(req.params.id, function (err, result){
      if(err) throw err;
      res.json(result);
   });

});


// Post route for updating and existing record by id
app.post('/update/:id', (req, res) => {

    customValidator.validate(req.body, function (result, error) {

        if(err) { throw err; }

        if(result != true ){
            res.json(result);
        }

        if(result == true){
            Record.findByIdAndUpdate(req.params.id,{$set:req.body}, function(err, result) {
                if (err) {
                    console.log(err);
                }
                res.json({Status: "Updated"});
            });
        }
    });

});

// Post route by deleting a record by id
app.post('/delete/:id', (req, res) => {

    Record.findByIdAndDelete(req.params.id, function (err, result){
        if(err) throw err;
        res.json({Status: "Deleted!"});
    });

});

module.exports = app;

