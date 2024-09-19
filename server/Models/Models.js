const mongoose = require("mongoose");
// const { default: Itinerary } = require('../../client/components/Itinerary');

// const Schema = mongoose.Schema;

const itinerarySchema = new mongoose.Schema({
  Title: { type: String },
  Destination: { type: String },
  StartDate: { type: String },
  EndDate: { type: String },
  Activities: { type: String },
});

const Itinerary = mongoose.model("Itineraries", itinerarySchema);

module.exports = Itinerary;
