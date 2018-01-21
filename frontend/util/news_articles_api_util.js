import $ from 'jquery';

export const fetchNewsArticles = () => (
  $.ajax({
    url: `http://www.json-generator.com/api/json/get/bPdFkqPEte?indent=2`,
    type: "GET",
    dataType: "JSON",
  })
);

window.fetchNewsArticles = fetchNewsArticles;
