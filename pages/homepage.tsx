/** @format */

import React from "react";
import { useRouter } from "next/router";
import Header from "../components/header"; // Import Header component
import Footer from "@/components/footer";
import Spline from "@splinetool/react-spline";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import Image from "next/image";
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

import PhotoCollage from "@/components/photoCollage";
const HomePage = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="splinescene relative">
        <div className="absolute h-full w-full z-0">
          <img
            className="object-cover w-full h-full"
            src="/collage_photos/main.jpg"
            alt="main"
          />
        </div>
        <Spline
          className="relative z-1"
          scene="https://prod.spline.design/1hmDomiBXtwbRtQZ/scene.splinecode"
        />
      </div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <Footer />
    </div>
  );
};

export default HomePage;
