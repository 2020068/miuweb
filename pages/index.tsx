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
import FeaturedNews from "@/components/featuredNews";
import { getArticleProps } from "@/utils/articleApi";
import { ArticleProps } from "./news/types";
const App = ({ articles }: ArticleProps) => {
  return (
    <div className='bg-white theme-light'>
      <HomePage />
      <div id="banner">
        <Banner />
      </div>

      <Bubbles />
      <Marquee />

      <div className='bg-gradient-to-b from-[rgba(1,41,142,0.92)] to-[rgba(71,124,153,0.85)] flex justify-center theme-light'>
        <FeaturedPrograms masters={false} programs={Bachelorprograms} />
        <FeaturedPrograms masters={true} programs={Masterprograms} />
      </div>
      <MoreBanners />
      <FeaturedNews articles={articles} />
    </div>
  );
};
export async function getStaticProps() {
  return await getArticleProps();
}

export default App;
