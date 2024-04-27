import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import i18n from "../i18n"; // Import i18n instance
import SearchBar from "./searchBar";
interface HeaderProps {
  isSearchVisible: boolean;
}
const MongoliansvgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg";
const AmericansvgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_the_U.S..svg";

const Header = ({ isSearchVisible }: HeaderProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [flag, setFlag] = useState(AmericansvgUrl);

  const toggleFlag = () => {
    setFlag(flag === AmericansvgUrl ? MongoliansvgUrl : AmericansvgUrl);
    const newLanguage = flag === AmericansvgUrl ? "mn" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="bg-blue-900 text-white py-1 px-6 flex items-center justify-between">
      <div className="flex items-center justify-center flex-grow">
        <Image
          src="/logos/MIU.png"
          alt={t("header.logo.alt")}
          width={40}
          height={30}
        />
      </div>
      {/* <div  className="absolute right-0">
        {isSearchVisible && <SearchBar />}
      </div> */}

      <div className="flag flex items-center">
        {isSearchVisible && <SearchBar />}
        <Image
          src={flag}
          width={40}
          height={30}
          alt={t("header.flag.alt")}
          className="ml-2 cursor-pointer"
          onClick={toggleFlag}
        />
      </div>
    </header>
  );
};

export default Header;
