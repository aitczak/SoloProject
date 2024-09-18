import React, { useState, useSelector } from "react";
import Itinerary from "./Itinerary";
import ItineraryForm from "./ItineraryForm";

const Main = (props) =>{
//define state here 
const [trips, setTrip]= useState([]);


function createItinerary (Itinerary){
    fetch('/api/itineraries',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(Itinerary)
    })
    .then((response)=> response.json())
    .then(response=> setTrip([...trips, response]))
}

  return (
      <div className="mainpage">
        <Itinerary />
        <ItineraryForm addNewTrip={createItinerary}/>
      </div>
   
  );
}

export default Main;
