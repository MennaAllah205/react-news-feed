import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import "../Css/NewsList.Css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=ebb910bea9234e5e9195d50ab22f2238`
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news date", error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        articles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        ))
      )}
    </div>
  );
};

export default NewsList;
