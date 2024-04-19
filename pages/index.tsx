import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header'; // Import Header component
import Menu from '../components/menu'; // Import Menu component
import Footer from '@/components/footer';
import Spline from '@splinetool/react-spline';
const HomePage = () => {
  const router = useRouter();

 
  return (
    <div className="bg-white min-h-screen">
      {/* Use the Header component */}
      <Header />

      {/* Use the Menu component */}
      <Menu />

      {/* Main Content */}
      <div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div>
      <div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div>
      <div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div>
      <div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div>
      <div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div>
      <div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div>
      <div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div><div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div><div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div><div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div><div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div><div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div><div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div><div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div><div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div>
      
      <Footer/>
    </div>
  );
};

export default HomePage;