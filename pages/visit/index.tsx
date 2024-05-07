import React from "react";

import ImageCarousel from "@/components/imageCarousel";
import MapGoogle from "@/components/googleMap";

const VisitorPage: React.FC = () => {
  const mapCenter = { lat: 47.91482657901934, lng: 106.9731089094383 };

  return (
    <div>
      <ImageCarousel
        textContent="PLAN YOUR VISIT TO MIU"
        textdesc="See all the things MIU has to offer"
        image={"/images/visit_photo.jpg"}
      />
      <div className="mt-[50vh]  w-full">
        <MapGoogle />
      </div>
    </div>
  );
};

export default VisitorPage;
