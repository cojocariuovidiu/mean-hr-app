const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employeeSchemaModule = require('../modules/schema.module');

let employeeSchema = employeeSchemaModule;

let Employee = mongoose.model('Employee', employeeSchema);

router.get('/min', (req,res)=>{
    Employee.aggregate([
        {$group: 
            {_id: "$company", minSalary: {$min: "$salary"}}}
        ], (error, minSalary) => {
            if(error) {
                console.log('error get min salary', error);
                res.sendStatus(500);
            } else {
                console.log('found min salary: ', minSalary);
                res.send(minSalary);
            }
        })
});

router.get('/max', (req,res)=>{
    Employee.aggregate([
        {$group: 
            {_id: "$_v", minSalary: {$max: "$salary"}}}
        ], (error, maxSalary) => {
            if(error) {
                console.log('error get max salary', error);
                res.sendStatus(500);
            } else {
                console.log('found max salary: ', maxSalary);
                res.send(maxSalary);
            }
        })
});

router.get('/avg', (req,res)=>{
    Employee.aggregate([
        {$group: 
            {_id: "$_v", minSalary: {$avg: "$salary"}}}
        ], (error, avgSalary) => {
            if(error) {
                console.log('error get avg salary', error);
                res.sendStatus(500);
            } else {
                console.log('found avg salary: ', avgSalary);
                res.send(avgSalary);
            }
        })
});

router.get('/employeeCount', (req,res)=>{
    Employee.count({}, (error, employeeCount) => {
            if(error) {
                console.log('error get employee count', error);
                res.sendStatus(500);
            } else {
                console.log('found employee count: ', employeeCount);
                let numberOfEmployees = { count: employeeCount}
                res.send(numberOfEmployees);
            }
        })
});

router.get('/titles', (req,res)=>{
    Employee.find({}, (error, jobTitles) => {
        if(error) {
            console.log('error get job titles', error);
            res.sendStatus(500);
        } else {
            console.log('found job titles: ', jobTitles);
            res.send(jobTitles);
        }
    })
});



module.exports = router;