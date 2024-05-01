/** @format */

import React from "react";
import { useRouter } from "next/router";
import Spline from "@splinetool/react-spline";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import ImageCarousel from "@/components/homeImageCarousel";
import Banner from "@/components/banner";

// const OPTIONS: EmblaOptionsType = {};
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HomePage = () => {
  const router = useRouter();

  const splineSceneUrl =
    "https://prod.spline.design/qpIF81C6VzcDoC5C/scene.splinecode";

  const imageUrls = [
    "/collage_photos/main.jpg",
    "/collage_photos/image2.jpg",
    "/collage_photos/image3.jpg",
    "/collage_photos/image4.jpg",
    "/collage_photos/image5.jpg",
  ];
  return (
    <div className="bg-white min-h-screen">
      <div className="splinescene relative ">
        <ImageCarousel images={imageUrls} interval={5000} />

        <Spline className="relative z-1 w-64 h-full" scene={splineSceneUrl} />
      </div>
      <Banner />
      <div className="flex justify-around bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-700 rounded-full text-white text-center m-3 xl:m-9">
          <span className="text-5xl md:text-[50px] xl:text-[100px]">34%</span>
          <span className="xl:text-3xl text-md">International Students</span>
        </div>
        <div className="flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-600 rounded-full text-white text-center m-3 xl:m-9">
          <span className="text-5xl md:text-[50px] xl:text-[100px]">1:7</span>
          <span className="xl:text-3xl">Faculty to Student Ratio</span>
        </div>
        <div className="flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-500 rounded-full text-white text-center m-3 xl:m-9">
          <span className="text-5xl md:text-[50px] xl:text-[100px]">74+</span>
          <span className="xl:text-2xl">Student Nationalities & Nations</span>
        </div>
      </div>

      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
    </div>
  );
};

export default HomePage;
