/** @format */

import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import TeacherSwiper from "../components/slideshow/slideshow";

// Sample data for teachers
import { teachers } from "@/components/teachers";

const HomePage = () => {
  return (
    <div className='bg-white min-h-screen'>
      <Header />
      <Menu />
      {/* Pass the 'teachers' data as a prop to the TeacherSwiper component */}
      <TeacherSwiper teachers={teachers} />
      {/* Main Content */}
      <div className='p-8'>
        <p className='text-lg text-gray-700 mb-4'>
          This is the content of the homepage.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
