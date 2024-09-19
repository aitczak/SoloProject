import React, { useState, useEffect } from "react";
import Itinerary from "./Itinerary.jsx";
import ItineraryForm from "./ItineraryForm.jsx";
import TripItem from "./TripItem.jsx";

const Main = (props) => {
  //define state here
  const [trips, setTrip] = useState([]);
  const [tripCount, setcount] = useState(0);
  const [tripElements, setTripElements] = useState([]);
  const [deleted, setDelete] = useState("");

  // useEffect(() => {
  //   getItineraries();
  //   setcount(tripElements.length)
  // }, []);


  
  function createItinerary(Itinerary) {
    fetch("http://localhost:3000/api/itineraries", {
      method: "POST",
      // mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Itinerary),
    })
      .then((response) => response.json())
      .then((response) => setTrip([...trips, response]))
      .catch((error) => {
        console.log(`Error caught, ${error}`);
      });
  }

  function addToPage(data) {
    // console.log(data);
    const newArr = [];
    for (let i = 20; i < data.length; i++) {
      newArr.push(
        <TripItem
          key={data[i]._id}
          title={data[i].Title}
          destination={data[i].Destination}
          StartDate={data[i].StartDate}
          EndDate={data[i].EndDate}
          Activities={data[i].Activities}
        />
      );
    }
    setTripElements(newArr);

    console.log(newArr);
  }

  function getItineraries() {
    console.log("hello click");
    fetch("http://localhost:3000/api/itineraries")
      .then((response) => {
        // if (!response.ok){
        //   throw new Error('response was not ok')
        // }
        return response.json();
      })
      .then((data) => addToPage(data))

      .catch((error) => {
        console.log(`error occurred while retrieving itineraries `);
      });
  }

  // const itineraryItems = <TripItem/>
  const handleDelete = (e) => {
    e.preventDefault();
    const Title = deleted;
    const titletoDelete = { Title: Title };
    console.log("in handleDelete:", titletoDelete);
    fetch("http://localhost:3000/api/itineraries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(titletoDelete),
    })
      .then((result) => result.json())
      .then(data=> getItineraries(data))

      .catch((error) => {
        console.log(`error in handleDelete fetch request : ${error}`);
      });
  };

  function addCount(){
    let currentCount = tripCount;
    setcount(tripCount + 1)
  }

  return (
    <div className="mainpage">
      {/* <Nav/> */}
      <ItineraryForm
        addNewTrip={createItinerary}
        addCount={addCount}
      />
      {/* <h3 className="count">Itineraries: {tripCount}</h3> */}
      <form>
        <input
          type="text"
          onChange={(e) => setDelete(e.target.value)}
          value={deleted}
          placeholder="Itinerary title to delete"
        ></input>
        <button type="submit" onClick={handleDelete}>
          Delete Itinerary
        </button>
      </form>

      <Itinerary getItineraries={getItineraries} />
      <div className="itinList">{tripElements}</div>
    </div>
  );
};

export default Main;
