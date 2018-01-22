import { combineReducers } from 'redux';

import newsArticles from './news_articles_reducer';

const rootReducer = combineReducers({
  newsArticles
});

export default rootReducer;
