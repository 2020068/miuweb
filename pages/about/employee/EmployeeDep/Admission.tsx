/** @format */

import React from "react";
import { useTranslation } from "react-i18next";

interface EmployeeType {
  // Define properties for EmployeeType here if needed
}

type PropType = {
  slides: number[];
  options?: EmployeeType;
};

const Admission: React.FC<PropType> = (props) => {
  const { t } = useTranslation();
  const { slides, options } = props;
  const employees = [
    {
      name: "CHANHEE LEE",
      description: "Dean of External & Admission Affairs",
    },
    {
      name: "Suvdaa Gankhuu",
      description: "Director of External Affairs",
    },
    {
      name: "Munguntuul Tsogtbayar",
      description: "Director of Admission Affairs",
    },
    {
      name: "Binderya. B",
      description: "Admission Affairs staff",
    },
    {
      name: "Ninjin. Kh",
      description: "Admission Affairs staff ",
    },
  ];

  return (
    <div>
      <div className='title'>{t("about.employee.title5")} </div>

      <div className='employee-list'>
        {employees.map((employee, index) => (
          <div className='employee-item' key={index}>
            <div className='employee-details'>
              <img
                className='employee-img'
                src={`/aboutPage/employee/Admission/Admission${index + 1}.jpg`}
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

export default Admission;
