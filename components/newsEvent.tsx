// components/NewsComponent.tsx

interface Article {
  id: number;
  attributes: {
    title: string;
    summary: string;
    // Add more properties here if needed
  };
}

interface Props {
  articles: Article[];
}

const NewsComponent: React.FC<Props> = ({ articles }) => {
  return (
    <div >
      <h1>News & Events</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.attributes.title}</h2>
            <p>{article.attributes.summary}</p>
            {/* Add more content rendering here if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
