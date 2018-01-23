import React from 'react';
import Chart from './chart';

const Content = () => (
  <div id='content-wrapper'>
    <div id='content-header'>
      <h1>AAPL</h1><h4>Apple</h4>
    </div>
    <div id='content'>
      <Chart />
    </div>
  </div>
);

export default Content;
