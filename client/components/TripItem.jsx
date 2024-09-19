import React from "react";

const TripItem = ({ title, destination, StartDate, EndDate, Activities }) => {
  return (
    <div className="eachTrip">
      <h4>{title}</h4>
      <h4>{destination}</h4>
      <h6>{StartDate}</h6>
      <h6>{EndDate}</h6>
      <p>{Activities}</p>
    </div>
  );
};

export default TripItem ;
