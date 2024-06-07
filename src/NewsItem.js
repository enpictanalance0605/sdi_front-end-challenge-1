import React from 'react';
import './NewsItem.css';

const NewsItem = ({ news, author }) => {
  const { title, body, image_url, created_at } = news;
  const { name } = author;

  const date = new Date(created_at);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();

  return (
    <div className="news-item">
      <div className="image-container">
        <img src={image_url} alt={title} className="news-image" />
        <div className="date-container">
          <span className="date-number">{day}</span>
          <span className="date-month">{month}</span>
        </div>
      </div>
      <div className="content-container">
        <div className="author">{name}</div>
        <h1 className="title">{title}</h1>
        <p className="description">{body}</p>
        <a href="#" className="read-more">Read Article</a>
      </div>
    </div>
  );
};

export default NewsItem;