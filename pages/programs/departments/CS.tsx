import React from "react";
import styles from "./department.module.css"
import Image from "next/image";
const CsPage: React.FC = () => {
    return(
        <div>Cs page
            <div><Image src='/images/programImg/school.jpg' alt="MIU" width={500} height={500}/>

            <div className={styles.box}>
            </div>
</div>
        </div>
        
    );
};
export default CsPage;