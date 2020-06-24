const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const path = require('path');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googleBook", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
