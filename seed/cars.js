const Car = require('../models/car');
const Person = require('../models/person');
const db = require('../db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const cars = [
      {
        make: "Porsche",
        model: "Cayenne",
        owner: await Person.findOne({first_name: "Alena"}),
        vin: "KMHTC6AD0EU083045"
      }, {
        make: "Acura",
        model: "RL",
        owner: await Person.findOne({first_name: "Bernetta"}),
        vin: "1YVHZ8BH8A5782069"
      }, {
        make: "Hyundai",
        model: "Elantra",
        owner: await Person.findOne({first_name: "Linette"}),
        vin: "WBA6A0C5XED653821"
      }, {
        make: "Pontiac",
        model: "G8",
        owner: await Person.findOne({first_name: "Murial"}),
        vin: "JM3TB2CA3E0688341"
      }, {
        make: "Toyota",
        model: "Land Cruiser",
        owner: await Person.findOne({first_name: "Tedie"}),
        vin: "1D7RW5GK3BS796959"
      }
    ];
    await Car.insertMany(cars);
    console.log('Inserted Cars')
}

const run = async() => {
    await main();
    db.close();
}

run();

