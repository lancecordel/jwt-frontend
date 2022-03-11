const db = require('../db');
const Person = require('../models/person');
const Employer = require('../models/employer');

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async() => {
  // const feednaton = await Employer.find({company_name: "Feednation"});
  // const dynazzy = await Employer.find({company_name: "Dynazzy"});

  const persons = [
    {
    first_name: "Alena",
    last_name: "Augur",
    employer: await Employer.findOne({company_name: "Feednation"}),
    email: "aaugur0@engadget.com"
  }, {
    first_name: "Bernetta",
    last_name: "Trippack",
    employer: await Employer.findOne({company_name: "Feednation"}),
    email: "btrippack1@ucoz.com"
  }, {
    first_name: "Linette",
    last_name: "Jeavons",
    employer: await Employer.findOne({company_name: "Feednation"}),
    email: "ljeavons2@sogou.com"
  }, {
    first_name: "Murial",
    last_name: "Szepe",
    employer: await Employer.findOne({company_name: "Dynazzy"}),
    email: "mszepe3@cmu.edu"
  }, {
    first_name: "Tedie",
    last_name: "Storry",
    employer: await Employer.findOne({company_name: "Dynazzy"}),
    email: "tstorry4@who.int"
  }
]

    await Person.insertMany(persons);
    console.log('Inserted People');
}

const run = async () => {
    await main();
    db.close();
}

run()


