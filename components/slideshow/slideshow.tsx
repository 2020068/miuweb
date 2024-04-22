/** @format */

import React, { useState } from "react";
import Image from "next/image";

interface Teacher {
  name: string;
  image: string; // Update the type to string for the image URL
  description: string;
}

interface TeacherSwiperProps {
  teachers: Teacher[];
}

const TeacherSwiper: React.FC<TeacherSwiperProps> = ({ teachers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teachers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teachers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='teacher-swiper'>
      <button onClick={prevSlide}>Prev</button>
      <div className='teacher-profile'>
        {/* Use the Image component with the correct source */}
        <Image
          src={teachers[currentIndex].image}
          alt={teachers[currentIndex].name}
          width={200} // Specify the width of the image
          height={200} // Specify the height of the image
        />
        <div className='teacher-info'>
          <h2>{teachers[currentIndex].name}</h2>
          <p>{teachers[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default TeacherSwiper;
