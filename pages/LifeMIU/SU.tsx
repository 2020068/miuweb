import React from "react";
import ImageCarousel from "@/components/imageCarousel";
import styles from "./Life.module.css"
import Image from "next/image";
import Link from "next/link";
const SUPage: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.backgroundImg}>
            <ImageCarousel
                textContent={ <div> Student Union <br /><br /></div>}
                textdesc="The Student Union of the Mongolia International University is the association of a student-run group that dedicated its time and resources to give the student community of the university, fairness, opportunities, and a voice."
                image={"/LifePage/SU/SUbg.jpg"}
                />
            </div>
            <div className={styles.VisMis}>
                Vision & Mission Statement
                <Image src="/LifePage/SU/VisMis.jpg" alt="Vision & Mission Statement" width={900} height={0}/>
            </div>
            <div className={styles.SUrule}>
                <Image src="/LifePage/SU/rule1.jpg" alt="rule1" width={450} height={0} />
                <Image src="/LifePage/SU/rule2.jpg" alt="rule2" width={450} height={0} />
            </div>
            
        </div>
        
    );
};

export default SUPage;