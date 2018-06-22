var express = require('express');
var app = express();
var validator = require('validator');


// Custom validator with imported library 'validator' for fields validation
module.exports = {
    validate(data, callback){

        var errors = [];

        if(!validator.isLength(data.body, {min: 1, max: 255})){
            errors.push({err: "Body can be between 1 and 255 chars!"});
        }

        if(!validator.isAlphanumeric(data.title) || !validator.isAlphanumeric(data.body)){
            errors.push({err: "Please enter alphanumeric signs!"});
        }
        if(!validator.isLength(data.title, {min: 1, max: 24})){
            errors.push({err: "Title can  be between 1 and 24 chars!"});
        }

        if(errors.length > 0){
            callback(errors);
        }else {
            callback(true);
        }
    }
};