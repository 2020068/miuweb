import React from 'react';

const BackgroundPage = () => {
  return (
    <div className="background-page">
      <div className="text-container">
          
      
        </div>
      <div className="button-frame">
        
        <div className="buttons-container">
        <a href="/apply" className="submit-btn">Undergraduate Application Form</a>
          
        </div>
      </div>
     
      {/* Other content goes here */}
      <style jsx>{`
        .background-page {
          background-image: url('/image4.jpg');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          color: white;
          text-align: center;
          position: relative;
          padding-top: 50px;
        }
        .button-frame {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform:  translateX(-50%);     
          display: flex;
          flex-direction: row;
          justify-content: right;
          align-items: right;
          width: 100%;
          border-radius: 20px;
          padding: 8px;
          background: linear-gradient(45deg, #2e5eaa, #2196f3);
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .text-container {
          margin-right: 40;
          margin-top: 10px;  
          text-align: left;
          justify-content: left;

          align-items: left;
          font-size: 2.4rem;
        }
        .buttons-container {
          margin-top: 20px;
          margin-right: 40px;
          
        }
        .submit-btn {
          margin: 10px 0; /* Adjust vertical spacing between buttons */
          padding: 15px 30px; /* Adjust button padding */
          font-size: 1.2rem; /* Adjust button font size */
          background-color: #ffffff;
          color: #333333;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        .submit-btn:hover {
          background-color: #cccccc;
        }
        h1 {
          font-size: 3rem;
        }
      `}</style>
    </div>
  );
};

export default BackgroundPage;
