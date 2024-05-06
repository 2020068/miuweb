import React from "react";

const FacebookIcon: React.FC = () => {
  const handleFacebookLink = () => {
    window.location.href = "https://www.facebook.com/miunews2016";
  };

  return (
    <div onClick={handleFacebookLink} style={{ cursor: "pointer" }}>
      {/* Insert your Facebook icon image here */}
      <img src="facebook.png" alt="Facebook Icon" style={{ width: "50px", height: "50px" }} />
    </div>
  );
};

export default FacebookIcon;
