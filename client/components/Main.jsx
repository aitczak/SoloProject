import React, { useState, useSelector } from "react";
import Itinerary from "./Itinerary.jsx";
import ItineraryForm from "./ItineraryForm.jsx";

const Main = (props) => {
  //define state here
  const [trips, setTrip] = useState([]);
  const [tripCount, setcount] = useState(0);

  function createItinerary(Itinerary) {
    fetch("localhost:3000/api/itineraries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Itinerary),
    })
      .then((response) => response.json())
      .then((response) => console.log('created'))
    //   setTrip([...trips, response]));
  }

  function handleclick(){
  console.log('hello click')
    fetch('http://localhost:3000/api/itineraries')
    .then(response => response.json)
    .then(response => console.log(response))
    //  addtoPage(response))
    .catch(error=>{console.log(`error occurred while retrieving itineraries `)})
  }

//   function addtoPage(data){
//     const display=[];
//     data
//   }

  return (
    <div className="mainpage">
      <Itinerary getItineraries={handleclick} />
      <ItineraryForm
        addNewTrip={createItinerary}
        addCount={()=>setcount(tripCount + 1)}
      />
      <h3 className="count">Itineraries: {tripCount}</h3>
    </div>
  );
};

export default Main;
