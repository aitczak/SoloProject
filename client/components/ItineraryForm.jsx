import React, {useState} from "react";

//displays form to fill out, create new 

//addNewTrip from props from main being passed down 
const ItineraryForm = ({addNewTrip, addCount }) =>{
    const [title, setTitle] = useState('');
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [activities, setActivities] = useState("");
   

    const handleFormSubmit= async (e)=>{
        const newItinerary = {Title: title, Destination: destination, StartDate: startDate, EndDate: endDate, Activities: activities}
        console.log('newItinerary in handleFormSubmit: ', newItinerary);
        e.preventDefault();
        addCount();
        await addNewTrip(newItinerary);
    }


    return (
      <div id="form">
        <form id="newItinerary" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          ></input>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          >
          </input>
          <input type='text' 
          placeholder="Activities" 
          value={activities} 
          onChange={(e)=> setActivities(e.target.value)}
          ></input>
          <button id='submit' type="submit">Create New Itinerary</button>
        </form>
      </div>
    );

}

export default ItineraryForm;