import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    orderDetails: "",
  });

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order submitted successfully!");
    navigate("/stalls");  // Redirect back to stall details after submission
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formStyle = {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2980b9",
  };

  return (
    <div style={formStyle}>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <textarea
          style={inputStyle}
          name="orderDetails"
          placeholder="Order Details"
          value={formData.orderDetails}
          onChange={handleChange}
          required
        />
        <button
          style={buttonStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
