import React, { useEffect, useState } from "react";

export default function Bubbles() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bubbles = document.querySelectorAll(".bubble");
      bubbles.forEach((bubble) => {
        const bubblePosition = bubble.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (bubblePosition < screenHeight * 0.9) {
          bubble.classList.add("fade-in");
          setIsVisible(true);
        } else {
          bubble.classList.remove("fade-in");
          setIsVisible(false);
        }
      });
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run only on component mount

  return (
    <div className="flex justify-around bg-gradient-to-r from-sky-500 to-indigo-500 p-1 xl:p-10">
      <div
        className={`flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-700 rounded-full text-white text-center bubble ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <span className="text-5xl md:text-[50px] xl:text-[100px]">34%</span>
        <span className="xl:text-3xl text-md">International Students</span>
      </div>
      <div
        className={`flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-600 rounded-full text-white text-center bubble ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <span className="text-5xl md:text-[50px] xl:text-[100px]">1:7</span>
        <span className="xl:text-3xl">Faculty to Student Ratio</span>
      </div>
      <div
        className={`flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-500 rounded-full text-white text-center bubble ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <span className="text-5xl md:text-[50px] xl:text-[100px]">74+</span>
        <span className="xl:text-2xl">Student Nationalities & Nations</span>
      </div>
    </div>
  );
}
