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
import { ArticleProps } from "../types/types";
import Head from "next/head";
import { useTranslation } from "react-i18next";
const App = ({ articles }: ArticleProps) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <Head>
        <title>{t("homepage.miu")}</title>
        <link rel="icon" href="/logos/MinMIU.png" />
      </Head>
      <HomePage />
      <div id="banner">
        <Banner />
      </div>

      <Bubbles />
      <Marquee />

      <div className="bg-gradient-to-b from-[rgba(1,41,142,0.92)] to-[rgba(71,124,153,0.85)] flex justify-center theme-light">
        <FeaturedPrograms masters={false} programs={Bachelorprograms} />
        <FeaturedPrograms masters={true} programs={Masterprograms} />
      </div>
      <MoreBanners />
      <FeaturedNews articles={articles} />
      <div className="bg-gradient-to-b from-indigo-300 to-blue-500 w-full h-[600px]">
        <img src="/miu-campus.png" className="w-full h-full" alt="campus" />
      </div>
    </div>
  );
};
export async function getStaticProps() {
  return await getArticleProps();
}

export default App;
