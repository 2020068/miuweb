import React from "react";
import ImageCarousel from "@/components/imageCarousel";
import styles from "./Life.module.css"
import Image from "next/image";
import Link from "next/link";
const SSPage: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.backgroundImg}>
            <ImageCarousel
                textContent="Life at MIU"
                textdesc=""
                image={"/LifePage/Lifebg.jpg"}
                />
            </div>
        </div>
        
    );
};

export default SSPage;