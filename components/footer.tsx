import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const router = useRouter();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const { t } = useTranslation();
  const navigateToAbout = () => {

    router.push("/about");
  };
  const handleTelephoneClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.location.href = "tel:+97670007447"; // Initiates a phone call
    } else {
      setShowPhoneNumber(!showPhoneNumber); // Toggle the visibility of the phone number
    }
  };

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-end">
          <Image src="/logos/MIU.png" alt="Logo" width={40} height={30} />
          <h1 className="text-2xl font-bold pl-5 text-white">
            {t("homepage.miu")}
          </h1>
        </div>
        <div className="flex items-center">
          <Button
            variant="contained"
            color="primary"
            className="mr-4"
            onClick={navigateToAbout}
          >
            {t("footer.about")}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/")}
          >
            {t("footer.home")}
          </Button>
          <div className="ml-4">
            <a
              href="https://www.instagram.com/miu_mongolia/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/miunews2016/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <FacebookIcon />
            </a>
            <a href="#" onClick={handleTelephoneClick} className="mr-2">
              <PhoneIcon />
            </a>
            {showPhoneNumber && <span className="mr-2">+976 7000-7447</span>}
            <a href="mailto:admission@miu.edu.mn" className="mr-2">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          {new Date().getFullYear()} {t("homepage.miu")}. {t("footer.allright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
