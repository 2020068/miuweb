import React from 'react';
import Image from 'next/image';
import Footer from '@/components/footer';
import Menu from '@/components/menu';
import TeacherSwiper from '@/components/slideshow/slideshow';
import { teachers } from '@/components/teachers';
import styles from './LEI.module.css';

const LEIPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.logoContainer}>
        <a href="/">
        <Image src="/images/MIU.png" alt="MIU logo" width={45} height={45} />
        </a>
      </div>
      <div className={styles.box}>
        <h1>Mongolian International University</h1>
      </div>
      <div className={styles.box1}>Language Education Institute</div>
      <div className={styles.backgroundImg}></div>
      <div className={styles.rectangle}>
        <div className={styles.quarter}>Speaking confidently</div>
        <div className={styles.quarter}>Reading clearly</div>
        <div className={styles.quarter}>Writing accurately</div>
        <div className={styles.quarter}>Listening easily</div>
      </div>
      <div className={styles.Introduction}>
      </div>
      <div className={styles.coursebox1}>
        English foundation Course
        <div className={styles.coursebox11}>
        Our English Foundation Course is the heart of LEI. It is a full-time, immersive English program that brings together students from multiple countries and works through activities, speaking structures, and other interactive coursework to help students improve their English conversation, listening, reading, and writing. This course is made for recent high school graduates who wish to improve their English level in order to study at MIU – an English medium university. However, this program is available to anyone who wants to improve their English level and is recommended for all beginners and intermediate level students who plan to use English to study or work.
        </div>
        </div>
      <div className={styles.coursebox2}>
        English foundation Course
        <div className={styles.coursebox22}>
        Our evening English courses are targeted at working adults who wish to continue learning or improve their English for business purposes. It is a part-time, immersive English program that takes students of all levels and works through activities, speaking structures, and other interactive coursework to help students improve their English conversation, listening, reading, and writing. This course is also recommended for high school juniors and seniors who are preparing for IELTS, TOEFL, and YESH tests.
        <br/>
● Monday – Thursday
<br/>
● 12 weeks trimester offered three times a year
<br/>
● Starter, 1, 2, 3, 4, and 5
<br/>
● Evening 6:30 – 8:15
<br/>
● American Headway
        </div>
        </div>
      <div className={styles.coursebox3}>
        Business English Course
        <div className={styles.coursebox33}>
        This course is perfect for businesses that want to improve their employee’s English level for international business and customer service. The program is customizable to the individual company’s needs with options for days, times, and levels. Companies can pay a testing fee to have their employee’s leveled, and then work with LEI office staff to organize a program with 1-2 qualified teachers who will come to the office during business hours or at a convenient time throughout the week to teach a 10 week business English course.
        </div>
        </div>
      <div className={styles.coursebox4}>
        Mongolian Course
        <div className={styles.coursebox44}>
        This program is a very flexible tutoring program to help students learn or improve their Mongolian language. For true beginners, we recommend a survival course program of 12 weeks, that covers basic elements of Mongolian such as alphabet (reading and pronunciation) and daily phrases. For students who wish to study more, we have level 1 (beginner) and level 2 (intermediate) programs to improve communication and help with day-to-day tasks. All classes are taught by native Mongolian speakers and use interactive classroom methods to get the student involved and help with memory. We encourage students to study in groups. Most classes have between 1-5 students.
        </div>
        </div>
      <div className={styles.coursebox5}>
        Additional Language Course
        <div className={styles.coursebox55}>
        LEI also offers classes in Russian and Korean languages upon request. Because of smaller classes and limited need, these classes must be requested and scheduled in advance. Classes require a minimum of 5 students to open, and the time must be arranged with the teacher.
        </div>
        </div>
      <div className={styles.teachers}>
        <TeacherSwiper teachers={teachers} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default LEIPage;
