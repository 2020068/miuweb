import React from "react";
import { Article } from "@/pages/news/types";
import { getStrapiURL } from "@/utils/api";

interface Props {
  article: Article;
}

const SeeArticle: React.FC<Props> = ({ article }) => {
  return (
    <div>
      <div className="text-center pt-16 md:pt-16">
        <p className="text-2xl md:text-1xl text-orange-500 font-bold">
          {article.attributes.publishedAt.split("T")[0]}{" "}
          <span className="text-white">/</span> {article.attributes.category}
        </p>
        <h1 className="font-bold break-normal text-white text-3xl md:text-6xl">
          {article.attributes.title}
        </h1>
      </div>
      <div className=" w-full max-w-2xl mx-auto bg-white bg-cover mt-8 rounded">
        <img
          src={getStrapiURL(article.attributes.thumbnail.data.attributes.url)}
          alt={article.attributes.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded "></div>

      <div className="max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
            <p className="text-2xl md:text-3xl mb-5">
              {article.attributes.summary}
            </p>

            <div className="py-6">
              {article.attributes.content.map((item, index) => (
                <div key={index}>
                  {item.type === "paragraph" && (
                    <p>{item.children.map((child) => child.text).join("")}</p>
                  )}
                  {/* Add additional checks/rendering for other types if needed */}
                </div>
              ))}
            </div>
            <div className="justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeArticle;
