const db = require('../db');
const Person = require('../models/person')
const Home = require('../models/home');


db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async() => {
    const homes = [
        {
            street: "7 Loeprich Park",
            city: "Baton Rouge",
            state: "Louisiana",
            owner: await Person.findOne({first_name: "Alena"})
          }, {
            street: "9717 Monica Plaza",
            city: "Santa Ana",
            state: "California",
            owner: await Person.findOne({first_name: "Bernetta"})
          }, {
            street: "6373 Everett Alley",
            city: "Reno",
            state: "Nevada",
            owner: await Person.findOne({first_name: "Linette"})
          }, {
            street: "1515 Colorado Point",
            city: "Orlando",
            state: "Florida",
            owner: await Person.findOne({first_name: "Murial"})
          }, {
            street: "49939 Rutledge Center",
            city: "Tucson",
            state: "Arizona",
            owner: await Person.findOne({first_name: "Tedie"})
          }
  ]

    await Home.insertMany(homes);
    console.log('Inserted Homes');
}

const run = async () => {
    await main();
    db.close();
}

run()
