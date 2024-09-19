const mongoose = require('mongoose');
// const { default: Itinerary } = require('../../client/components/Itinerary');



  const Schema = mongoose.Schema;

  const itinerarySchema = new Schema({
    Title: String,
    Destination: String,
    StartDate: Date,
    EndDate: Date,
    Activities: String
  })

  const Itinerary = mongoose.model('Itinerary', itinerarySchema)


  module.exports ={
    Itinerary
  }