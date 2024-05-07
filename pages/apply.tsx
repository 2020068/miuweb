import React, { useState } from "react";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    registrationnumber: "",
    country: "",
    programFirstChoice: "",
    programSecondChoice: "",
    graddate: null ,
    Schoolcertificate: "",
    nohschool: "",
    hschoolname: "",
    areaofstudy: "",
    degreelevel: "",


  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Here you can add further logic for form submission
  };

  return (
    <div>
      <h1>Applicant Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-row">
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="firstName">First Name:</label>
              </div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
              />
            </div>
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="lastName">Last Name:</label>
              </div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="input-row">
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="email">Email:</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
              />
            </div>
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="phone">Phone Number:</label>
              </div>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="input-row">
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="registrationnumber">Registration №:</label>
              </div>
              <input
                type="text"
                id="registrationnumber"
                name="registrationnumber"
                value={formData.registrationnumber}
                onChange={handleInputChange}
                placeholder="Enter your registration number"
              />
            </div>
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="country">Country:</label>
              </div>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter your country"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="input-row">
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="programFirstChoice">Program of Study (1st choice):</label> {/* Added programFirstChoice label */}
              </div>
              <select
                id="programFirstChoice"
                name="programFirstChoice"
                value={formData.programFirstChoice}
                onChange={handleInputChange}
              >
                <option value="CS">Computer Science</option>
                <option value="SE">Software Engineering</option>
                <option value="IM">International Business Management</option>
                <option value="HTM">Hotel & Tourism Management</option>  
                <option value="IR">International Relations</option>
                <option value="FD">Fashion Design</option>
                <option value="EE">English Education</option>
                <option value="MC">Media & Communication</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="programSecondChoice">Program of Study (2nd choice):</label> {/* Added programSecondChoice label */}
              </div>
              <select
                id="programSecondChoice"
                name="programSecondChoice"
                value={formData.programSecondChoice}
                onChange={handleInputChange}
              >
                <option value="CS">Computer Science</option>
                <option value="SE">Software Engineering</option>
                <option value="IM">International Business Management</option>
                <option value="HTM">Hotel & Tourism Management</option>  
                <option value="IR">International Relations</option>
                <option value="FD">Fashion Design</option>
                <option value="EE">English Education</option>
                <option value="MC">Media & Communication</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>
        <h2 className="form-group">Academic Information</h2>
        <div className="form-group">
          <div className="input-row">
            <div className="input-group">
              <div className="input-label">
                <label htmlFor="satScore">Name of the High School or Equivalent:</label>
              </div>
              <input
                type="text"
                id="hschoolname"
                name="hschoolname"
                placeholder="Enter here"
                // Add necessary event handlers and state management
              />
            </div>
            <div className="input-group">
              <div className="input-label label">
              <label htmlFor="graddate">High School or Equivalent Graduation Date:</label>
              </div>
              <input
                id="graddate"
                name="graddate"
                type="date"
                placeholder="Enter date"
              />
            </div>
          </div>
        </div>
        
        <div className="input-row">
          <div className="input-group">
            <div className="input-label">
              <label>Complete secondary education certificate number:</label>
            </div>
            <input
              type="text"
              id="Schoolcertificate"
              name="Schpoolcertificate"
              placeholder="Enter certificate number"
              // Add necessary event handlers and state management
            />
          </div>
          <div className="input-group">
            <div className="input-label">
              <label>No. of High School Certificate or Equivalent:</label>
            </div>
            <input
              type="text"
              id="nohschool"
              name="nohschool"
              placeholder="Enter here"
              // Add necessary event handlers and state management
            />
          </div>
        </div>
        <h3>Education Details</h3>
        <div className="input-row">
  <div className="input-group">
    <div className="input-label">
      <label htmlFor="areaofstudy">Select Area of Study:</label>
    </div>
    <select
      id="areaofstudy"
      name="areaofstudy"
      value={formData.areaofstudy}
      onChange={handleInputChange}
    >
      <option value="BA">Business & Administration</option>
      <option value="CSAI">Computer Science & AI</option>
      <option value="ACF">Accounting & Finance</option>
      <option value="AD">Art & Design</option>  
      <option value="MM">Media Management</option>
      <option value="MAC">Media and Communication</option>
      {/* Add more options as needed */}
    </select>
  </div>
  <div className="input-group">
    <div className="input-label">
      <label htmlFor="degreelevel">Degree Level:</label>
    </div>
    <select
      id="degreelevel"
      name="degreelevel"
      value={formData.degreelevel}
      onChange={handleInputChange}
    >
      <option value="N">None</option>
      <option value="bd">Bachelor's degree</option>
      <option value="md">Master's degree</option>
      <option value="ud">UnderGraduate degree</option>  
      {/* Add more options as needed */}
    </select>
  </div>
</div>


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > 
            Submit
          </button>
      </form>
    </div>
  );
};

export default ApplyPage;
