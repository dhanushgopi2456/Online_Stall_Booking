import React from "react";
import BookingForm from "./BookingForm";

const StallList = ({ stalls }) => {
  return (
    <div>
      {stalls.map((stall) => (
        <div key={stall._id} className="stall-card">
          <h3>{stall.name} - {stall.location}</h3>
          <p>Price: ${stall.price}</p>
          <BookingForm stallId={stall._id} />
        </div>
      ))}
    </div>
  );
};

export default StallList;
