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
  app.get("*", (req,res) => {
    app.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds149844.mlab.com:49844/heroku_2n4052fs", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
