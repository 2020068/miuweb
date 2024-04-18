import React from 'react';
import Header from '@/components/header';
 

const ApplyPage = () => {
  return (
    <div className="apply-container">
      <Header />
      <div className="apply-header">
        <h1 className="apply-heading">APPLY TO MIU</h1>
      </div>
      <div className="apply-form">
        {/* Undergraduate form */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="phone" id="phone" name="phone" placeholder="Enter your phone number" />
        </div>
        {/* Add more form fields for undergraduate application */}
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default ApplyPage;
