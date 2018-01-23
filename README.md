# Market Finance Inc

[Link to site](https://stocksoverflow.herokuapp.com/#/)

Market Finance Inc is a dynamic single-app financial trading webpage
for users to visualize financial data and read news relating to
specific companies.


### Features

+ Candlestick graph displaying realtime data
+ Correlating news articles from The Wall Street Journal, NY Times,
Investopedia, Yahoo Finance, The Street, Nasdaq, MSN, Forbes,
and Motley Fool

### Technologies

+ React/Redux
+ TradingView chart widget
+ News API from newsapi.org
+ HTML5
+ CSS3
+ Sass
+ SassLoader
+ Webpack
+ Babel
+ ES6
+ Lodash
+ jQuery
+ Font-Awesome

## Demos

### Data Visualization

The graph on the company show page was created using the ChartJS library.
Once the component begins to mount, an API pull request to AlphaVantage
is made on the frontend to grab real time and historical trading
prices up to five years.
+ Users have the ability to toggle over various time frames (1 Day,
  1 Week, 1 Month, 3 Months, 1 Year, 5 Years) The MomentJS Javascript
  library was utilized to parse the data based on specific time frames.
+ Users have the ability to check the closing prices for the day/minute
  as they hover over the graph
+ The graph changes color based on whether the company has a positive
  or negative change in price value for the specific time frame

![Demo](https://github.com/avelasco920/Market-Finance-Inc/blob/master/assets/demo.gif?raw=true)
