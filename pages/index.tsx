import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header'; // Import Header component

const HomePage = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  const navigateToApply = () => {
    router.push('/apply');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Use the Header component */}
      <Header />

      {/* Main Content */}
      <div className="p-8">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={navigateToAbout}
        >
          Go to About Us
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={navigateToApply} // Call navigateToApply on button click
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default HomePage;
