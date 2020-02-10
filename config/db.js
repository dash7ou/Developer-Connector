const mongoose = require("mongoose");
const config = require("config");


const DBURL = config.get("mongooseURL");

// connect database
const connectDB = async ()=>{
    try{
        await mongoose.connect(DBURL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`connect to database port: 27017`)
    }catch(err){
        console.log(`there are problem to connect with database`);
        process.exit(0);
    }
}

module.exports =  connectDB;