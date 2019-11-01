const mongoose = require('mongoose');

mongoose.connect('mongodb://<put here your username>:<put here your password>@SG-todo-27224.servers.mongodirector.com:27017/<put here your username>', (err)=>{
  if(!err){
    console.log('MongoDB Connection succeeded');
  }
  else {
    console.log('Error in DB connection'+ JSON.Stringify(err,undefined,2));
  }
});

module.exports = mongoose;
