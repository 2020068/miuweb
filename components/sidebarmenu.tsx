import React from "react";
import Link from "next/link";

const Sidebar = ({ isOpen = false }) => {
  return (
    <div
      className={`sidebar top-0 right-0 h-screen w-64 bg-blue-700 z-50 transition-transform duration-500 ease-in-out ${
        isOpen ? "-translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div>
        <p className="text-white text-lg font-semibold mt-4 ml-4">
          Sidebar Menu
        </p>
        <ul className="mt-2">
          <li className="text-white ml-4 mt-2 cursor-pointer">
            <Link href="/about">About MIU</Link>
          </li>
          <li className="text-white ml-4 mt-2 cursor-pointer">
            <Link href="/academics">Academics</Link>
          </li>
          <li className="text-white ml-4 mt-2 cursor-pointer">
            <Link href="/apply">Admission</Link>
          </li>
          <li className="text-white ml-4 mt-2 cursor-pointer">
            <Link href="/miu-life">MIU Life</Link>
          </li>
          <li className="text-white ml-4 mt-2 cursor-pointer">
            <Link href="/LEI">LEI</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
