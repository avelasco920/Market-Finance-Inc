import merge from 'lodash/merge';
import RECEIVE_NEWS_ARTICLES from '../actions/news_articles_actions';

import {
} from '../actions/search_actions';

const searchReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS_ARTICLES:
      return merge ({}, {
        businesses: action.businesses,
        region: action.region,
        query: action.query
      }
      );
    default:
      return state;
  }
};

export default searchReducer;
