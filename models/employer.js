const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employer = new Schema(
    {
        company_name: String,
        address: String,
        city: String,
        state: String
    }
);

module.exports = mongoose.model('employers', Employer);

