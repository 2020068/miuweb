// pages/news.js

import axios from "axios";
import NewsComponent from "../components/newsEvent";
import ImageCarousel from "@/components/imageCarousel";

const imageUrls = "/collage_photos/main.jpg";

interface Article {
  id: number;
  attributes: {
    title: string;
    summary: string;
    // Add more properties here if needed
  };
}

interface NewsProps {
  articles: Article[];
}

export default function News({ articles }: NewsProps) {
  return (
    <div className="h-screen">
      <ImageCarousel
        textContent="News & Events"
        textdesc="Latest news"
        image={"/collage_photos/main.jpg"}
      />

      <div>
        <NewsComponent articles={articles} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    // Replace 'YOUR_API_TOKEN' with your actual API token
    const API_TOKEN =
      "a213435ebea22db93ff81b4f02bd716f1f2e520b592689127f8f98bd52ed493a014ccdf06ce944df2e69b7755109244d37bc7af7d196fc138ff65616fbd178c8ee7829496d7ab25b873eec1f25774cd70bfbad4ad0044a4f1f825beae80c930af34d31c6e46b610cb7610c649c5d30e7d0999b26b53228a8eda4762667d909ec";

    // Set up Axios request headers with the API token
    const config = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    // Fetch data from Strapi API with the configured headers
    const res = await axios.get("http://localhost:1337/api/articles", config);
    const articles = res.data.data;

    // Pass data to the page via props
    return { props: { articles } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { articles: [] } }; // Return empty articles array in case of error
  }
}
