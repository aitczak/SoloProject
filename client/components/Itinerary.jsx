import React, {useState, useSelector} from "react";

//gets a list of current itineraries = read 
const Itinerary = ({getItineraries})=> {




  return(
    <>
  <button className='seeIt' onClick={getItineraries}>See Itineraries</button>
  <div id ="forList"></div>
  </>
  )
}

export default Itinerary;