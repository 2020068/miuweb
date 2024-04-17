import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MenuIcon, SearchIcon, EventIcon } from '../assets/iconImports';
const Menu = () => {
  const router = useRouter();
<<<<<<< HEAD
  const [showPrograms, setShowPrograms] = useState(false);
  
  const navigateToAbout = () => {
    router.push('/about');
  };
=======
>>>>>>> b8bbcc84789ce41359085c1eacac518ef4f1f10f

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

  const navigateToMenu = () => {
    console.log('Navigate to Menu');
    // Add logic to toggle menu visibility or close the menu
  };

  const navigateToSearch = () => {
    console.log('Navigate to Search');
    // Add logic to navigate to search page
  };

  const navigateToNewsEvents = () => {
    console.log('Navigate to News-Events');
    // Add logic to navigate to news-events page
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="fixed top-0 right-0 h-screen  bg-gray-500 bg-opacity-0 transform mt-8 -translate-y-1/2 "> {/* Set z-index to 10 to ensure the menu is above other content */}

      <div className="flex flex-col items-end justify-end h-full">
        {/* Larger Buttons */}
        <button
          className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          onClick={navigateToMenu}
        ><MenuIcon />
          Menu
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          onClick={navigateToSearch}
        ><SearchIcon />
          Search
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          onClick={navigateToNewsEvents}
        ><EventIcon/>
          News-Events
        </button>

        {/* Smaller Buttons */}
        <button
          className="bg-white-500 hover:bg-blue-700 text-blue-500 font-bold py-2 rounded-l mb-4 w-[120px]"
          onClick={navigateToApply}
        >
          Apply
        </button>
        <button
          className="bg-white-500 hover:bg-blue-700 text-blue-500 font-bold py-2 rounded-l mb-4 w-[120px]"
          onClick={navigateToVisit}
        >
          Visit
        </button>
        <button
          className="bg-white-500 hover:bg-blue-700 text-blue-500 font-bold py-2 rounded-l w-[120px]"
          onClick={navigateToPrograms}
        >
          Programs
        </button>
      </div>
>>>>>>> b8bbcc84789ce41359085c1eacac518ef4f1f10f
    </div>
  );
};

export default Menu;
