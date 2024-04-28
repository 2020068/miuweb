/** @format */

import React from "react";
import { useRouter } from "next/router";
import Spline from "@splinetool/react-spline";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import ImageCarousel from "@/components/homeImageCarousel";
import Banner from "@/components/banner";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HomePage = () => {
  const router = useRouter();

  const splineSceneUrl =
    "https://prod.spline.design/U3W6rutlM6aNo3dy/scene.splinecode";

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

        <Spline className="relative z-1 w-64 h-64" scene={splineSceneUrl} />
      </div>
      <Banner />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default HomePage;
