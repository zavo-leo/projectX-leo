function startReviewCarousel() {
  const reviews = document.querySelectorAll("#reviewID > div");
  if (reviews.length === 0) return;

  let currentIndex = 0;
  let intervalId;

  function hideAll() {
    reviews.forEach((div) => (div.style.display = "none"));
  }

  function showReview(index) { 
    reviews.forEach((div, i) => {
      if (i === index) {
        div.classList.add("active");
      } else {
        div.classList.remove("active");
      }
    });
  }

  function showNextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }

  function showPrevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  }

  function resetInterval() { //Timer rests after you click on an arrow
    clearInterval(intervalId);
    intervalId = setInterval(showNextReview, 5000);
  }

  // Initial show
  showReview(currentIndex);
  intervalId = setInterval(showNextReview, 5000);

  // Add arrow functionality
  document.querySelector(".arrow.left").addEventListener("click", () => {
    showPrevReview();
    resetInterval();
  });

  document.querySelector(".arrow.right").addEventListener("click", () => {
    showNextReview();
    resetInterval();
  });
}
