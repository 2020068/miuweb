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

const General: React.FC<PropType> = (props) => {
  const { t } = useTranslation();
  const { slides, options } = props;
  const employees = [
    {
      name: "Narantsetseg Sonom",
      description: "Auditor /Dean of General Affairs/",
    },
    {
      name: "Anarchuluun Oyuntulkhuur",
      description: "Purchasement Manager",
    },
  ];

  return (
    <div>
      <div className='title'>{t("about.employee.title7")}</div>

      <div className='employee-list'>
        {employees.map((employee, index) => (
          <div className='employee-item' key={index}>
            <div className='employee-details'>
              <img
                className='employee-img'
                src={`/aboutPage/employee/General/General${index + 1}.jpg`}
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

export default General;
