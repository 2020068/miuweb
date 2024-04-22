// ApplyPage.jsx

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';


const ApplyPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(selectedFile);
    // You can use APIs like FormData or File API for further handling
  };

  return (
    <div>
      <Header />
      <div className="apply-container">
        <div className="apply-header"></div>
        <div className="apply-form">
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
            </select>
            <label htmlFor="programSecondChoice">Program of Study (2nd choice):</label>
            <select id="programSecondChoice" name="programSecondChoice">
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business Administration">Business Administration</option>
            </select>
          </div>
          <button className="submit-btn">Submit Application</button>
        </div>
        <div className="form-group">
          <label htmlFor="degreeType">Degree Level:</label>
          <div className="button-group">
            <button className="degree-btn" value="undergraduate">Undergraduate</button>
            <button className="degree-btn" value="masters">Master's degree</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">Documentation:</label>
          <button className='button-group' onClick={handleUpload}>JPG,PDF,PNG</button>
          <input type="file" id="fileUpload" name="fileUpload" onChange={handleFileChange} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyPage;
