import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Link from "next/link";
import React from "react";
import styles from "./visit.module.css";
import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";

export default function MapGoogle() {
  return (
    <div className="bg-gradient-to-b from-[rgba(1,41,142,0.92)] to-[rgba(71,124,153,0.85)] justify-center flex ">
      <div className={styles.text}>
        <a>Getting Here</a>
        <br />
        <p>
          There are many ways to get to The Bronx Charter School for Children,
          <br />
          which is located in the Mott Haven neighborhood of the South Bronx.
          <br />
          Our elementary school (grades K-5) is located at 388 Willis Avenue
          <br />
          (at the corner of 144th Street). Our middle school (grades 6-7) is
          located
          <br />
          at 423 East 138th Street.
        </p>
        <br />

        <a> Student Transportation Options </a>
        <br />
        <p>
          New families receive information in the spring and summer about
          <br />
          transportation options,which include student Metrocards or
          <br />
          free yellow bus service for those who meet eligibility requirements.
        </p>

        <br />
        <a>Public Transportation</a>
        <br />
        <p>
          For those taking public transportation, The Bronx Charter School is
          <br />
          within walking distance of many subway lines, including the 6
          <br />
          (3rd Avenue/138th Street) and the 2/5 (3rd Avenue/149th Street).
          <br />
          The Bx15 bus passes directly in front of the elementary school.
        </p>

        <br />
        <a>By Car</a>
        <p>
          The school is also accessible by car off the 3rd Avenue/Willis
          <br />
          Avenue Bridge or the East 138th Street/Madison Avenue Bridge.
          <br />
          Street parking and parking lots are available in the area.
        </p>
      </div>
      <div className={styles.location}>
        <div className="w-[100%] h-[80%] flex items-center p-4 ">
          <LoadScript
            googleMapsApiKey="AIzaSyDpxO3C-vyVGkFjK8Bvc8PfenC09dvzYIE"
            language="en"
          >
            <div style={{ height: "100%", width: "100%" }}>
              <GoogleMap
                center={{ lat: 47.91485497895525, lng: 106.97356077908525 }}
                zoom={15}
                mapContainerStyle={{ height: "100%", width: "100%" }}
              >
                {/* Add Marker component */}
                <Marker
                  position={{ lat: 47.91485497895525, lng: 106.97356077908525 }}
                  title="Mongolia International University"
                />
              </GoogleMap>
            </div>
          </LoadScript>
        </div>

        <Button
          endIcon={<ArrowForward />}
          variant="contained"
          href="https://www.google.com/maps/place/Mongolia+International+University/@47.9146792,106.9711992,17z/data=!3m1!4b1!4m6!3m5!1s0x5d96919485d76a77:0xc3c65e3fb66fde11!8m2!3d47.9146756!4d106.9737741!16s%2Fm%2F02x0l38?entry=ttu"
          target="_blank"
        >
          See More Detail
        </Button>
      </div>
    </div>
  );
}
