import { InputField, SelectField } from "@/components/inputselect";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  registrationnumber: string;
  country: string;
  programFirstChoice: string;
  programSecondChoice: string;
  graddate: Date | null;
  Schoolcertificate: string;
  nohschool: string;
  hschoolname: string;
  areaofstudy: string;
  degreelevel: string;
}

const ApplyPage: React.FC = () => {
  const programOptions = [
    { value: "CS", label: "Computer Science" },
    { value: "SE", label: "Software Engineering" },
    { value: "IM", label: "International Business Management" },
    { value: "HTM", label: "Hotel & Tourism Management" },
    { value: "IR", label: "International Relations" },
    { value: "FD", label: "Fashion Design" },
    { value: "EE", label: "English Education" },
    { value: "MC", label: "Media & Communication" },
    // Add more options as needed
  ];
  const areaOfStudyOptions = [
    { value: "BA", label: "Business & Administration" },
    { value: "CSAI", label: "Computer Science & AI" },
    { value: "ACF", label: "Accounting & Finance" },
    { value: "AD", label: "Art & Design" },
    { value: "MM", label: "Media Management" },
    { value: "MAC", label: "Media and Communication" },
    // Add more options as needed
  ];
  const degreeLevelOptions = [
    { value: "N", label: "None" },
    { value: "bd", label: "Bachelor's degree" },
    { value: "md", label: "Master's degree" },
    { value: "ud", label: "Undergraduate degree" },
    // Add more options as needed
  ];

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    registrationnumber: "",
    country: "",
    programFirstChoice: "",
    programSecondChoice: "",
    graddate: new Date(),
    Schoolcertificate: "",
    nohschool: "",
    hschoolname: "",
    areaofstudy: "",
    degreelevel: "",
  });

  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;
  const postapi =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api/forms";
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedDate = formData.graddate
      ? formData.graddate.toISOString().split("T")[0]
      : null;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const requestBody = {
        data: {
          ...formData,
          graddate: formattedDate,
        },
      };
      const response = await axios.post(postapi, requestBody, config);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Applicant Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-row">
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="input-row">
          {/* More input fields and select fields */}
          <SelectField
            label="Program of Study (1st choice)"
            name="programFirstChoice"
            value={formData.programFirstChoice}
            onChange={handleInputChange}
            options={programOptions}
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="input-row">
          <InputField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
          <InputField
            label="Registration Number"
            name="registrationnumber"
            value={formData.registrationnumber}
            onChange={handleInputChange}
            placeholder="Enter your registration number"
          />
        </div>
        <div className="input-row">
          <InputField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Enter your country"
          />
          <InputField
            label="Graduation Date"
            name="graddate"
            value={
              formData.graddate ? formData.graddate.toLocaleDateString() : ""
            }
            onChange={handleInputChange}
            placeholder="Enter your graduation date"
          />
        </div>
        <div className="input-row">
          <InputField
            label="School Certificate"
            name="Schoolcertificate"
            value={formData.Schoolcertificate}
            onChange={handleInputChange}
            placeholder="Enter your school certificate"
          />
          <InputField
            label="No High School"
            name="nohschool"
            value={formData.nohschool}
            onChange={handleInputChange}
            placeholder="Enter your no high school"
          />
        </div>{" "}
        <div className="input-row">
          <InputField
            label="High School Name"
            name="hschoolname"
            value={formData.hschoolname}
            onChange={handleInputChange}
            placeholder="Enter your high school name"
          />
          <SelectField
            label="Area of Study"
            name="areaofstudy"
            value={formData.areaofstudy}
            onChange={handleInputChange}
            options={areaOfStudyOptions}
          />
        </div>
        <div className="input-row">
          <SelectField
            label="Degree Level"
            name="degreelevel"
            value={formData.degreelevel}
            onChange={handleInputChange}
            options={degreeLevelOptions}
          />
          <SelectField
            label="Program of Study (2nd choice)"
            name="programSecondChoice"
            value={formData.programSecondChoice}
            onChange={handleInputChange}
            options={programOptions}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ApplyPage;
