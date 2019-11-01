const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db');
const cors = require ('cors');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(cors({origin : "http://localhost:4200"}));
app.use(bodyParser.json());


app.listen(3000, ()=>{
  console.log('Server started at port number 3000');
});

app.use('/employees',employeeController);
