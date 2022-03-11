const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Home = new Schema(
    {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        owner: {type: Schema.Types.ObjectId, ref: 'persons'}
    }
);

module.exports = mongoose.model('homes', Home);

