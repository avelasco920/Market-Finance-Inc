import { connect } from 'react-redux';
import {
  fetchNewsArticles
} from '../actions/news_articles_actions';
import NewsArticlesIndex from './news_articles_index';

const mapStateToProps = (state) => {
  return {
    newsArticles: state.entities.newsArticles,
    newsArticlesLoading: state.ui.newsArticlesLoading,
    company: state.entities.company
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNewsArticles: () => dispatch(fetchNewsArticles()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsArticlesIndex);
