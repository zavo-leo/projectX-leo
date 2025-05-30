const API_URL = "http://localhost:5000/reviews";

async function getAllReviews() {
  const response = await fetch(API_URL);
  console.log(response); // quick test
  const data = await response.json(); // converteert het response in iets dat js kan gebruiken
  const list = document.getElementById("reviewsList");
  list.innerHTML = "";
  data.forEach((r) => {
    // dit gaat over elke reviews in "data" en zal hiervoor een div aanmaken en opvullen
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <strong>${r.first_name} ${r.last_name}</strong><br>
      <em>${r.email}</em><br>
      <p>${r.comment}</p>
      <small>ID: ${r._id}</small>
    `;
    list.appendChild(div);
  });
}

async function GetReviewWithId() {
  const ID = document.getElementById("getID").value;
  const response = await fetch(`${API_URL}/${ID}`);
  console.log(response); // quick test
  const r = await response.json(); // sinds het maar 1 review is kun je niet foreach gebruiken
  const list = document.getElementById("reviewsList");
  list.innerHTML = "";
  const div = document.createElement("div");
  div.className = "review";
  div.innerHTML = `
    <strong>${r.first_name} ${r.last_name}</strong><br>
    <em>${r.email}</em><br>
    <p>${r.comment}</p>
    <small>ID: ${r._id}</small>
  `;
  list.appendChild(div);
}

async function postReview() {
  const body = {
    // een dictionary gevuld door de user
    first_name: document.getElementById("postFirstName").value,
    last_name: document.getElementById("postLastName").value,
    email: document.getElementById("postEmail").value,
    comment: document.getElementById("postComment").value,
  };

  const response = await fetch(API_URL, {
    method: "POST", // verteld de server dat we POST gebruiken
    headers: { "Content-Type": "application/json" }, // is om in de header te steken zodat het duidelijk is dat dit JSON is
    body: JSON.stringify(body), // eerdere body, converten we eerst naar json en dan sturen we het op
  });

  alert(await response.text());
  getAllReviews();
}

async function patchReview() {
  const id = document.getElementById("patchId").value;
  const body = {
    first_name: document.getElementById("patchFirstName").value,
    last_name: document.getElementById("patchLastName").value,
    email: document.getElementById("patchEmail").value,
  };

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  console.log(JSON.stringify(body)); // quick test

  alert(await response.text());
  getAllReviews();
}

async function deleteReview() {
  const id = document.getElementById("deleteId").value;

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  alert(await response.text());
  getAllReviews();
}

// dit is gewoon addeventlisteners die de voorbije functies activeren
const GETbutton = document.getElementById("GETbutton");
GETbutton.addEventListener("click", function (e) {
  getAllReviews();
});

const POSTbutton = document.getElementById("POSTbutton");
POSTbutton.addEventListener("click", function (e) {
  postReview();
});

const PATCHbutton = document.getElementById("PATCHbutton");
PATCHbutton.addEventListener("click", function (e) {
  patchReview();
});

const DELbutton = document.getElementById("DELbutton");
DELbutton.addEventListener("click", function (e) {
  deleteReview();
});

const GETIDbutton = document.getElementById("GETIDbutton");
GETIDbutton.addEventListener("click", function (e) {
  GetReviewWithId();
});
