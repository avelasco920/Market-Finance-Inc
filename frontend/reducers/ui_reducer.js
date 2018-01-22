import merge from 'lodash/merge';

import {
  START_LOADING_NEWS_ARTICLES,
  RECEIVE_NEWS_ARTICLES,
} from '../actions/news_articles_actions';

import {
  HIDE_DIRECTORY,
  SHOW_DIRECTORY
} from '../actions/ui_actions';

const initialState = {
  newsArticlesLoading: true,
  directoryHidden: true
};

const searchReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_NEWS_ARTICLES:
      return merge({}, state, { newsArticlesLoading: true });
    case RECEIVE_NEWS_ARTICLES:
      return merge({}, state, { newsArticlesLoading: false });
    case HIDE_DIRECTORY:
      return merge({}, state, { directoryHidden: true });
    case SHOW_DIRECTORY:
      return merge({}, state, { directoryHidden: false });
    default:
      return state;
  }
};

export default searchReducer;
