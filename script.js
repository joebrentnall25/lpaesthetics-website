import {reviewsObj} from './assets/json/reviews.js';

let currentIndex = 0
let reviews = reviewsObj.reviews;

const incrementReview = (index) => {
    let maxIndex = reviews.length;
    if (index === maxIndex){
        currentIndex=0;
        return 0;
    }
    return currentIndex++;
}

const changeReview = () => {
    const name = document.getElementById('review-name');
    const para = document.getElementById('review-para');

    const newIndex = incrementReview(currentIndex);

    name.innerHTML = `${reviews[(newIndex)].name}`
    para.innerHTML = `"<i>${reviews[newIndex].review}</i>"`
}

window.onload = function () {
    setInterval(changeReview, 10000);
};