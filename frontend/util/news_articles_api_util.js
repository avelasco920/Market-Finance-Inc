import $ from 'jquery';

// export const fetchNewsArticles = () => (
//   $.ajax({
//     url: `http://www.json-generator.com/api/json/get/bPdFkqPEte?indent=2`,
//     type: "GET",
//     dataType: "JSON",
//   })
// );

export const fetchNewsArticles = companyName => (
  $.ajax({
    url: `https://newsapi.org/v2/everything?q=${companyName}&domains=wsj.com,nytimes.com,investopedia.com,finance.yahoo.com,thestreet.com,nasdaq.com,msn.com,forbes.com,fool.com&language=en&sortBy=popularity&apiKey=b300fee4ac7f44a9aa64277c11979d6e`,
    type: "GET",
    dataType: "JSON",
  })
);
