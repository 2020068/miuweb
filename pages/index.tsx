/** @format */

import React from "react";
import { useRouter } from "next/router";
import Header from "../components/header"; // Import Header component
import Menu from "../components/menu"; // Import Menu component
import Footer from "@/components/footer";
import Spline from "@splinetool/react-spline";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HomePage = () => {
  const router = useRouter();

  return (
    <div className='bg-white min-h-screen'>
      {/* Use the Header component */}
      <Header />
      <Menu />

      <Spline
        className='splinescene'
        scene='https://prod.spline.design/1hmDomiBXtwbRtQZ/scene.splinecode'
      />

      {/* Main Content */}
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
      <div className='p-8 '>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
