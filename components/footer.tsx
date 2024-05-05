import React from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push("/about");
  };

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-end">
          <img src="/logos/MIU.png" alt="Logo" width={40} height={30} />
          <h1 className="text-2xl font-bold pl-5">
            Mongolia International University
          </h1>
        </div>
        <div className="flex items-center">
          <Button
            variant="contained"
            color="primary"
            className="mr-4"
            onClick={navigateToAbout}
          >
            About Us
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/")}
          >
            Home
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
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Mongolia International University.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
