const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employeeSchemaModule = require('../modules/schema.module');



let employeeSchema = employeeSchemaModule;
let Employee = mongoose.model('Employee', employeeSchema);
    
// Deleting Employee by ID from table
router.delete('/:id', (req, res) => {
    let employeeId = req.params.id;
    Employee.findByIdAndRemove(
        {'_id': employeeId},
        (error, removedDocument) => {
            if(error) {
                console.log('error on delete', error);
                res.sendStatus(500);
            } else {
                console.log('document has been removed', removedDocument);
                res.sendStatus(201);
            }
        });
});

// update Employee Info
router.put('/:id', (req, res) => {
    let employeeId = req.params.id;
    let employeeToUpdate = req.body;
    Employee.findByIdAndUpdate(
            {'_id': employeeId},
            {$set: employeeToUpdate},
            (error, updatedEmployee) => {
                if(error){
                    console.log('error on employee update', error);
                    res.sendStatus(500);
                } else {
                    console.log('updated Employee', updatedEmployee);
                    res.sendStatus(200);
                }
            }
    )
})

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