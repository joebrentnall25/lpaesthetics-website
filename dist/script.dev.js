"use strict";

var _reviews = require("./assets/json/reviews.js");

var currentIndex = 0;
var reviews = _reviews.reviewsObj.reviews;

var incrementReview = function incrementReview(index) {
  var maxIndex = reviews.length;

  if (index === maxIndex) {
    currentIndex = 0;
    return 0;
  }

  return currentIndex++;
};

var changeReview = function changeReview() {
  var name = document.getElementById('review-name');
  var para = document.getElementById('review-para');
  var newIndex = incrementReview(currentIndex);
  name.innerHTML = "".concat(reviews[newIndex].name);
  para.innerHTML = "\"<i>".concat(reviews[newIndex].review, "</i>\"");
};

window.onload = function () {
  setInterval(changeReview, 10000);
};