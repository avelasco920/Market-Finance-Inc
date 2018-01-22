import merge from 'lodash/merge';

import {
  START_LOADING_DIRECTORY,
  RECEIVE_FOLDERS,
  RECEIVE_DIRECTORY_INDEX,
  HIDE_DIRECTORY,
  SHOW_DIRECTORY
} from '../actions/directory_actions';

import {
  START_LOADING_NEWS_ARTICLES,
  RECEIVE_NEWS_ARTICLES,
} from '../actions/news_articles_actions';

const initialState = {
  directoryLoading: true,
  newsArticlesLoading: true,
  directoryHidden: false
};

const searchReducer = (state = initialState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_DIRECTORY:
      return merge({}, state, { directoryLoading: true });
    case RECEIVE_FOLDERS:
      return merge({}, state, { directoryLoading: false });
    case RECEIVE_DIRECTORY_INDEX:
      return merge({}, state, { directoryLoading: false });
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
