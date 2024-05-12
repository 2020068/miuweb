/** @format */

import React from "react";

const Academic = () => {
  const employees = [
    {
      name: "Jung-ho park",
      description: "Dean of Academic & Student Affairs",
    },
    {
      name: "Ayanga shinebayar",
      description: "Accreditation staff",
    },
    {
      name: "Subeedei U.",
      description: "Sports Hall Manager",
    },
    {
      name: "Undrakh MUnkhbaatar",
      description: "Secretary of School of Management",
    },
    {
      name: "Khulan Nyamsuren",
      description:
        "Secretary of School of International Studies and Communication",
    },
    {
      name: "Maralgoo Myagmarsuren",
      description: "Secretary of School of Computing Science",
    },
    {
      name: "Anujin enkhbold",
      description: "Secretary of Department of Fashion Design",
    },
  ];

  return (
    <div>
      <div className="title"> ACADEMIC & STUDENT AFFAIRS</div>

      <div className="employee-list">
        {employees.map((employee, index) => (
          <div className="employee-item" key={index}>
            <div className="employee-details">
              <img
                className="employee-img"
                src={`/aboutPage/employee/Academic/Academic${index + 1}.jpg`}
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

export default Academic;
