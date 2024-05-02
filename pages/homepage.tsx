import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spline from "@splinetool/react-spline";
import ImageCarousel from "@/components/homeImageCarousel";

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

  const [showSpan, setShowSpan] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpan(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <ImageCarousel images={imageUrls} interval={5000} />
      </div>
      <div className="absolute inset-0 top-[-35%] flex items-center text-center md:flex md:justify-center">
        <span
          className={`leading-none text-left text-[4vh] text-white  sm:text-[7vh] md:text-[8vh] xl:text-[10vh] ${
            showSpan
              ? "opacity-100 transition-opacity duration-1000"
              : "opacity-0"
          }`}
        >
          Mongolia <br /> International <br /> University
        </span>
      </div>

      <div className="absolute inset-0">
        <Spline className="w-full h-full opacity-70" scene={splineSceneUrl} />
      </div>
    </div>
  );
};

export default HomePage;
