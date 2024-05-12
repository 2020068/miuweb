/** @format */

import React from "react";
import Link from "next/link";
import POFFICE from "./EmployeeDep/pOffice";
import Planning from "./EmployeeDep/planning";
import Academic from "./EmployeeDep/academic";
import Marketing from "./EmployeeDep/Marketing";
import General from "./EmployeeDep/GE";
import Admission from "./EmployeeDep/Admission";
import FastRewindTwoToneIcon from "@mui/icons-material/FastRewindTwoTone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface EmployeeType {
  // Define properties for EmployeeType here if needed
}

type PropType = {
  slides: number[];
  options?: EmployeeType;
};

const Employee: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const employees = [
    {
      name: "Huh Kwon",
      description: "Vice President",
    },
    {
      name: "Oh Moon Kwon",
      description: "President",
    },
  ];

  return (
    <div>
      <div className="headerTitle">FACULTY IMFORMATION</div>
      <div className="container">
        <div className="button">
          <div className="flex flex-col items-end justify-end h-full">
            <Link href="..">
              <button className="bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-full mb-4 w-[100px]">
                <FastRewindTwoToneIcon />
              </button>
            </Link>
            <Link href="../campus/campus">
              <button className="bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-full mb-4 w-[100px]">
                <LocationOnOutlinedIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="title"> LEADERSHIP</div>

      <div className="employee-list">
        {employees.map((employee, index) => (
          <div className="employee-item" key={index}>
            <div className="employee-details">
              <img
                className="employee-img"
                src={`/aboutPage/employee/Leadership/employee${index + 1}.jpg`}
                alt={`Profile of ${employee.name}`}
              />
              <p className="employee-name">{employee.name}</p>
              <p className="employee-description">{employee.description}</p>
            </div>
          </div>
        ))}
      </div>
      <POFFICE />
      <Planning />
      <Academic />
      <Admission />
      <Marketing />
      <General />
      <div className="employeeG">
        <img
          className="employeeG-img"
          src={`/aboutPage/employee/employeeG.jpg`}
          alt={``}
        />
      </div>
    </div>
  );
};

export default Employee;
