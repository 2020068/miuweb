import type { NextPage } from "next";
import { Button } from "@mui/material";

const imageUrls = [
  "/bannerPics/image1.jpg",
  "/bannerPics/image2.png",
  "/bannerPics/image3.png",
];

const Banner: NextPage = () => {
  return (
    <div className="bg-gradient-to-b from-[rgba(1,41,142,0.92)] to-[rgba(71,124,153,0.85)] items-center flex flex-col items-start justify-start pt-10 px-5vw pb-12 box-border max-w-full z-3 text-center md:pt-6 md:px-8 md:pb-8">
      <div className="mb-4 xl:text-5xl md:text-2xl text-white ">
        Shaping Global Leaders for an Interconnected World
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between max-w-full gap-8 md:flex-wrap md:justify-center">
        <div className="">
          <div className="flex-1 flex flex-col items-start justify-start">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                className="self-stretch flex-1 max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src={url}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8 md:w-1/2 md:min-w-0">
          <div className="self-stretch font-light text-white ">
            Founded in 2002, MIU stands as a beacon of higher education in
            Ulaanbaatar, Mongolia. Thanks to the generous support of former
            president Natsagiin Bagabandi, the university was granted a
            substantial land parcel of 17,100 ㎡ for its inaugural building.
            Today, MIU is renowned for its English-language programs, making it
            a leader in education across Central Asia. With 14 esteemed
            bachelor’s programs, MIU is dedicated to nurturing the next
            generation of global leaders from Mongolia, Russia, China, South
            Korea, and beyond. Education at MIU is about grasping the
            intricacies of our interconnected world, fostering critical
            thinking, and empowering students to make a positive impact on
            society. Anchored by a comprehensive core curriculum, MIU offers a
            wealth of experiential learning opportunities across a diverse range
            of disciplines. Encircled by a dynamic campus community, MIU equips
            students with essential skills to navigate and succeed in an
            ever-evolving global landscape.
          </div>
          <div className="self-stretch flex flex-row items-start justify-center">
            <Button
              className="self-stretch w-48"
              endIcon={<img width="10" height="9" src="/arrow.svg" />}
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                borderColor: "#fff",
                borderRadius: "10px",
                "&:hover": { borderColor: "#fff" },
              }}
            >
              LIFE AT MIU
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
