import React from "react";
import { useTranslation } from "react-i18next";

export default function MoreBanners() {
  const { t } = useTranslation();
  const bannerData = [
    {
      imageUrl: "/bannerPics/miumedal.PNG",
      title: t("morebanner.title.1"),
      content: t("morebanner.content.1"),
      alignment: "left", // Align image on the left
    },
    {
      imageUrl: "/bannerPics/withTeacher.PNG",
      title: t("morebanner.title.2"),
      content: t("morebanner.content.2"),
      alignment: "right", // Align image on the right
    },
    {
      imageUrl: "/bannerPics/studentsSit.PNG",
      title: t("morebanner.title.3"),
      content: t("morebanner.content.3"),
      alignment: "left", // Align image on the left
    },
    {
      imageUrl: "/bannerPics/CookMiu.PNG",
      title: t("morebanner.title.4"),
      content: t("morebanner.content.4"),
      alignment: "right", // Align image on the right
    },
    // Add more banner objects as needed
  ];

  return (
    <div className="flex justify-center items-center flex-col align-center bg-gradient-to-r from-violet-600 to-indigo-600">
      {bannerData.map((banner, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row mb-8 align-center mt-8"
        >
          {index % 2 === 0 ? ( // Check if index is even
            <>
              <div className="flex w-full md:w-1/2 justify-end">
                <img
                  src={banner.imageUrl}
                  alt="Banner"
                  className="w-full h-auto md:w-[50vh] xl:w-[60vh] md:h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 text-white">
                <h2 className="text-5xl font-bold mb-2">{banner.title}</h2>
                <p className="text-2xl w-1/2">{banner.content}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full md:w-1/2 px-4 text-white items-end flex-col">
                <h2 className="text-5xl font-bold mb-2">{banner.title}</h2>
                <p className="text-2xl w-1/2">{banner.content}</p>
              </div>
              <div className="flex w-full md:w-1/2 justify-start">
                <img
                  src={banner.imageUrl}
                  alt="Banner"
                  className="w-full h-auto md:w-[50vh] xl:w-[60vh] md:h-auto"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
