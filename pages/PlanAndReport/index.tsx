import React from "react";
import ImageGallery from "../../components/ImageGallery";
import ImageCarousel from "@/components/imageCarousel";
import { useTranslation } from "react-i18next";
import styles from "./plan.module.css";

const PlanAndReport: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ImageCarousel
        textContent={t("PlanandReport.pageTitle")}
        textdesc={t("")}
        image={"/images/PRimg/PRMain.jpeg"}
      />

      <div className={styles.annualReportPage}>
        <ImageGallery />
      </div>
    </div>
  );
};

export default PlanAndReport;
