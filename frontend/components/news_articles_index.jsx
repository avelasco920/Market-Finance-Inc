import React from 'react';
import NewsArticlesIndexItem from './news_articles_index_item';

class NewsArticlesIndex extends React.Component {
  componentWillMount() {
    this.props.fetchNewsArticles(this.props.company.symbol);
  }

  render() {
    const { newsArticlesLoading, newsArticles, company } = this.props;
    if (newsArticlesLoading) {
      return null;
    } else {
      return(
        <div id='news-articles-wrapper'>
          <h4>News about {company.symbol}</h4>
          <ul id='news-articles-index'>
            { newsArticles.map( (newsArticle, i) =>
              <NewsArticlesIndexItem key={i} newsArticle={newsArticle}/>
            )}
          </ul>
        </div>
      );
    }
  }
}

export default NewsArticlesIndex;
