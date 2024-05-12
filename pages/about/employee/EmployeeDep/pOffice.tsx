/** @format */

import React from "react";

const POFFICE = () => {
  const employees = [
    {
      name: "Bilguun EnkhAmgalan",
      description: "Director of Finance Office",
    },
    {
      name: "Sumiya Enkhchimeg",
      description: "Secretary",
    },
    {
      name: "Enkhsuren Erdenbat",
      description: "Project Manager",
    },
  ];

  return (
    <div>
      <div className="title"> PRESIDENT OFFICE </div>
      <div className="employee-list">
        {employees.map((employee, index) => (
          <div className="employee-item" key={index}>
            <div className="employee-details">
              <img
                className="employee-img"
                src={`/aboutPage/employee/pOffice/pOffice${index + 1}.jpg`}
                alt={`Profile of ${employee.name}`}
              />

              <p className="employee-name">{employee.name}</p>
              <p className="employee-description">{employee.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default POFFICE;
