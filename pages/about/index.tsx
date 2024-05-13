/** @format */

import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import Document, { Html, Head, Main, NextScript } from "next/document";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='about-container'>
        <div className='header'></div>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <div className='button-group'>
          <div className='flex flex-col items-end justify-end h-full'>
            <Link href='..'>
              <Button className='bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]'>
                {t("about.button.back")}
              </Button>
            </Link>
            <Link href='./about/campus/campus'>
              <Button className='bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]'>
                {t("about.button.campus")}
              </Button>
            </Link>
            <Link href='./about/employee/employee'>
              <Button className='bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]'>
                {t("about.button.employee")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='sight-word'>
        <div className='sight-word1'>{t("about.text.sight-word1")}</div>
      </div>
      <div className='box1'>
        <div className='box2'>
          <div className='CeoDescription'>
            <div className='title3'> {t("about.text.title3")}</div>
            <p>{t("about.text.Ceodescription")}</p>
          </div>
          <div className='CeoImg'>
            <img src='/aboutPage/aboutpage/ceo.jpg' />
          </div>
        </div>
        <div className='box2'>
          <div className='LeaderDescription'>
            <div className='title2'>{t("about.text.title2")}</div>
            <p>
              {t("about.text.LeaderDescription")}
              {t("about.text.intro")}
              {t("about.text.director")}
              {t("about.text.signature")}
            </p>
          </div>
          <div className='LeaderImg'>
            <img src='/aboutPage/aboutpage/Leader.jpg' />
          </div>
        </div>
        <div className='box2'>
          <div className='boxDescription'>
            <div className='title1'>{t("about.text.title1")}</div>
            <p>{t("about.text.boxDescription")}</p>
          </div>
          <div className='boxImg'>
            <img src='/aboutPage/aboutpage/Dgraduation.jpg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
