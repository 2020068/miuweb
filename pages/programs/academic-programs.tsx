import React from 'react';
import styles from './Ac.module.css'
import Menu from '@/components/menu';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useRouter } from "next/router";
const academicProgramPage: React.FC = () => {
  const router = useRouter();
  const navigateToUsProgram = () => {
      router.push("Usprograms");
  }
  const navigateToTpTprogram = () => {
    router.push("TpTprogram");
  }
  return (
    <div className={styles.container}>
      <div className={styles.menu}><Menu/></div>
      <div className={styles.backgroundImg}></div>
      
      <div className={styles.logoContainer}>
      <a href="/">
      <Image src="/logos/MIU.png" alt="MIU logo" width={45} height={45} />
      </a>
      </div>
      <div className={styles.box}>
        <h1>Mongolian International University</h1>
      </div>
      <div className={styles.box1}>
         <h3>Academic Programs</h3> 
        <h2><br/>Our academic programs support creative practitioners who strive for a world that’s brighter, more inclusive, relentlessly innovative, and ecologically resilient.</h2>
      </div>
      <div className={styles.programImg}>
      </div>
      <div className={styles.Exboxes}>
        <div className={styles.Exbox1}>
          Exchange Student Program
          <div className={styles.ExText1}>“Undergraduate students have the chance to study abroad as an exchange student at several prestigious universities in the Republic of Korea. Our partnering universities range from public and private universities and depending on the partnering universities, students enjoy various scholarships and additional benefits. Students are eligible to study abroad during the Spring and Fall semesters of their Sophomore and Junior year, or the Fall semester of their Senior year.”
          <br /><br />
          Exchange Program Contact Emails:
          student2@miu.edu.mn / dir_student@miu.edu.mn
          </div>
          <button className={styles.viewProgram}
           onClick={navigateToUsProgram}>
            View our programs
          </button>
          <div className={styles.Eximg1}></div>
        </div>
        <div className={styles.Exbox2}>
          2+2 Program
          <button className={styles.TpTprogram}
           onClick={navigateToTpTprogram}>
            See more
          </button>
          <div className={styles.ExText2}>
            
MIU undergraduate and graduate school students have a unique opportunity to receive concurrent diplomas from MIU and from a partner university in another state; the USA or Republic of Korea. Depending on the program, students study their first or two years at MIU and then continue their studies in one of our partnering universities; for undergraduate, The State University of New York, Albany (SUNY Albany) in the US, as for graduate, Hanyang University, and Chungnam National University in the Republic of Korea.
          </div>
          <div className={styles.Eximg2}></div>
          </div>
        <div className={styles.Exbox3}>
          Vision Trip
          <div className={styles.ExText3}>

          Since 2002, the Vision Trip Program (VTP) has enabled students to travel to the United States, China, or South Korea. Every winter, MIU provides faculty-led trips for teams of students and faculty to spend two to three weeks visiting top universities, companies, museums, and attending seminars in each country. Past destinations include Silicon Valley, New York City, Beijing, Shanghai, Hong Kong, and Seoul. Through the unique Vision Trip experience, students will come to appreciate the global environment and return to MIU with a clearer vision of their future careers.

          </div>
          <div className={styles.Eximg3}></div>
          </div>
      </div>
      <div className={styles.ExText}>
          
          </div>
      <div className={styles.footer}><Footer/></div>
    </div>
  );
};

export default academicProgramPage;
