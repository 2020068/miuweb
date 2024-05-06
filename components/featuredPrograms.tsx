import React from "react";

type Program = {
  name: string;
  imgUrl: string;
  title: string;
};

type FeaturedProgramsProps = {
  programs: Program[];
  masters: boolean;
};

const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({
  programs,
  masters,
}) => {
  return (
    <div className="mt-8 mb-8 ">
      <div className="h1 text-center text-white text-3xl text-bold pb-3">
        {masters ? "Masters Programs" : "Bachelor Programs"}
      </div>
      <div className=" flex flex-wrap justify-center gap-5 overflow-x-auto">
        {programs.map((program, index) => (
          <FeaturedProgram
            key={index}
            imgUrl={program.imgUrl}
            name={program.name}
            title={program.title}
          />
        ))}
      </div>
    </div>
  );
};

type FeaturedProgramProps = {
  imgUrl: string;
  name: string;
  title: string;
};

const FeaturedProgram: React.FC<FeaturedProgramProps> = ({ imgUrl, title }) => (
  <div className="relative w-330 h-206 group">
    <a href="#" className="block w-full h-full relative">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover"
        style={{ objectFit: "cover", height: "206px", width: "330px" }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-xs font-semibold">{title}</span>
      </div>
    </a>
  </div>
);

export default FeaturedPrograms;
