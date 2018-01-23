import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import style from '../stylesheets/application.scss';
import { fetchNewsArticles, getNewsArticles } from './util/news_articles_api_util';
import { closeFolder } from './actions/directory_actions';

document.addEventListener("DOMContentLoaded", () => {
	window.fetchNewsArticles = fetchNewsArticles;
	window.closeFolder = closeFolder;
	window.getNewsArticles = getNewsArticles;
	let store = configureStore();
	window.dispatch = store.dispatch;
	window.getState = store.getState;
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root);
});
