/** @format */

import React from "react";

interface EmployeeType {
  // Define properties for EmployeeType here if needed
}

type PropType = {
  slides: number[];
  options?: EmployeeType;
};

const Planning: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const employees = [
    {
      name: "DEAN",
      description: "Dean of Planning Affairs",
    },
    {
      name: "Selenge Jamiyandorj",
      description: "Human Resource Manager",
    },
    {
      name: "Ichinkhorloo Losol",
      description: "Lawyer",
    },
    {
      name: "Abigail jacobovsky",
      description: "International Recruiting Staff & Dorm Manager ",
    },
    {
      name: "UyanGa. D ",
      description: "Cashier",
    },
    {
      name: "Ruvim Andryechenko",
      description: "Director of Information Communication Center",
    },
    {
      name: "Purvee Dashbaljir",
      description: "Software Engineer of Information Communication Center",
    },
    {
      name: "Daniel Andreychenko",
      description: "Software Developer of Information Communication Center",
    },
  ];

  return (
    <div>
      <div className='title'> PLANNING AFFAIRS</div>
      <div className='employee-list'>
        {employees.map((employee, index) => (
          <div className='employee-item' key={index}>
            <div className='employee-details'>
              <img
                className='employee-img'
                src={`/aboutPage/employee/planning/planning${index + 1}.jpg`}
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

export default Planning;
