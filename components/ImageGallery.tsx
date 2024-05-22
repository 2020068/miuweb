import React, { useState } from "react";
import Modal from "./model";
import styles from "./ImageGallery.module.css";
import { useTranslation } from "react-i18next";

const images = [
  "/images/PRimg/PR1.jpeg",
  "/images/PRimg/PR2.jpeg",
  "/images/PRimg/PR3.jpeg",
  "/images/PRimg/PR4.jpeg",
  "/images/PRimg/PR5.jpeg",
  "/images/PRimg/PR6.jpeg",
  "/images/PRimg/PR7.jpeg",
  "/images/PRimg/PR8.jpeg",
  "/images/PRimg/PR9.jpeg",
  "/images/PRimg/PR10.jpeg",
  "/images/PRimg/PR11.jpeg",
  "/images/PRimg/PR12.jpeg",
  "/images/PRimg/PR13.jpeg",
  "/images/PRimg/PR14.jpeg",
  "/images/PRimg/PR15.jpeg",
  "/images/PRimg/PR16.jpeg",
];

const ImageGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );

  return (
    <div className={styles.imageGallery}>
      <div className={styles.sectionTitle}>{t("STRATEGIC_PLAN.subTitle")}</div>

      <div className={styles.thumbnailContainer}>
        <button className={styles.prevButton} onClick={prevImage}>
          &#9664;
        </button>
        <div
          className={styles.thumbnail}
          onClick={() => openModal(currentIndex)}
        >
          <img src={images[currentIndex]} alt="Annual Report" />
        </div>
        <button className={styles.nextButton} onClick={nextImage}>
          &#9654;
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className={styles.modalBody}>
          <button className={styles.prevButton} onClick={prevImage}>
            &#9664;
          </button>
          <img
            className={styles.modalImage}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <button className={styles.nextButton} onClick={nextImage}>
            &#9654;
          </button>
        </div>
      </Modal>

      <div className={styles.thumbnailInfo}>
        {currentIndex + 1} / {images.length}
      </div>
      <div className={styles.thumbnails}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className={currentIndex === index ? styles.activeThumbnail : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
