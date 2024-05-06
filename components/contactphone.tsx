import React, { useState } from "react";

const TelephoneIcon: React.FC = () => {
  const [showNumber, setShowNumber] = useState(false);
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleCall = () => {
    if (isMobile) {
      window.location.href = "tel:+97670007447"; // Initiates a phone call
    } else {
      setShowNumber(!showNumber); // Toggle the visibility of the phone number
    }
  };

  return (
    <div onClick={handleCall} style={{ width: "50px", height: "50px", position: "relative", cursor: "pointer" }}>
      <img src="telephone.png" alt="Telephone Icon" style={{ width: "100%", height: "100%" }} />
      {showNumber && (
        <div style={{ 
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
          padding: "5px 10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        }}>
          <span style={{ color: "#333333", fontSize: "14px" }}>+976 7000-7447</span>
        </div>
      )}
    </div>
  );
};

export default TelephoneIcon;
