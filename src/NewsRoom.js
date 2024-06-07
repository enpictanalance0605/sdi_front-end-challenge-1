import React from 'react';
import NewsItem from './NewsItem';
import './NewsRoom.css';

const authors = [
  {
    id: 1,
    name: 'Darwin Tumaneng',
    role: 'Logistics Digitalization Services Unit Representative',
    place: 'Metro Manila, Philippine',
    avatar_url: 'tmsph-logo.jpg',
  },
  {
    id: 2,
    name: 'Miguel Tianzon',
    role: 'Car Rental Business Representative',
    place: 'Metro Manila, Philippine',
    avatar_url: 'tmsph-logo.jpg',
  },
];

const newsData = [
  {
    id: 1,
    author_id: 1,
    title: 'Toyota Mobility Solutions PH empowers seafood wholesaler Mida Food with digital logistics platform',
    body: "Logistics Platform addresses limitations in Mida Food's delivery operations",
    image_url: 'tmsph-ls-midafood.jpeg',
    created_at: '2023-01-13 12:30:00',
  },
  {
    id: 2,
    author_id: 2,
    title: 'TMSPH launches Toyota Rent&#x3B1;Car',
    body: 'Toyota Mobility Solutions Philippines, Inc. (TMSPH) marked another milestone in its first year of operations with the introduction of its new and exciting car rental service, the Toyota Rent&#x3B1;Car. This service provides affordable and secure transportation through its convenient and flexible car rental options – both for short-term and long-term use.',
    image_url: 'tmsph-launches-toyota-rentacar.webp',
    created_at: '2023-05-17 22:29:10',
  },
  {
    id: 3,
    author_id: 1,
    title: 'Toyota Motor Philippines partners with Lalamove Automotive',
    body: 'Leading mobility company Toyota Motor Philippines (TMP) has partnered with leading logistics provider Lalamove through its auto brand, Lalamove Automotive, with the introduction of the commercial vehicle Toyota Lite Ace as a transport partner. Aspiring and existing Lalamove operators are now able to purchase the Lite Ace Panel Van variant through this partnership, under Lalamove Automotive\'s Vehicle Ownership Program.',
    image_url: 'tmp-lalamove-partnership.webp',
    created_at: '2023-07-05 02:15:01',
  },
];

const NewsRoom = () => {
  return (
    <div className="news-room">
      {newsData.map((news) => {
        const author = authors.find((author) => author.id === news.author_id);
        return <NewsItem key={news.id} news={news} author={author} />;
      })}
      <div className="pagination-container">
        <button className="pagination-button">&lt;</button>
        <button className="pagination-button">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">...</button>
        <button className="pagination-button">8</button>
        <button className="pagination-button">9</button>
        <button className="pagination-button">10</button>
        <button className="pagination-button active">11</button>
        <button className="pagination-button">12</button>
        <button className="pagination-button">13</button>
        <button className="pagination-button">14</button>
        <button className="pagination-button">...</button>
        <button className="pagination-button">56</button>
        <button className="pagination-button">57</button>
        <button className="pagination-button">&gt;</button>
      </div>
    </div>
  );
};

export default NewsRoom;
