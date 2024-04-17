import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();
  const [showPrograms, setShowPrograms] = useState(false);
  
  const navigateToAbout = () => {
    router.push('/about');
  };

  const navigateToApply = () => {
    router.push('/apply');
  };

  const navigateToVisit = () => {
    router.push('/visit');
  };

  const togglePrograms = () => {
    setShowPrograms(!showPrograms);
  };

  const navigateToPrograms = (program) => {
    router.push(`/programs/${program}`);
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
        onClick={togglePrograms}
      >
        Programs
      </button>
      {showPrograms && (
          <div className="absolute z-10 right-0 mt-2 bg-white border border-gray-200 rounded program-list-container">
            <button
              className="block w-full px-4 py-2 text-gray-800 hover:bg-blue-100"
              onClick={() => navigateToPrograms('academic-programs')}
            >
              academic-programs
            </button>
            <button
              className="block w-full px-4 py-2 text-gray-800 hover:bg-blue-100"
              onClick={() => navigateToPrograms('LEI')}
            >
              LEI
            </button>
            {/* Add more program buttons as needed */}
          </div>
        )}
    </div>
  );
};

export default Menu;
