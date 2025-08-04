const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const mongoURI = process.env.Mongo_URI;
const PORT = process.env.PORT;
const userRoute = require("./routers/User");
const userLogin = require("./routers/UserLogin");
const getDetails = require("./routers/UserDetails");
const deleteData = require("./routers/DeleteData");
const paginationRoute = require("./routers/pagination");
const UserAddress = require("./routers/UserAddress");
const deleteAddress = require("./routers/DeleteAddress");
const session = require("express-session");
const forgotPass = require("./routers/forgtet-password");
const VerifyForgotPass = require("./routers/verify-fogotPass");
const uploadRoute = require("./routers/UploadLocal");
const passport = require("passport");
require("./utils/configPassport")(passport);
// const bodyParser = require("body-parser");

mongoose.connect(mongoURI).then(() => console.log("MongoDB Connected"));
// app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialization: false,
    cookie: { maxAge: 1000 * 60 * 30 },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/uploads", express.static("uploads"));
app.use("/user", uploadRoute);

app.use("/user", userRoute);
app.use("/user", userLogin);
app.use("/user", getDetails);
app.use("/user", deleteData);
app.use("/user", paginationRoute);
app.use("/user", UserAddress);
app.use("/user", deleteAddress);
app.use("/user", forgotPass);
app.use("/user", VerifyForgotPass);

app.listen(PORT, () => {
  console.log(`server Started at http://localhost:${PORT}`);
});
