const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:DsKPz9v36OHH8bdM@SG-todo-27224.servers.mongodirector.com:27017/admin', (err)=>{
  if(!err){
    console.log('MongoDB Connection succeeded');
  }
  else {
    console.log('Error in DB connection'+ JSON.Stringify(err,undefined,2));
  }
});

module.exports = mongoose;
