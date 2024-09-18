import React, { useState, useSelector } from "react";
import Itinerary from "./Itinerary.jsx";
import ItineraryForm from "./ItineraryForm.jsx";

const Main = (props) => {
  //define state here
  const [trips, setTrip] = useState([]);
  const [tripCount, setcount] = useState(0);

  function createItinerary(Itinerary) {
    fetch("/api/itineraries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Itinerary),
    })
      .then((response) => response.json())
      .then((response) => setTrip([...trips, response]));
  }

  return (
    <div className="mainpage">
      <Itinerary />
      <ItineraryForm
        addNewTrip={createItinerary}
        addCount={()=>setcount(tripCount + 1)}
      />
      <h3 className="count">Itineraries: {tripCount}</h3>
    </div>
  );
};

export default Main;
