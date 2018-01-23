import React from 'react';

const NewsArticlesIndexItem = props => (
  <a href={props.newsArticle.url} className='news-articles-index-item' target='_blank'>
    <span>{props.newsArticle.title}</span>
    <span className='news-article-description'>{props.newsArticle.description}</span>
    <span className='news-article-source'>{props.newsArticle.source.name}</span>
  </a>
);

export default NewsArticlesIndexItem;
