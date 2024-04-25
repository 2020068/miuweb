/** @format */

import React from "react";

interface EmployeeType {
  // Define properties for EmployeeType here if needed
}

type PropType = {
  slides: number[];
  options?: EmployeeType;
};

const Marketing: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const employees = [
    {
      name: "Jung Hye shin",
      description: "Dean of Marketing",
    },
    {
      name: "NOminzaya Sharavsambuu",
      description: "Graphic Designer",
    },
  ];

  return (
    <div>
      <div className='title'> MARKETING</div>

      <div className='employee-list'>
        {employees.map((employee, index) => (
          <div className='employee-item' key={index}>
            <div className='employee-details'>
              <img
                className='employee-img'
                src={`/images/Marketing/Marketing${index + 1}.jpg`}
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

export default Marketing;
