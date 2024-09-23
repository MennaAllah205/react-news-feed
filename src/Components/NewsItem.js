import React from "react";
import "../Css/NewsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-item">
      <img src={urlToImage} alt="news" style={{ width: "100%" }} />
      <h2>{title}</h2>
      <p>{description} </p>
      <a href={url} target="blank">
        Read more
      </a>
    </div>
  );
};

export default NewsItem;
