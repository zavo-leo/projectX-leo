document.addEventListener("DOMContentLoaded", function () {
  const POSTreviewForm = document.getElementsByClassName("postReviewForm")[0];
  const reviewCard = document.getElementsByClassName("mainReviews")[0];
  const POSTreviewFormButton = document.getElementById("POSTbutton-r");

  POSTreviewFormButton.addEventListener("click", function (e) {
    reviewCard.style.display = "flex";  
    POSTreviewForm.style.display = "none"; 
  });
});
5