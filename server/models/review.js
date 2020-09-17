var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    rating: { type: Number },
    comment: { type: String },
    date: { type: Date, default: Date.now },
    cafe: { type: Schema.Types.ObjectId, ref: 'cafes'},
    user: { type: Schema.Types.ObjectId, ref: 'users'}
});

module.exports = mongoose.model('reviews', reviewSchema);