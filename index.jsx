import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
// import style from '../styles/main.scss';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Congrats/>, root);
});
