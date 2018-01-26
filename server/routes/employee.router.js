const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employeeSchemaModule = require('../modules/schema.module');

let employeeSchema = employeeSchemaModule;
    


// GET route
router.get('/', (req, res) => {
    Employee.find({}, (error, foundEmployees) => {
        if(error) {
            console.log('error on find:', error);
            res.sendStatus(500);
        } else {
            console.log('found employee documents', foundEmployees);
            res.send(foundEmployees);
        }
    })
});


// POST route   
router.post('/', (req, res) => {
    console.log('req.body- data to save:', req.body);
    
    // create an instance of our model, as an a mongoose object
    let employeeToAdd = new Employee(req.body);

    // create a new document in our database and collection
    employeeToAdd.save((error, savedEmployee) => {
        if(error) {
            console.log('error on save:', error);
            res.sendStatus(500);
        } else {
            console.log('new employee document', savedEmployee);
            res.sendStatus(201);
        }
    });
});



module.exports = router;