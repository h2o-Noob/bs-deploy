const app = require("./app");
const connectDatabase = require("./config/database");
var cloudinary = require('cloudinary');
const dotenv = require("dotenv");

dotenv.config({ path: "config/config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`server listening at http://localhost:5000`);
  connectDatabase();
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shuttindown the server due to unHandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
