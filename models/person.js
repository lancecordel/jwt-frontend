const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema(
    {
        first_name: String,
        last_name: String,
        employer: {type: Schema.Types.ObjectId, ref: "employers"},
        email: String,
    }
);

module.exports = mongoose.model('persons', Person);

