import React from "react";

const StallDetails = () => {
  const stalls = [
    {
      id: 1,
      name: "Spicy Bites",
      items: ["Biryani", "Paneer Tikka", "Dosa"],
      owner: "Rahul Sharma",
      orders: 120,
      bookings: 30,
      formLink: "https://forms.gle/DEB6k31ruPimnH1WA",
      cuisine: "North Indian",
      priceRange: "₹150 - ₹300",
      popularItem: "Chicken Biryani",
      description: "Known for its flavorful biryanis and spicy curries.",
      color: "#FF6B6B",
    },
    {
      id: 2,
      name: "Sweet Treats",
      items: ["Gulab Jamun", "Rasgulla", "Ice Cream"],
      owner: "Meera Patel",
      orders: 95,
      bookings: 22,
      formLink: "https://forms.gle/ZmKYL2bbNc2Vvx7v7",
      cuisine: "Desserts",
      priceRange: "₹50 - ₹150",
      popularItem: "Gulab Jamun",
      description: "Offers a variety of traditional Indian sweets and desserts.",
      color: "#FFD93D",
    },
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    background: "#f5f5f5",
  };

  const widgetStyle = (color) => ({
    background: `linear-gradient(135deg, ${color}, #fff)`,
    borderRadius: "15px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    margin: "15px",
    padding: "20px",
    width: "320px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  });

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  };

  const itemStyle = {
    color: "#555",
    marginBottom: "8px",
    fontSize: "15px",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 20px",
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.3s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const handleOrderClick = (link) => {
    window.location.href = link;
  };

  return (
    <div style={containerStyle}>
      <h2
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "30px",
          color: "#333",
          fontSize: "28px",
          fontWeight: "600",
        }}
      >
        🌈 Stall Details
      </h2>
      {stalls.map((stall) => (
        <div
          key={stall.id}
          style={widgetStyle(stall.color)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h3 style={titleStyle}>{stall.name}</h3>
          <p style={itemStyle}>
            <strong>Owner:</strong> {stall.owner}
          </p>
          <p style={itemStyle}>
            <strong>Cuisine:</strong> {stall.cuisine}
          </p>
          <p style={itemStyle}>
            <strong>Price Range:</strong> {stall.priceRange}
          </p>
          <p style={itemStyle}>
            <strong>Popular Item:</strong> {stall.popularItem}
          </p>
          <p style={itemStyle}>
            <strong>Items:</strong> {stall.items.join(", ")}
          </p>
          <p style={itemStyle}>
            <strong>Description:</strong> {stall.description}
          </p>
          <p style={itemStyle}>
            <strong>Available Orders:</strong> {stall.orders}
          </p>
          <p style={itemStyle}>
            <strong>Bookings:</strong> {stall.bookings}
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
            onClick={() => handleOrderClick(stall.formLink)}
          >
            🚀 Order Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default StallDetails;
