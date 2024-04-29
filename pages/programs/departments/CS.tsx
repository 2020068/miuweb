import React from "react";
import styles from "./department.module.css"
import Image from "next/image";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import Menu from "@/components/menu";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CsPage: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.backgroundImg}></div>
            
            
            <div className={styles.box1}>
                Computer Science
            </div>
            <div className={styles.overview}>
                overview
                <div className={styles.h1}>
                Computer Science (CS) major at MIU offers opportunities to explore the science of information processing. 
                 Particular interest is placed on making computation fast and efficient. 
                CS focuses on the core theories of computing as well as hands-on learning and practical work experiences.
                </div>
            </div>
            
            <div className={styles.curriculum}>
                what you'll learn <br />
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
            <div className={styles.faculty}>
                faculties

                <EmblaCarousel slides={SLIDES} options={OPTIONS} />

            </div>
            <div className={styles.alumni}>
                alumni
               <h1 className={styles.alumniText}>
                <span className={styles.textsize1}>Bilegt Gantulga</span> <br /><br />
                Works at Khaan bank <br /><br />
                I’m glad that I learned the basics of information technology in English.
                It has given me the opportunity to grow more than I could have imagined in the field in just a short period of time.</h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/CSalumni.jpeg" alt="CSalumni" width={500} height={500} />
                </div>
                </div>

           
        </div>
        
    );
};
export default CsPage;