import React from "react";

const bannerData = [
  {
    imageUrl: "/bannerPics/miumedal.PNG",
    title: "Explore Life",
    content:
      "There are many great activities and events organized for MIU students. From performing arts to sports competitions to social events, each activity offers opportunities for students and faculty to enjoy life and experience new things.",
    alignment: "left", // Align image on the left
  },
  {
    imageUrl: "/bannerPics/withTeacher.PNG",
    title: "Build Community",
    content:
      "The MIU community is a unique place where students have great relationships with professors. MIU Faculty is always available to give help and advice through Student Care Program (SCP). Every year students and faculty in each department take a one or two-day Membership Training Program (MTP) trip for a great bonding experience.",
    alignment: "right", // Align image on the right
  },
  {
    imageUrl: "/bannerPics/studentsSit.PNG",
    title: "Get Involved",
    content:
      "Many students join one or more of the many student clubs and organizations on campus. Or if the club you want to join doesn't exist, you can create it.",
    alignment: "left", // Align image on the left
  },
  {
    imageUrl: "/bannerPics/CookMiu.PNG",
    title: "Study Abroad",
    content:
      "Each semester MIU provides students with the opportunity to study abroad for one semester through the Student Exchange Program (SEP). It is a great opportunity to experience new cultures, study at top universities, learn foreign languages and make new friends.",
    alignment: "right", // Align image on the right
  },
  // Add more banner objects as needed
];

export default function MoreBanners() {
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
