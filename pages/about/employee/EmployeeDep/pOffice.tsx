/** @format */

import React from "react";
import Header from "@/components/header";

interface EmployeeType {
  // Define properties for EmployeeType here if needed
}

type PropType = {
  slides: number[];
  options?: EmployeeType;
};

const POFFICE: React.FC<PropType> = (props) => {
  const { slides, options } = props;
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
      <div className='title'> PRESIDENT OFFICE </div>
      <div className='employee-list'>
        {employees.map((employee, index) => (
          <div className='employee-item' key={index}>
            <div className='employee-details'>
              <img
                className='employee-img'
                src={`/aboutPage/employee/pOffice/pOffice${index + 1}.jpg`}
                alt={`Profile of ${employee.name}`}
              />

              <p className='employee-name'>{employee.name}</p>
              <p className='employee-description'>{employee.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default POFFICE;
