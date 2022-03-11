const Person = require('../models/person');
const Car = require('../models/car');
const Home = require('../models/home');
const Employer = require('../models/employer');

const createPerson = async(req, res) => {
    try{
        const persons = await new Person(req.body);
        await persons.save()
        return res.status(201).json({persons});
    } catch(error){
        return res.status(500).json({error: error.message})
    }
}

const createCar = async(req, res) => {
    try{
        const cars = await new Car(req.body);
        await cars.save();
        return res.status(201).json({cars});
    } catch(error){
        return res.status(500).json({error: error.message})
    }
}

const createHome = async(req, res) => {
    try{
        const home = await new Home(req.body);
        await home.save();
        return res.status(201).json({home});
    } catch(error){
        return res.status(500).json({error: error.message})
    }
}

const createEmployer = async(req, res) => {
    try{
        const employers = await new Employer(req.body);
        await employers.save();
        return res.status(201).json({employers});
    } catch(error){
        return res.status(500).json({error: error.message})
    }
}

const getPeople = async(req, res) => {
    try{
        const persons = await Person.find().populate('employer');
        return res.status(200).json({persons})
    } catch(error){
        return res.status(404).send(error.message)
    }
}

const getCar = async(req, res) => {
    try{
        const cars = await Car.find().populate('owner');
        return res.status(200).json({cars})
    } catch(error){
        return res.status(404).send(error.message)
    }
}

const getHome = async(req, res) => {
    try{
        const home = await Home.find().populate('owner');
        return res.status(200).json({home})
    } catch(error){
        return res.status(404).send(error.message)
    }
}

const getEmployer = async(req, res) => {
    try{
        const employer = await Employer.find();
        return res.status(200).json({employer})
    } catch(error){
        return res.status(404).send(error.message)
    }
}

const upDatePerson = (req, res) => {
    try{
        const { id } = req.params;
        Person.findByIdAndUpdate(id, req.body, {new: true}, (err, person) => {
            if(err !== null){
                console.log(err, 'error ');
                res.status(404).send(err.message)
            } else { 
                console.log(person)
                res.json({person});
            }
        })
    } catch(error){
        return res.status(500).send(error.message)
    }

}

const upDateHome = (req, res) => {
    try{
        const { id } = req.params;
        Home.findByIdAndUpdate(id, req.body, {new: true}, (err, home) => {
            if(err !== null){
                console.log(err, 'error ');
                res.status(404).send(err.message)
            } else { 
                console.log(home)
                res.json({home});
            }
        })
    } catch(error){
        return res.status(500).send(error.message)
    }

}

const upDateEmployer = (req, res) => {
    try{
        const { id } = req.params;
        Employer.findByIdAndUpdate(id, req.body, {new: true}, (err, employer) => {
            if(err !== null){
                console.log(err, 'error when updating');
                res.status(404).send(err.message)
            } else { 
                console.log(employer)
                res.json({employer});
            }
        })
    } catch(error){
        return res.status(500).send(error.message)
    }

}

const upDateCar = (req, res) => {
    const { id } = req.params;
    Car.findByIdAndUpdate(id, req.body, {new: true}, (err, car) => {
        if(err !== null){
            console.log(err, 'error updating book');
            res.status(404).send(err.message);
        } else{
            console.log('Book updated')
            console.log(car);
            res.json({car})
        }
    })
} 

const deletePerson = async(req, res) => {
    try{
        const  { id } = req.params;
        const deleted = await Person.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send('Deleted');
        }
        throw new Error("Person Not Found")
    } catch(error){
        return res.status(500).send(error.message)
    }
} 

const deleteHome = async(req, res) => {
    try{
        const  { id } = req.params;
        const deleted = await Home.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send('Deleted');
        }
        throw new Error("Home Not found")
    } catch(error){
        return res.status(500).send(error.message)
    }
}  


const deleteCar = async(req, res) => {
    try{
        const  { id } = req.params;
        const deleted = await Car.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send('Deleted');
        }
        throw new Error("Car Not Found")
    } catch(error){
        return res.status(500).send(error.message)
    }
} 


const deleteEmployer = async(req, res) => {
    try{
        const  { id } = req.params;
        const deleted = await Employer.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send('Deleted');
        }
        throw new Error("Employer Not Found")
    } catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createPerson, 
    createHome,
    createCar,
    createEmployer,
    getPeople,
    getHome,
    getEmployer,
    getCar,
    upDatePerson,
    upDateHome,
    upDateCar,
    upDateEmployer,
    deletePerson,
    deleteHome,
    deleteCar,
    deleteEmployer
}

