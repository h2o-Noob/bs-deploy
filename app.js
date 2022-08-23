const express = require('express')
const errorMiddleware = require("./middleware/error")
const app = express();
const path = require("path")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
var cors = require('cors');

dotenv.config({ path: "config/config.env" });

app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: true }))
// report route
const reports = require("./routes/ReportRoutes")
app.use("/api", reports)

// user route
const users = require("./routes/UserRoutes")
app.use("/api", users)

// treat route
const treats = require("./routes/TreatRoutes")
app.use("/api", treats)

// payment route
const payment = require("./routes/PaymentRoutes");
app.use("/api", payment);

// error middleware

app.use(errorMiddleware)

app.use(express.static(path.join(__dirname, "../client/build")))

app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
})

module.exports = app