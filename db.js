const mongoose=require('mongoose');

const mongoURL='mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to mongoDB server");
})

db.on('error',()=>{
    console.log("Connection error")
})

module.exports=db;