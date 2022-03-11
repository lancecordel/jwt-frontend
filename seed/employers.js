const db = require('../db');
const Car = require('../models/person');
const Employer = require('../models/employer.js');


db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async() => {
    const employers = [
        {
            company_name: "Feednation",
            address: "79 International Drive",
            city: "Jacksonville",
            state: "Florida"
          }, {
            company_name: "Dynazzy",
            address: "126 2nd Plaza",
            city: "Boulder",
            state: "Colorado"
          }
        ]

    await Employer.insertMany(employers);
    console.log('Created Employers');
}

const run = async () => {
    await main();
    db.close();
}

run()
