import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "YOUR_NEWSAPI_KEY";

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
      .then(response => setArticles(response.data.articles))
      .catch(error => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      {articles.length > 0 ? (
        articles.slice(0, 5).map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default NewsComponent;
