import React from "react";

const EmailIcon: React.FC = () => {
  const handleComposeEmail = () => {
    window.location.href = "mailto:admission@miu.edu.mn";
  };

  return (
    <div onClick={handleComposeEmail} style={{ cursor: "pointer" }}>
      {/* Insert your email icon image here */}
      <img src="email.png" alt="Email Icon" style={{ width: "50px", height: "50px" }} />
    </div>
  );
};

export default EmailIcon;
