const express = require('express');
const app = express();
const path = require('path');
const { default: Itinerary } = require('../client/components/Itinerary');
const ItineraryController = require('./Controllers/ItineraryController');
const port = 3000;

//define all routes here and send back to client side on res . locals 
//error handlers

app.get('/api/itineraries', (req,res)=>{
    return res.status(200).json(res.locals.Itineraries);
})



app.post('/api/itineraries', ItineraryController.createNew, (req,res)=>{
    return res.status(200).send('Itinerary successfully added')
    //newtrip will be an object
})

app.update('/api/itineraries', ItineraryController.updateOne, (req,res)=>{
    return res.status(200).json(res.locals.updatedTrip)
})

app.delete('/api/itineraries', ItineraryController.deleteOne, (req,res)=>{
    return res.status(200).send("Itinerary successfully deleted");
})

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




app.listen(port);


module.exports = app;