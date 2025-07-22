import React, { useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const BookingForm = ({ stallId }) => {
  const [userId] = useState("sample-user-id"); // Replace with real user ID from authentication

  const handleBook = () => {
    axios.post("http://localhost:5000/bookings", { userId, stallId })
      .then(() => alert("Stall booked successfully!"))
      .catch((err) => alert("Booking failed: " + err));
  };

  const handlePayment = (token, amount) => {
    axios.post("http://localhost:5000/pay", { token, amount })
      .then(() => alert("Payment successful!"))
      .catch(() => alert("Payment failed!"));
  };

  return (
    <div>
      <button onClick={handleBook}>Book Stall</button>
      <StripeCheckout
        token={(token) => handlePayment(token, 50)}
        stripeKey="your-stripe-public-key"
        amount={50 * 100}
        name="Stall Booking"
      />
    </div>
  );
};

export default BookingForm;
