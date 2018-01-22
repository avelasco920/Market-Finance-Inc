import { connect } from 'react-redux';

import { fetchNewsArticles } from '../actions/news_articles_actions';
import Directory from './directory';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
