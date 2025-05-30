const POSTOwnReviewButton = document.getElementsByClassName("postReview")[0];
const reviewCard = document.getElementsByClassName("mainReviews")[0];
const POSTreviewForm = document.getElementsByClassName("postReviewForm")[0];

POSTOwnReviewButton.addEventListener("click", function (e) {
  reviewCard.style.display = "none";
  POSTreviewForm.style.display = "block";
});
