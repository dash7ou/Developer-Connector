const express = require("express");
const app = express();
const  DBConnect = require("./config/db");

// import route
const users = require("./routes/users");
const profile = require("./routes/profile");
const auth = require("./routes/auth");
const posts = require("./routes/posts");

const PORT = process.env.PORT || 5000;

const connection = async ()=>{
  await DBConnect();
  await app.listen(PORT);  
  console.log(`Server started on port ${PORT}`)
}

connection().then(_=>{
  app.use('/api/v1/users', users);
  app.use('/api/v1/profile', profile);
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/posts', posts)
})