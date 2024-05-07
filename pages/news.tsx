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
      "3636a7528d3bc250df940378a4d5d837c9d5a48de167a6428402b09a199f3b6fdceb82c9d9371ed554bb29c64badd877d972dc0e3fc35ec9dbc55c28ba2740961d9cee48761ffdfd06ad0d27560ace978b4e6aa02b35fb71e45f9b3bb6a9eaaadfecfb642ffb6fef8c00014ffb6a4d31960f6a7fa215d0b0a29ea1b0f237bdea";

    // Set up Axios request headers with the API token
    const config = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    // Fetch data from Strapi API with the configured headers
    const res = await axios.get("http://127.0.0.1:1337/api/articles", config);
    const articles = res.data.data;
    // Pass data to the page via props
    return { props: { articles } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { articles: [] } }; // Return empty articles array in case of error
  }
}
