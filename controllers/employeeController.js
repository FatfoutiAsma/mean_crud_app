const router = require('express').Router();
var { Employee } = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;

// router to read employees list from db -- localhost:3000/employees/
router.get('/',(req,res)=>{
  Employee.find((err,docs)=>{
    if(!err){
      res.send(docs);
    }
    else {
      console.log('Error in retreiving employees'+ JSON.Stringify(err,undefined,2));
    }
  });
});

// router to read employees by id from db -- localhost:3000/employees/id
router.get('/:id', (req,res)=>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
    Employee.findById(req.params.id,(err,docs)=>{
      if(!err){
        res.send(docs);
      }
      else {
        console.log('Error in retreiving employees'+ JSON.Stringify(err,undefined,2));
      }
    });
});

// router to add employee to the employees list in db -- localhost:3000/employees/
router.post('/',(req,res)=>{
  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  }).save((err,doc)=>{
    if(!err){
      res.send(doc);
    }
    else {
      console.log('Error in employee save'+ JSON.Stringify(err,undefined,2));
    }
  });
});


// router to update employee by id in db -- localhost:3000/employees/id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// router to remove employee by id from db -- localhost:3000/employees/id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
