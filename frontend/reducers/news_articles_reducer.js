import merge from 'lodash/merge';
import { RECEIVE_NEWS_ARTICLES } from '../actions/news_articles_actions';

const newsArticles = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS_ARTICLES:
      return {};
    default:
      return state;
  }
};

export default newsArticles;
