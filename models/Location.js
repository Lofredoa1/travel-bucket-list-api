// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const locationSchema = new Schema(
  {
    activity: String,
    location: String,
    img: String,
    description: String,
  },
  { timestamps: true }
);

// Create our Model Object
const Location = model("Location", locationSchema);

// Export our Model Object
module.exports = Location;