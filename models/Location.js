// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const locationSchema = new Schema(
  {
    activity: {type: String, required: true},
    location: {type: String, required: true},
    travelGoal: {type: String, required: true},
    description: {type: String, required: true},
    img: String,
    keyInterests:[{adventure1: String, adventure2: String, adventure3: String }] ,
    
  },
  { timestamps: true }
);

// Create our Model Object
const Location = model("Location", locationSchema);

// Export our Model Object
module.exports = Location;