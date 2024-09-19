import React, { useState, useSelector } from "react";
import Itinerary from "./Itinerary.jsx";
import ItineraryForm from "./ItineraryForm.jsx";

const Main = (props) => {
  //define state here
  const [trips, setTrip] = useState([]);
  const [tripCount, setcount] = useState(0);

  function createItinerary(Itinerary) {
    fetch("http://localhost:3000/api/itineraries", {
      method: "POST",
      // mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Itinerary),
    })
      .then((response) => response.json())
      .then((response) => console.log("created, response: ", response))
      //   setTrip([...trips, response]));
      .catch((error) => {
        console.log(`Error caught, ${error}`);
      });
  }

  function addToPage(data) {
    console.log(data);
  }

  function handleclick() {
    console.log("hello click");
    fetch("http://localhost:3000/api/itineraries")
      .then((response) => {
        // if (!response.ok){
        //   throw new Error('response was not ok')
        // }
        return response.json();
      })
      .then((response) => addToPage(response))

      .catch((error) => {
        console.log(`error occurred while retrieving itineraries `);
      });
  }

  return (
    <div className="mainpage">
      <ItineraryForm
        addNewTrip={createItinerary}
        addCount={() => setcount(tripCount + 1)}
      />
      <h3 className="count">Itineraries: {tripCount}</h3>
      <Itinerary getItineraries={handleclick} />
    </div>
  );
};

export default Main;
