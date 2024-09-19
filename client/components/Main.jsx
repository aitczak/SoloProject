import React, { useState, useSelector } from "react";
import Itinerary from "./Itinerary.jsx";
import ItineraryForm from "./ItineraryForm.jsx";

const Main = (props) => {
  //define state here
  const [trips, setTrip] = useState([]);
  const [tripCount, setcount] = useState(0);

  function createItinerary(Itinerary) {
    fetch("api/itineraries", {
      method: "POST",
      // mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Itinerary),
    })
      .then((response) => response.json())
      .then((response) => console.log('created'))
    //   setTrip([...trips, response]));
  }

  function handleclick(){
  console.log('hello click')
    fetch('/api/itineraries')
    .then(response => {
      if (!response.ok){
        throw new Error('response was not ok')
      }
      response.json()
    } )
    .then(data => console.log(data))
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
