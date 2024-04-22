import React from "react";
import styles from "./TpTprogram.module.css"
import Image from "next/image";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
const TpTPage: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <Menu/>
            </div>
            <div className={styles.logoContainer}>
            <Image src='/images/MIU.png' alt="MIU" width={50} height={50}/>
            </div>
            <div className={styles.box}>
                <h1>Mongolian International University</h1>
            </div>
            <div>
                <Image src='/images/programImg/school.jpg' alt="MIU" width={500} height={500}/>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
        
    );
};
export default TpTPage;