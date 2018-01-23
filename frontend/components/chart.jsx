import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class Chart extends React.Component {

  render() {
    return(
      <div id='chart'>
        <TradingViewWidget
          symbol="AAPL"
          locale="en"
          autosize
        />
      </div>
    );
  }
}

export default Chart;
