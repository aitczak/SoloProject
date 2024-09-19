import React, {useState, useSelector} from "react";

//gets a list of current itineraries = read 
const Itinerary = ({getItineraries})=> {




  return(
  <button onClick={getItineraries}>See Itineraries</button>
  )
}

export default Itinerary;