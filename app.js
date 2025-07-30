const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const app = express();
const mongoURI = process.env.Mongo_URI;
const PORT = process.env.PORT;
const userRoute = require("./routers/User");
const userLogin = require('./routers/UserLogin')

mongoose.connect(mongoURI).then(()=>console.log("MongoDB Connected"));



app.use(express.json());

app.use("/user", userRoute);
app.use('/user',userLogin)



app.listen(PORT, () => {
  console.log(`server Started at http://localhost:${PORT}`);
});
