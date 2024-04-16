import React from 'react';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  const navigateToApply = () => {
    router.push('/apply');
  };

  const navigateToVisit = () => {
    router.push('/visit');
  };

  const navigateToPrograms = () => {
    router.push('/programs');
  };

  return (
    <div className="flex items-center justify-end w-full h-16 px-4 bg-white">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        onClick={navigateToAbout}
      >
        About Us
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        onClick={navigateToApply}
      >
        Apply
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        onClick={navigateToVisit}
      >
        Visit
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={navigateToPrograms}
      >
        Programs
      </button>
    </div>
  );
};

export default Menu;