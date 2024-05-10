import React from "react";
import ImageCarousel from "@/components/imageCarousel";
import styles from "./Life.module.css"
import Image from "next/image";
import Link from "next/link";
const SAPage: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.backgroundImg}>
            <ImageCarousel
                textContent="Student Activity"
                textdesc=""
                image={"/LifePage/Lifebg.jpg"}
                />
            </div>
            <div className={styles.basketball}>
                <div>
                    basketball team
                </div>
                <Image src="/LifePage/SA/basketball.jpg" alt="" width={500} height={100}/>
                
            </div>
            <div className={styles.club}>
            <Image src="/LifePage/SA/club.jpg" alt="" width={500} height={100}/>
            </div>
            <div className={styles.sdp}>
            <Image src="/LifePage/SA/CDP.jpg" alt="" width={500} height={100}/>
            </div>
        </div>
        
    );
};

export default SAPage;