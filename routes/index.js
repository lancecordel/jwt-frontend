const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) =>  res.send('I am the root'));
router.get('/people', controllers.getPeople);
router.get('/cars', controllers.getCar);
router.get('/homes', controllers.getHome);
router.get('/employers', controllers.getEmployer);

router.post('/people', controllers.createPerson);
router.post('/cars', controllers.createCar);
router.post('/homes', controllers.createHome);
router.post('/employers', controllers.createEmployer);

router.put('/people/:id', controllers.upDatePerson);
router.put('/cars/:id', controllers.upDateCar);
router.put('/homes/:id', controllers.upDateHome);
router.put('/employers/:id', controllers.upDateEmployer);

router.delete('/people/:id', controllers.deletePerson);
router.delete('/cars/:id', controllers.deleteCar);
router.delete('/homes/:id', controllers.deleteHome);
router.delete('/employers/:id', controllers.deleteEmployer);

module.exports = router;