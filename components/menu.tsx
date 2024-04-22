import React, { useState } from "react";
import { useRouter } from "next/router";
import { MenuIcon, SearchIcon, EventIcon } from "../assets/iconImports";
import Link from "next/link";
import Sidebar from "./sidebarmenu";

const Menu = () => {
  const router = useRouter();
  const [hoverPrograms, setHoverPrograms] = useState(false);
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

  const navigateToVisit = () => {
    router.push("/visit");
  };

  const navigateToPrograms = (program:string) => {
    router.push(`/programs/${program}`);
  };

  const toggleSidebarMenu = () => {
    setSidebarMenuOpen(!sidebarMenuOpen);
  };

  return (
    <div>
      {/* Main Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-gray-500 bg-opacity-0 transform mt-8
       ${sidebarMenuOpen ? "-translate-x-full" : "translate-x-0"}
        -translate-y-1/2 transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col items-end justify-end h-full">
          {/* Larger Buttons */}
          <button
            className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
            onClick={toggleSidebarMenu}
          >
            <MenuIcon />
            Menu
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]">
            <SearchIcon />
            Search
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]">
            <EventIcon />
            News-Events
          </button>

          {/* Smaller Buttons */}
          <Link
            className="bg-white-500 hover:bg-blue-700 text-center text-blue-500 font-bold py-2 rounded-l mb-4 w-[120px]"
            href="/apply"
          >
            Apply
          </Link>
          <button
            className="bg-white-500 hover:bg-blue-700 text-blue-500 font-bold py-2 rounded-l mb-4 w-[120px]"
            onClick={navigateToVisit}
          >
            Visit
          </button>
          <div
            className={`relative`}
            onMouseEnter={() => setHoverPrograms(true)}
            onMouseLeave={() => setHoverPrograms(false)}
          >
            <button
              className={`bg-white-500 hover:bg-blue-700 text-blue-500 font-bold py-2 rounded-l w-[120px]`}
            >
              Programs
            </button>
            {hoverPrograms && (
              <div className="absolute z-10 right-0 bg-white border border-gray-200 rounded">
                <button
                  className="block w-full px-4 py-2 text-blue-500 text-gray-800 hover:bg-blue-100"
                  onClick={() => navigateToPrograms("academic-programs")}
                >
                  academic-programs
                </button>
                <button
                  className="block w-full px-4 py-2 text-blue-500 text-gray-800 hover:bg-blue-100"
                  onClick={() => navigateToPrograms("LEI")}
                >
                  LEI
                </button>
                {/* Add more program buttons as needed */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <Sidebar isOpen={sidebarMenuOpen} />
    </div>
  );
};

export default Menu;
