const mongoose = require('mongoose');
// const { default: Itinerary } = require('../../client/components/Itinerary');

const MONGO_URI =
  
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "soloproject",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

  const Schema = mongoose.Schema;

  const itinerarySchema = new Schema({
    Title: String,
    Destination: String,
    StartDate: Date,
    EndDate: Date,
    Activities: Text
  })

  const Itinerary = mongoose.model('Itinerary', itinerarySchema)


  module.exports ={
    Itinerary
  }