import ImageCarousel from "@/components/imageCarousel";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const BackgroundPage = () => {
  return (
    <div className="background-page">
      <ImageCarousel
        textContent="Apply to MIU"
        textdesc="Choose Form"
        image={"/image4.jpg"}
      />

      <div className="mt-[50vh] w-full flex justify-center items-center p-[100px] bg-gradient-to-b from-indigo-500 to-blue-500">
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "1rem",
            padding: "1rem 2rem",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <Link href="ApplyForm">Undergraduate Application Form</Link>
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "1rem",
            padding: "1rem 2rem",
            margin: "1rem",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Graduate Application Form
        </Button>
      </div>
    </div>
  );
};

export default BackgroundPage;
