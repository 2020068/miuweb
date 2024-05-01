import { MenuIcon, SearchIcon, EventIcon } from "../assets/iconImports";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "@mui/material/Button";
interface MenuProps {
  toggleSearchBar: () => void;
  toggleSidebarMenuParent: () => void;
}

const Menu: React.FC<MenuProps> = ({
  toggleSearchBar,
  toggleSidebarMenuParent,
}) => {
  const { t } = useTranslation(); // Ensure that useTranslation is called unconditionally
  const router = useRouter();
  const [hoverPrograms, setHoverPrograms] = useState(false);
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

  const navigateToVisit = () => {
    router.push("/visit");
  };

  const navigateToPrograms = (program: string) => {
    router.push(`/programs/${program}`);
  };

  const toggleSidebarMenu = () => {
    setSidebarMenuOpen(!sidebarMenuOpen);
    toggleSidebarMenuParent();
  };
  const handleSearchClick = () => {
    toggleSearchBar(); // Call the toggle function passed from the parent
  };
  return (
    <div
      className={` h-screen bg-gray-500 bg-opacity-0  transform mt-8
          ${sidebarMenuOpen ? "-translate-x-full" : "translate-x-0"}
          -translate-y-1/2 transition-transform duration-500 ease-in-out`}
    >
      <div className="flex flex-col items-end justify-end h-full">
        {/* Larger Buttons */}
        <Button
          variant="contained"
          className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          onClick={toggleSidebarMenu}
          startIcon={<MenuIcon />}
        >
          {t("menu.button.menu")}
        </Button>
        <Button
          variant="contained"
          className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          startIcon={<SearchIcon />}
          onClick={handleSearchClick}
        >
          {t("menu.button.search")}
        </Button>
        <Button
          variant="contained"
          className="bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
          startIcon={<EventIcon />}
        >
          {t("menu.button.newsEvents")}
        </Button>

        {/* Smaller Buttons */}
        <Link href="Applied/appl">
          <Button
            variant="outlined"
            className="bg-white-500 hover:bg-blue-700 hover:text-white text-center text-blue-500 font-bold py-2 rounded-l mb-4 w-[120px]"
          >
            {t("menu.button.apply")}
          </Button>
        </Link>
        <Button
          variant="outlined"
          className="bg-white-500 hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 rounded-l mb-4 w-[120px]"
          onClick={navigateToVisit}
        >
          {t("menu.button.visit")}
        </Button>
        <div
          className={`relative`}
          onMouseEnter={() => setHoverPrograms(true)}
          onMouseLeave={() => setHoverPrograms(false)}
        >
          <Button
            variant="outlined"
            className="bg-white-500 hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 rounded-l w-[120px]"
          >
            {t("menu.button.programs")}
          </Button>
          {hoverPrograms && (
            <div className="absolute z-10 right-0 bg-white border border-gray-200 rounded">
              <Button
                fullWidth
                className="block w-full px-4 py-2 text-gray-800 hover:bg-blue-100"
                onClick={() => navigateToPrograms("academic-programs")}
              >
                {t("menu.programs.academicPrograms")}
              </Button>
              <Button
                fullWidth
                className="block w-full px-4 py-2 text-gray-800 hover:bg-blue-100"
                onClick={() => navigateToPrograms("LEI")}
              >
                {t("menu.programs.LEI")}
              </Button>
              {/* Add more program buttons as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
