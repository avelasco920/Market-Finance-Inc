import { combineReducers } from 'redux';

import newsArticles from './news_articles_reducer';
import directory from './directory_reducer';

const rootReducer = combineReducers({
  newsArticles,
  directory
});

export default rootReducer;
