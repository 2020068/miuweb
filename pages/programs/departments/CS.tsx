import React, { useEffect, useRef } from "react";
import styles from "./department.module.css"
import Image from "next/image";
import ImageCarousel from "@/components/imageCarousel";


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


    return(
        <div className={styles.container}>
            <div className={styles.backgroundImg}>
            <ImageCarousel
                textContent="Computer Science"
                textdesc=""
                image={"/images/programImg/departmentImg/CSbackgroundImg.jpg"}
                />
            </div>
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                Computer Science (CS) major at MIU offers opportunities to explore the science of information processing. 
                 Particular interest is placed on making computation fast and efficient. 
                CS focuses on the core theories of computing as well as hands-on learning and practical work experiences.
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Year 1 / Students are introduced to:</a>
                <div className={styles.h1}>
                 ● Foundation of basic coding <br />
                 ● Foundation in mathematics and physics<br /> 
                 ● Teamwork skills <br />
                </div>
                <a className={styles.a}>
                Year 2 / Students develop skills in:
                </a>
                <div className={styles.h2}>
                ● Computer science theories, methods and practices <br />
                ● Understanding a range of programming languages such as Java, C, C++, Javascript and SQL <br />
                ● Understanding of computer software, tools and design <br />
                ● Problem-solving and analytical skills 
                </div>
                <a className={styles.a}>
                Year 3 / Students gain knowledge in:
                </a>
                <div className={styles.h3}>
                ● Mobile application programming <br />
                ● Multimedia Programming <br />
                ● Computer Security<br />
                </div>
                <a className={styles.a}>
                Year 4 / Students move into:
                </a>
                <div className={styles.h4}>
                ● Advanced programming skills <br />
                ● Cloud Computing<br />
                ● Robotics<br />
                ● Artificial Intelligence<br />
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
            <div ref={alumniRef} className={`${styles.alumni}`}>
               
               <h1 className={styles.alumniText}>
               <span className={styles.textsize3}>Alumni</span> 
                <span className={styles.textsize1}><br /> Bilegt Gantulga</span> <br /><br /><br /><br />
                <span className={styles.textsize2}>Works at Khaan bank</span>  <br /><br /><br /><br />
                "I’m glad that I learned the basics of information technology in English.
                It has given me the opportunity to grow more than I could have imagined in the field in just a short period of time."</h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/CSalumni.jpeg" alt="CSalumni" width={550} height={550} />
                </div>
                </div>
                

           
        </div>
        
    );
};
export default CsPage;