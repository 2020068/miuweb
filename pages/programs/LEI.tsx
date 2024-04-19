
import styles from './LEI.module.css'
import React from 'react';
import Image from 'next/image';


const LEIPage: React.FC = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.logoContainer}>
      <Image src="/images/MIU.png" alt='MIU logo' width={50} height={50} />
      </div>

      
      <div className={styles.box}>
        <h1>LEI</h1>
        </div>
      
      <p>This is the LEI page content.</p>
      <h2>LEI is a language school that focuses on English for daily life, education, and business communication. Students of all ages and nationalities can participate in our communicative program and learn all language skills – speaking, reading, writing, and listening. Our teachers are highly skilled and trained to use activities and speaking structures to help students engage with the language and practice with their classmates. We believe in active classrooms where students have the opportunity to engage in the language they are learning, and in combining all language skills together to increase learning and retention. We always seek to use the new methods and research in teaching foreign languages, and we keep our teachers up to date with regular training and observations.</h2>
      <h3></h3>
    </div>
  );
};

export default LEIPage;