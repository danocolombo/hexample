var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [3, 'name is too short'],
        max: [100, 'name is too long'],
    },
});

// Virtual for book's URL
GenreSchema.virtual('url').get(function () {
    return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
