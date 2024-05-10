import NewsComponent from "../../components/newsEvent";
import ImageCarousel from "@/components/imageCarousel";
import FeaturedNews from "@/components/featuredNews";
import { getArticleProps } from "@/utils/articleApi";
import { Article } from "./types";

interface NewsProps {
  articles: Article[];
}

export default function News({ articles }: NewsProps) {
  return (
    <div>
      <ImageCarousel
        textContent="News & Events"
        textdesc="Latest news"
        image={"/collage_photos/main.jpg"}
      />

      <div className="mt-[50vh] w-full">
        <NewsComponent articles={articles} />
      </div>
      <FeaturedNews articles={articles} />
    </div>
  );
}

export async function getStaticProps() {
  return await getArticleProps();
}
