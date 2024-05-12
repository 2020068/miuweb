"use client";
import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import HomeImageCarousel from "@/components/homeImageCarousel";
import HomePageLighting from "@/components/homePageLighting/HomePageLighting";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const HomePage = () => {
  const { t } = useTranslation();
  const splineSceneUrl =
    "https://prod.spline.design/aq9nu5lzr0amJAQ1/scene.splinecode";

  const imageUrls = [
    "/collage_photos/main.jpg",
    "/collage_photos/image2.jpg",
    "/collage_photos/image3.jpg",
    "/collage_photos/image4.jpg",
    "/collage_photos/image5.jpg",
  ];

  const [showSpan, setShowSpan] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpan(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleClick = () => {
    const bannerElement = document.getElementById("banner");
    if (bannerElement) {
      const scrollTo = bannerElement.offsetTop;
      const duration = 1000; // Duration of the scroll animation in milliseconds
      const start = window.pageYOffset;
      const distance = scrollTo - start;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + distance * progress);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <HomeImageCarousel images={imageUrls} interval={5000} />
      </div>
      <div className="flex absolute inset-0 z-10">
        {[...Array(4)].map((_, index) => (
          <HomePageLighting key={index} />
        ))}
      </div>

      <div className="absolute flex-col opacity-0 sm:opacity-100 inset-0 z-30 xl:top-[-20%] md:top-[-10%] top-[45%] flex items-center text-center md:flex md:justify-center">
        <span
          className={` font-thin text-left text-[3vh] text-white  sm:text-[4vh] md:text-[6vh] xl:text-[7vh] ${
            showSpan
              ? "opacity-100 transition-opacity duration-1000"
              : "opacity-0"
          }`}
        >
          {t("homepage.miu")}
        </span>
      </div>

      <div className="absolute flex flex-col h-full justify-center inset-0 z-30 text-center text-italic">
        <span
          className={`pt-[149%]  md:pt-[60%] uppercase font-thin xl:pt-[50%] 2xl:pt-[35%] lg:pt-[55%] text-[15px] text-white sm:text-[10px] md:text-[15px] xl:text-[20px] ${
            showSpan
              ? "opacity-100 transition-opacity duration-1000"
              : "opacity-0"
          }`}
        >
          {t("homepage.miu.desc")}
        </span>
      </div>

      <div
        className={`absolute inset-0 z-40 flex justify-center items-center md:top-[35%] xl:top-[30%] top-[30%] ${
          showSpan
            ? "opacity-100 transition-opacity duration-1000"
            : "opacity-0"
        }`}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/xsP01AyZt2M?si=kgyc_fYFiIq_kllD"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-white text-3xl absolute inset-0 z-50  flex justify-center items-center top-[85%]">
        <Button
          onClick={handleClick}
          style={{ color: "white", fontSize: "80px" }}
        >
          <KeyboardArrowDownIcon fontSize="inherit" />
        </Button>
      </div>
      <div className="absolute inset-0 z-30 opacity-80">
        <Spline className="w-full h-full " scene={splineSceneUrl} />
      </div>
    </div>
  );
};

export default HomePage;
