var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Creating Record Schema for Records collection - exporting records model
var RecordSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },

    body: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now()
    }
});

var records = mongoose.model('records', RecordSchema);

module.exports = records;