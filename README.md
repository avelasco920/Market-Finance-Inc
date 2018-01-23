# [Market Finance Inc](https://avelasco920.github.io/Market-Finance-Inc/#/)

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
+ Webpack
+ Babel
+ ES6
+ Lodash
+ jQuery
+ Font-Awesome

## Demos

### React/Redux

React/Redux was the chosen frontend framework and flux architecture
to easily manage dependencies across the different components.
+ When a new company is chosen, the candlestick graph changes
  along with the news articles relating to that specific company.
+ The redux store was also utilized in creating a responsive
  `Directory`. The access point to show and hide the `Directory`
  is found in the `Navbar` component.
+ React was helpful in creating modular components. Two different UL's
  were used to create the `directory`, however the `DirectoryIndexItem`
  component was able to be used in both.

### Responsiveness and Browser Compatibility

Responsiveness across various browsers were considered during styling.
CSS's flex display was the ideal choice in distinguishing the width
dimensions for the adjacent `Chart` and `NewsIndex`.
+ Styling was tested against Chrome, Safari, and Firefox.
+ Google Fonts were used as they're compatible against all major browsers
  with fast CDN, has unlimited bandwidth for unlimited usage, and fast
  loading times.
+ `Content` on page stacks vertically when the browser page reaches
  a width of 1100px. `Content` is rendered horizontally otherwise and has
  a max width once the screen gets too big. All responsive styling is
  done with CSS3 and no external library.

[Live Link](https://avelasco920.github.io/Market-Finance-Inc/#/)
