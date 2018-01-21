import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import style from '../stylesheets/application.scss';
import { fetchNewsArticles } from './util/news_articles_api_util';

document.addEventListener("DOMContentLoaded", () => {
	window.fetchNewsArticles = fetchNewsArticles;
	let store = configureStore();
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root);
});
