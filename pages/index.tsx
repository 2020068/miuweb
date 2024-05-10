/** @format */

import React from "react";
import Banner from "@/components/banner";
import HomePage from "./homepage";
import Bubbles from "@/components/bubbles";
import Marquee from "@/components/marquee/marquee";
import FeaturedPrograms from "@/components/featuredPrograms";
//import programs from "../constants/programs.ts"
import { Bachelorprograms, Masterprograms } from "../constants/programs";
import MoreBanners from "@/components/moreBanners";
const App = () => {
  return (
    <div className='bg-white theme-light'>
      <HomePage />
      <Banner />
      <Bubbles />
      <Marquee />

      <div className='bg-gradient-to-b from-[rgba(1,41,142,0.92)] to-[rgba(71,124,153,0.85)] flex justify-center theme-light'>
        <FeaturedPrograms masters={false} programs={Bachelorprograms} />
        <FeaturedPrograms masters={true} programs={Masterprograms} />
      </div>

      <MoreBanners />
    </div>
  );
};

export default App;
