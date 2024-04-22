import React from "react";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import styles from "./Us.module.css"
import Image from "next/image";
const UsPrograms: React.FC = () => {

    return(
        
        <div className={styles.container}>
            <div className={styles.logoContainer}>
            <Image src='/images/MIU.png' alt="MIU logo" width={45} height={45}/>
            </div>
            <div className={styles.menu}>
                <Menu/>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
        
    );
};
export default UsPrograms;