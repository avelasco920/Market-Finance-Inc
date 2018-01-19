import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import style from './stylesheets/application.scss';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Congrats/>, root);
});
