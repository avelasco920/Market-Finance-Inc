import React from 'react';
import ChartContainer from './chart_container';
import NewsArticlesIndexContainer from './news_articles_index_container';

const Content = props => (
  // added secondary wrapper around content to allow css overflow scroll
  <div id='content-wrapper-fixed'>
    <div id='content-wrapper'>
      <div id='content-header'>
        <h1>{props.company.symbol}</h1><h4>{props.company.name}</h4>
      </div>
      <div id='content'>
        <ChartContainer />
        <NewsArticlesIndexContainer />
      </div>
    </div>
  </div>
);

export default Content;
