import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spline from "@splinetool/react-spline";
import HomeImageCarousel from "@/components/homeImageCarousel";
import HomePageLighting from "@/components/homePageLighting";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const router = useRouter();
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
  const colors = [
    "bg-teal-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    // Add more colors to the array
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpan(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
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

      <div className="absolute flex-col inset-0 z-30 xl:top-[-20%] md:top-[-10%] top-[45%] flex items-center text-center md:flex md:justify-center">
        <span
          className={` uppercase font-thin text-left text-[3vh] text-white  sm:text-[4vh] md:text-[6vh] xl:text-[7vh] ${
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
          className={`pt-[149%] md:pt-[60%] xl:pt-[50%] 2xl:pt-[40%] text-[15px] text-white sm:text-[10px] md:text-[15px] xl:text-[20px] ${
            showSpan
              ? "opacity-100 transition-opacity duration-1000"
              : "opacity-0"
          }`}
        >
          ///
        </span>
      </div>

      <div
        className={`absolute inset-0 z-40 flex justify-center items-center top-[30%] ${
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

      <div className="absolute inset-0 z-30 opacity-80">
        <Spline className="w-full h-full " scene={splineSceneUrl} />
      </div>
    </div>
  );
};

export default HomePage;
