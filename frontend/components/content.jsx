import React from 'react';
import Chart from './chart';
import NewsArticlesIndexContainer from './news_articles_index_container';

const Content = () => (
  <div id='content-wrapper-fixed'>
    <div id='content-wrapper'>
      <div id='content-header'>
        <h1>AAPL</h1><h4>Apple</h4>
      </div>
      <div id='content'>
        <Chart />
        <NewsArticlesIndexContainer />
      </div>
    </div>
  </div>
);

export default Content;
