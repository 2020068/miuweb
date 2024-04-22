import React from 'react';
import Header from '@/components/header';


const ApplyPage = () => {
  return (
    <div>
      <Header />
      <div className="apply-container">
        <div className="apply-header"></div>
        <div className="apply-form">
          {/* Undergraduate form */}
          <div className="form-group">
  <div className="input-group">
    <label htmlFor="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
  </div>
  <div className="input-group">
    <label htmlFor="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
  </div>
</div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="phone" id="phone" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="registrationNo">Registration No.:</label>
            <input type="text" id="registrationNo" name="registrationNo" placeholder="Enter your registration number" />
          </div>
          <div className="form-group">
            <label htmlFor="programFirstChoice">Program of Study (1st choice):</label>
            <select id="programFirstChoice" name="programFirstChoice">
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business Administration">Business Administration</option>
              {/* Add more options as needed */}
            </select>
            <label htmlFor="programSecondChoice">Program of Study (2nd choice):</label>
            <select id="programSecondChoice" name="programSecondChoice">
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business Administration">Business Administration</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* Add more form fields for undergraduate application */}
          <button className="submit-btn">Submit</button>
        </div>
        <div className="form-group">
  <label htmlFor="degreeType">Degree Type:</label>
  <div className="button-group">
    <button className="degree-btn" value="undergraduate">Undergraduate</button>
    <button className="degree-btn" value="masters">Master's degree</button>
    <button className="degree-btn" value="LEI">LEI</button>
  </div>
</div>


      </div>
    </div>
  );
};

export default ApplyPage;
