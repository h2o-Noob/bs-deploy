const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://h2o-noob:Arindam%407743@cluster0.zxxmk.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongoose connected with server: ${data.connection.host}`);
    })
};

module.exports = connectDatabase