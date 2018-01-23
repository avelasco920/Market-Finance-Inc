import React from 'react';

const NewsArticlesIndexItem = props => (
  <div className='news-articles-index-item'>
    <span>{props.newsArticle.title}</span>
    <span className='news-article-description'>{props.newsArticle.description}</span>
    <span className='news-article-source'>{props.newsArticle.source.name}</span>
  </div>
);

export default NewsArticlesIndexItem;
