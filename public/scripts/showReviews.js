const API_URL = "http://localhost:5000/reviews";

async function getAllReviews() {
  const response = await fetch(API_URL);
  console.log(response); // quick test
  const data = await response.json(); // converteert het response in iets dat js kan gebruiken
  const list = document.getElementById("reviewID");
  list.innerHTML = "";
  data.forEach((r) => {
    // dit gaat over elke reviews in "data" en zal hiervoor een div aanmaken en opvullen
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${r.first_name} ${r.last_name}</strong><br>
      <p>"${r.comment}"</p>
      <h3>${r.stars}/5 ★</h3>
    `;
    list.appendChild(div);
  });
  window.startReviewCarousel(); // cycle's reviews in een andere .js
}

getAllReviews();

async function postReview() {
  const firstName = document.getElementById("postFirstName-r").value.trim();
  const lastName = document.getElementById("postLastName-r").value.trim();
  const stars = document.getElementById("postStars-r").value.trim();
  const comment = document.getElementById("postComment-r").value.trim();

  // Controleer of alle velden zijn ingevuld
  if (!firstName || !lastName || !stars || !comment) {
    alert("Gelieve alle velden in te vullen voordat je de review indient.");
    return;
  }

  const body = {
    first_name: firstName,
    last_name: lastName,
    stars: stars,
    comment: comment,
  };

  console.log(body);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    alert(await response.text());
    getAllReviews();
  } catch (error) {
    console.error("Er is een fout opgetreden bij het verzenden van de review:", error);
    alert("Er ging iets mis bij het verzenden van je review. Probeer het later opnieuw.");
  }
}


const SubmitPOSTbutton = document.getElementById("POSTbutton-r");
SubmitPOSTbutton.addEventListener("click", function (e) {
  postReview();
});
