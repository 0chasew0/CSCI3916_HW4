require('dotenv').config();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

// movie schema, all fields are required and actors is an array of strings
var MovieSchema = new Schema({
    Title: {
        type: String,
        required: true,
        index: {
            unique: true
        },
        trim: true
    },
    YearReleased: {
        type: Number,
        required: true,
        trim: true
    },
    Genre: {
        type: String,
        required: true,
        trim: true
    },
    Actors: [{
        type: String,
        required: true,
        ActorNames: [{
            type: String,
        }],
        CharacterNames: [{
            type: String
        }]
    }]
});


module.exports = mongoose.model('Movie', MovieSchema);