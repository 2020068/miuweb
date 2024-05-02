import React, { useEffect, useRef } from "react";
import styles from "./department.module.css"
import Image from "next/image";


interface FacultyType {
    // Define properties for EmployeeType here if needed
  }
  
  type PropType = {
    slides: number[];
    options?: FacultyType;
  };

const CsPage: React.FC<PropType> = (props) => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const alumniRef = useRef<HTMLDivElement>(null);
  const facultyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (
      overviewRef.current &&
      curriculumRef.current &&
      alumniRef.current &&
      facultyRef.current
    ) {
      intersectionObserver.observe(overviewRef.current);
      intersectionObserver.observe(curriculumRef.current);
      intersectionObserver.observe(alumniRef.current);
      intersectionObserver.observe(facultyRef.current);
    }

    return () => {
      if (
        overviewRef.current &&
        curriculumRef.current &&
        alumniRef.current &&
        facultyRef.current
      ) {
        intersectionObserver.unobserve(overviewRef.current);
        intersectionObserver.unobserve(curriculumRef.current);
        intersectionObserver.unobserve(alumniRef.current);
        intersectionObserver.unobserve(facultyRef.current);
      }
    };
  }, []);

  const { slides, options } = props;
  const faculties = [
    {
      name: "Choi Hui Park",
      description: "Professor, Department Chair",
    },
    {
      name: "Seung Hun Baek",
      description: "Senior Lecturer",
    },
    {
      name: "Victor Ngu",
      description: "Professor",
    },

    {
      name: "Undrakh Munkhbaatar",
      description: "Secretary",
    },

  ];


    return(
        <div className={styles.container}>
            <div className={styles.backgroundImg}>
                <Image src="/images/programImg/departmentImg/Department-of-CS-scaled.jpeg" alt="CSpage background" layout="fill" objectFit="cover"/>
            </div>
            <div className={styles.box1}>
                Hotel & Tourism Management
            </div>
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                The Bachelor of Hotel and Tourism Management is designed to prepare you for professional 
                and managerial roles in the global tourism and hotel industries. 
                Emphasis is placed in major areas within tourism and hotel businesses.
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Skill Development</a>
                <div className={styles.h1}>
                ● Being equipped to be competent in a global business environment. <br />
                ● Being grounded in a wider range of knowledge and theories of a global business.<br />
                ● Train to make a strategic decision-making.<br />
                ● Being able to lead and work in a team.<br />
                ● Being sensitized in an ethical and socially responsible issues.<br />
                ● Being equipped with a strong communication and networking skills.<br />
                </div>
                <a className={styles.a}>
                Career Opportunity
                </a>
                <div className={styles.h2}>
                ● Middle and senior management positions across all sectors<br />
                ● Advertising and Marketing<br />
                ● Accountancy<br />
                ● Human Resources<br />
                ● Banking including Investment Banking<br />
                ● Sales and Retail<br />
                ● Management Consultancy<br />
                ● Business Journalism<br />
                ● Transport and Logistics<br />
                </div>
                
            </div>
            <div ref={facultyRef} className={`${styles.faculty}`}>
            <div className={styles.title}>Faculties</div>

            <div className={styles.facultyList}>
                {faculties.map((faculty, index) => (
                <div className={styles.facultyItem} key={index}>
                    <div className={styles.facultyDetail}>
                    <img
                        className={styles.facultyImg}
                        src={`/images/faculties/HTM/Faculty${index + 1}.jpg`}
                        alt={`Profile of ${faculty.name}`}
                    />

                <p className={styles.facultyName}>{faculty.name}</p>
                <p className={styles.facultyDescription}>{faculty.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
            <div ref={alumniRef} className={`${styles.alumni}`}>
               <h1 className={styles.alumniText}>
                <span className={styles.textsize3}>Alumni</span>
                <span className={styles.textsize1}><br />Nomindari Enkhtur</span> <br /><br />
                <span className={styles.textsize2}>M.S Candidate in Sustainability Management at Colombia University; Fulbright Awardee (2018-2020); Former CEO of the Mongolian Sustainable Finance Association; Dept. of International Business Management at MIU (2013)</span>  <br /><br /><br />
                “MIU has changed my life in many ways. 
                I truly believe that the values I learned at MIU, of responsibility, curiosity, creativity, and ethics among others, 
                have guided me through my professional and personal journey and helped me become the person I am today. 
                ​The diverse range of courses and university activities provided me with essential skills to become an effective manager in multicultural environments
                . Moreover the relationships I developed with MIU professors played a big part in widening my perspective of opportunities and realizing my fullest potential. 
                Even six years later, I always refer back to the lessons I learned and people I met at MIU. 
                I also reflect warmly on the sense of community that MIU students shared. 
                Last but not least, my English improved tremendously at MIU and that definitely gave me an edge in my career."</h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/IMalumni.jpg" alt="CSalumni" width={550} height={550} />
                </div>
                
                </div>
                

           
        </div>
        
    );
};
export default CsPage;