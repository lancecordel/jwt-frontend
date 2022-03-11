const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: {type: String, required: true},
        model: {type: String, required: true},
        owner: {type: Schema.Types.ObjectId, ref: 'persons'},
        vin: {type: String, required: true}
    }
);

module.exports = mongoose.model('cars', Car);

