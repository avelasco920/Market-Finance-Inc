import { combineReducers } from 'redux';

import newsArticles from './news_articles_reducer';
import directory from './directory_reducer';
// import company from './company_reducer';

const rootReducer = combineReducers({
  newsArticles,
  directory,
  // company
});

export default rootReducer;
