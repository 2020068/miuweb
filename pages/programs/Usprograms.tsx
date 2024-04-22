import React from "react";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import styles from "./Us.module.css"
import Image from "next/image";
const UsPrograms: React.FC = () => {

    return(
        
        <div className={styles.container}>
            <div className={styles.backgroundImg}></div>
            <div className={styles.logoContainer}>
            <Image src='/images/MIU.png' alt="MIU logo" width={45} height={45}/>
            </div>
            <div className={styles.menu}>
                <Menu/>
            </div>
            <div className={styles.box}>
                <h1>Mongolian International Univirsity</h1>
            </div>
            <div className={styles.box1}>
                Departments 
                </div>
            <div className={styles.programBox1}>
                School of Management
                <div className={styles.PgText1}>
                    <div className={styles.IM}>
                        Department of International Management(IM)
                        </div>
                    <div className={styles.MIM}>
                    Master In International Management(MIM)
                    </div>
                    <div className={styles.HTM}>
                    Department of Hotel & Tourism Management(HTM)
                    </div>
                </div>
                </div>
            <div className={styles.programBox2}>
                School of Computer Science
                <div className={styles.PgText2}>
                    <div className={styles.CS}>
                        Department of Computer Science(CS)
                        </div>
                    <div className={styles.SE}>
                        Department of Software Engineering(SE)
                        </div>
                    <div className={styles.MSE}>
                        Master In Software Engineering(MSE)
                        </div>
            
                </div>
                </div>
                <div className={styles.programBox3}>
                School of International Studies and Communication
                <div className={styles.PgText3}>
                    <div className={styles.IR}>
                        Department of International Relations(IR)
                        </div>
                    <div className={styles.MC}>
                        Department of Media and Comunication(MC)
                        </div>
                    <div className={styles.MPA}>
                        Master In Public Administration (MPA)
                        </div>        
                </div>
                </div>
            <div className={styles.programBox4}>
                Department of  Education
                <div className={styles.PgText4}>
                    <div className={styles.EE}>
                    Department of English Education(EE)
                        </div>
                    <div className={styles.ME}>
                    Department of Music Education(ME)
                        </div>
                    <div className={styles.FLE}>
                    Master In Foreign Language Education (FLE)
                        </div>
            
                </div>
                </div>
            <div className={styles.programBox5}>
                other Programs
                <div className={styles.PgText5}>
                    <div className={styles.FD}>
                        Department of Fashion Design(FD)
                        </div>      
                </div>
                </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
        
    );
};
export default UsPrograms;