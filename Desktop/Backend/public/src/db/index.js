const mongoose = require('mongoose');
var dotenv = require('dotenv')

dotenv.config();
const mongoURI = process.env.MONGODB_URI;

connectToMongo()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log('Server is running at port:${process.env.PORT}');
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!",err);
})
  
module.exports = connectToMongo;