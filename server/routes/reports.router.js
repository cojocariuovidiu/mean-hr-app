const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employeeSchemaModule = require('../modules/schema.module');

let employeeSchema = employeeSchemaModule;


module.exports = router;