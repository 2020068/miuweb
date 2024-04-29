/** @format */

import React from "react";
import styles from "./department.module.css"

interface FacultyType {
  // Define properties for EmployeeType here if needed
}

type PropType = {
  slides: number[];
  options?: FacultyType;
};

const Faculty: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const faculties = [
    {
      name: "Jung-ho park",
      description: "Professor",
    },
    {
      name: "Steven",
      description: "Professor",
    },
    {
      name: "James Jang",
      description: "Lecturer",
    },
    {
      name: "Dulguundusal T.",
      description: "Lecturer",
    },
    {
      name: "Dulamsuren Sharkhuu",
      description: "Asistant Professor",
    },    

  ];

  return (
    <div className={styles.faculty}>
      <div className={styles.title}>Faculties</div>

      <div className={styles.facultyList}>
        {faculties.map((faculty, index) => (
          <div className={styles.facultyItem} key={index}>
            <div className={styles.facultyDetail}>
              <img
                className={styles.facultyImg}
                src={`/images/faculties/CS/Faculty${index + 1}.jpg`}
                alt={`Profile of ${faculty.name}`}
              />

              <p className={styles.facultyName}>{faculty.name}</p>
              <p className={styles.facultyDescription}>{faculty.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
