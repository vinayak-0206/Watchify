const mongoose = require('mongoose');
var dotenv = require('dotenv')

dotenv.config();
const mongoURI = process.env.MONGODB_URI;

async function connectToMongo(){
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }
  
module.exports = connectToMongo;