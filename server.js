const express = require("express");
const app = express();
const  DBConnect = require("./config/db");

const PORT = process.env.PORT || 5000;

const connection = async ()=>{
  await DBConnect();
  await app.listen(PORT);  
  console.log(`Server started on port ${PORT}`)
}

connection()