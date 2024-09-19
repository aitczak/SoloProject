const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const path = require("path");
const ItineraryController = require("./Controllers/ItineraryController");
const PORT = 3000;
const db = require("./Models/Models.js");

//define all routes here and send back to client side on res . locals
//error handlers
app.use(cors());
app.use(express.json());

const MONGO_URI =
  "mongodb+srv://kimiz4168:OwyeCRILE7RujF1B@cluster0.ourat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
    serverApi: {version: '1', strict: true, deprecationErrors: true}
}


async function connectMongo(){
try{
await mongoose.connect(MONGO_URI, clientOptions);
await mongoose.connection.db.admin().command({ping:1});
console.log('connected to DB')
    //  {
    // options for the connect method to parse the URI
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // // sets the name of the DB that our collections are part of
    // dbName: "soloproject",
//   })
}
catch(error){
    console.log('error connecting to DB');
    process.exit(1);

}

//   .then(() => console.log("Connected to Mongo DB."))
//   .catch((err) => console.log(err));

}

app.get("/itineraries", ItineraryController.getAll, (req, res) => {
    console.log('recevied in server')
  return res.status(200).json(res.locals.Itineraries);
});





app.post("/itineraries", ItineraryController.createNew, (req, res) => {

  return res.status(200).send("Itinerary successfully added");
  //newtrip will be an object
});

app.put("/itineraries", ItineraryController.updateOne, (req, res) => {
  return res.status(200).json(res.locals.updatedTrip);
});

app.delete("/api/itineraries", ItineraryController.deleteOne, (req, res) => {
  return res.status(200).send("Itinerary successfully deleted");
});

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "error caught",
    status: 500,
    message: { err: "occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

connectMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});

module.exports = app;
