import React from "react";
import styles from "./Ac.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
const academicProgramPage: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const navigateToUsProgram = () => {
    router.push("Usprograms");
  };
  const navigateToTpTprogram = () => {
    router.push("TpTprogram");
  };
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg}></div>
      <div className={styles.box1}>
        <h3>{t("academic.box1.programs")}</h3>

      </div>
      <div className={styles.programImg}></div>
      <div className={styles.Exboxes}>
        <div className={styles.Exbox1}>
          {t("academic.exchange.program")}
          <div className={styles.ExText1}>
            “{t("academic.exchange.programText1")}”
            <br />
            <br />
            {t("academic.exchange.programText2")}
          </div>
          <button className={styles.viewProgram} onClick={navigateToUsProgram}>
          {t("academic.viewProgram")}
          </button>
          <div className={styles.Eximg1}></div>
        </div>
        <div className={styles.Exbox2}>
        {t("academic.2+2program")}
          <button className={styles.TpTprogram} onClick={navigateToTpTprogram}>
          {t("academic.2+2programBtn")}
          </button>
          <div className={styles.ExText2}>
          {t("academic.2+2programtext")}
          </div>
          <div className={styles.Eximg2}></div>
        </div>
        <div className={styles.Exbox3}>
        {t("academic.visiontrip")}
          <div className={styles.ExText3}>
          {t("academic.visiontripText")}
          </div>
          <div className={styles.Eximg3}></div>
        </div>
      </div>
      <div className={styles.ExText}></div>
    </div>
  );
};

export default academicProgramPage;
